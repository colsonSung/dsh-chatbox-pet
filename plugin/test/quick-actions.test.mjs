/**
 * The "更多" seat, rendered for real.
 *
 * Pinned here are the promises that break silently:
 *   1. the pill opens a panel with the catalogue, and opening it sends nothing;
 *   2. a shortcut that has a workbench opens the workbench, not a prompt;
 *   3. a prompt-only shortcut writes exactly one draft and closes the panel;
 *   4. Escape closes without writing.
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, join } from 'node:path';

const here = dirname(new URL(import.meta.url).pathname);

function requireFrom(id) {
  const anchors = [
    join(here, '..', 'package.json'),
    join(here, '..', '..', 'chat-selection', 'package.json'),
    join(here, '..', '..', '..', 'chat-selection', 'package.json'),
  ];
  const errors = [];
  for (const anchor of anchors) {
    try {
      return createRequire(anchor)(id);
    } catch (error) {
      errors.push(`${anchor}: ${error?.code ?? error}`);
    }
  }
  throw new Error(`cannot resolve ${id}\n  ` + errors.join('\n  '));
}

const flush = () => new Promise((resolve) => setTimeout(resolve, 60));
const click = (node) => node.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

async function mount() {
  const { buildSync } = requireFrom('esbuild');
  const outfile = join(here, '.ui-test.quick.cjs');
  buildSync({
    entryPoints: [join(here, 'ui-entry.jsx')],
    bundle: true,
    format: 'cjs',
    jsx: 'automatic',
    platform: 'browser',
    logLevel: 'silent',
    nodePaths: [
      join(here, '..', 'node_modules'),
      join(here, '..', '..', 'chat-selection', 'node_modules'),
      join(here, '..', '..', '..', 'chat-selection', 'node_modules'),
    ].filter((path) => existsSync(path)),
    outfile,
  });

  const { JSDOM } = requireFrom('jsdom');
  const dom = new JSDOM(
    '<!doctype html><html><body><div data-composer-card="true"><div id="host"></div></div></body></html>',
    { url: 'http://localhost/', pretendToBeVisual: true },
  );
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.Node = dom.window.Node;
  Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });

  const mod = requireFrom(outfile);
  return { ...mod, dom, host: dom.window.document.getElementById('host') };
}

function translator(dict) {
  return (key) => (typeof dict[key] === 'function' ? dict[key](1) : dict[key] ?? key);
}

test('the pill opens the catalogue; a workbench shortcut opens its sheet and writes nothing', async () => {
  const { createRoot, QuickActionsDock, React, host, zh } = await mount();
  const writes = [];
  const root = createRoot(host);
  root.render(
    React.createElement(QuickActionsDock, {
      inputActions: { setDraft: (value) => writes.push(value) },
      t: translator(zh),
      locale: () => 'zh',
    }),
  );
  await flush();

  const pill = document.querySelector('[data-cbp-more]');
  assert.ok(pill, 'the pill renders');
  assert.equal(
    pill.closest('[data-composer-card="true"]') !== null,
    true,
    'the pill lives inside the composer card',
  );
  assert.equal(document.querySelector('[data-cbp-quick-panel]'), null, 'the panel starts closed');

  click(pill);
  await flush();
  const panel = document.querySelector('[data-cbp-quick-panel]');
  assert.ok(panel, 'the panel opens');
  assert.equal(panel.querySelectorAll('[data-cbp-action]').length, 8, 'one item per shortcut');
  assert.ok(panel.querySelector('[data-cbp-action="translate"]'), 'the translation workbench is in the panel');
  assert.equal(writes.length, 0, 'opening the panel sends nothing');

  click(panel.querySelector('[data-cbp-action="transcribe"]'));
  await flush();
  assert.ok(document.querySelector('[data-cbp-sheet]'), 'the transcribe workbench opens');
  assert.equal(writes.length, 0, 'opening a workbench writes nothing');

  click(document.querySelector('.cbp-sheet-close'));
  await flush();
  assert.equal(document.querySelector('[data-cbp-sheet]'), null, 'the workbench closes');

  // The translation entry opens its own workbench with the two views.
  click(pill);
  await flush();
  click(document.querySelector('[data-cbp-action="translate"]'));
  await flush();
  assert.ok(document.querySelector('[data-cbt-view="translate"]'), 'the translation view opens');
  assert.equal(
    document.querySelector('[data-cbp-sheet]')?.parentElement,
    document.body,
    'the sheet is portaled to document.body — inside the composer card it would anchor to the card, not the viewport',
  );
  assert.ok(document.querySelector('[data-cbt-source]'), 'it has a text input inside the panel');
  click(document.querySelector('.cbp-sheet-close'));
  await flush();

  // A prompt-only shortcut still behaves like before.
  click(pill);
  await flush();
  click(document.querySelector('[data-cbp-action="image"]'));
  await flush();
  assert.equal(writes.length, 1, 'choosing a prompt shortcut writes once');
  assert.deepEqual(writes[0], { text: '帮我生成一张图：', references: [] });
  assert.equal(document.querySelector('[data-cbp-quick-panel]'), null, 'the panel closes after choosing');

  root.unmount();
});

test('Escape closes the panel without writing anything', async () => {
  const { createRoot, QuickActionsDock, React, host, zh } = await mount();
  const writes = [];
  const root = createRoot(host);
  root.render(
    React.createElement(QuickActionsDock, {
      inputActions: { setDraft: (value) => writes.push(value) },
      t: translator(zh),
      locale: () => 'zh',
    }),
  );
  await flush();

  click(document.querySelector('[data-cbp-more]'));
  await flush();
  assert.ok(document.querySelector('[data-cbp-quick-panel]'), 'panel open before Escape');
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  await flush();
  assert.equal(document.querySelector('[data-cbp-quick-panel]'), null, 'Escape closes the panel');
  assert.equal(writes.length, 0, 'Escape writes nothing');

  root.unmount();
});

test('an English reader gets English labels and an English template', async () => {
  const { createRoot, QuickActionsDock, React, host, en } = await mount();
  const writes = [];
  const root = createRoot(host);
  root.render(
    React.createElement(QuickActionsDock, {
      inputActions: { setDraft: (value) => writes.push(value) },
      t: translator(en),
      locale: () => 'en',
    }),
  );
  await flush();

  click(document.querySelector('[data-cbp-more]'));
  await flush();
  const panel = document.querySelector('[data-cbp-quick-panel]');
  assert.equal(panel.textContent.includes('Quick actions'), true);
  assert.equal(panel.textContent.includes('Transcribe'), true);

  click(panel.querySelector('[data-cbp-action="image"]'));
  await flush();
  assert.deepEqual(writes[0], { text: 'Generate an image of ', references: [] });

  root.unmount();
});
