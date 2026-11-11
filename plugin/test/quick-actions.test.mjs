/**
 * The "更多" seat, rendered for real.
 *
 * Two promises are pinned here, because both are easy to break silently:
 *   1. the pill opens a panel with the shortcut catalogue and nothing is sent;
 *   2. choosing a shortcut writes its template into the composer draft and
 *      closes the panel — the reader still presses send.
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, join } from 'node:path';

const here = dirname(new URL(import.meta.url).pathname);

/**
 * Resolve a peer dependency the same way build.mjs does.
 * @param {string} id - the module id.
 * @returns {any} the module.
 */
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

const flush = () => new Promise((resolve) => setTimeout(resolve, 50));

/**
 * Build the test bundle once and stand up a jsdom page.
 * @returns {Promise<object>} the bundled modules plus helpers.
 */
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
  const dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>', {
    url: 'http://localhost/',
    pretendToBeVisual: true,
  });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;

  const mod = requireFrom(outfile);
  return { ...mod, dom, host: dom.window.document.getElementById('host') };
}

/**
 * A translator over one of the real dictionaries.
 * @param {object} dict - the dictionary.
 * @returns {Function} `t(key)`.
 */
function translator(dict) {
  return (key) => (typeof dict[key] === 'function' ? dict[key](1) : dict[key] ?? key);
}

test('the pill opens the shortcut panel and a shortcut only fills the composer', async () => {
  const { createRoot, QuickActionsDock, React, host, zh } = await mount();
  const writes = [];
  const inputActions = { setDraft: (value) => writes.push(value) };
  const t = translator(zh);
  const root = createRoot(host);
  root.render(React.createElement(QuickActionsDock, { inputActions, t, locale: () => 'zh' }));
  await flush();

  const pill = host.querySelector('[data-cbp-more]');
  assert.ok(pill, 'the pill renders');
  assert.equal(pill.textContent.includes('更多'), true, 'the pill says 更多');
  assert.equal(host.screen ?? null, null);
  assert.equal(document.querySelector('[data-cbp-quick-panel]'), null, 'the panel starts closed');

  pill.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  await flush();

  const panel = document.querySelector('[data-cbp-quick-panel]');
  assert.ok(panel, 'the panel opens');
  const items = [...panel.querySelectorAll('[data-cbp-action]')];
  assert.equal(items.length, 7, 'one item per shortcut');
  assert.equal(panel.textContent.includes('录音转写'), true);
  assert.equal(panel.textContent.includes('PPT 生成'), true);
  assert.equal(panel.textContent.includes('不会自动发送'), true);
  assert.equal(writes.length, 0, 'opening the panel sends nothing');

  items.find((node) => node.dataset.cbpAction === 'transcribe').dispatchEvent(
    new window.MouseEvent('click', { bubbles: true }),
  );
  await flush();
  assert.equal(writes.length, 1, 'choosing a shortcut writes once');
  assert.deepEqual(writes[0], {
    text: '帮我转写这段录音，并按要点整理成清单。',
    references: [],
  });
  assert.equal(document.querySelector('[data-cbp-quick-panel]'), null, 'the panel closes after choosing');

  root.unmount();
});

test('Escape closes the panel without writing anything', async () => {
  const { createRoot, QuickActionsDock, React, host, zh } = await mount();
  const writes = [];
  const inputActions = { setDraft: (value) => writes.push(value) };
  const root = createRoot(host);
  root.render(React.createElement(QuickActionsDock, { inputActions, t: translator(zh), locale: () => 'zh' }));
  await flush();

  host.querySelector('[data-cbp-more]').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
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

  host.querySelector('[data-cbp-more]').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  await flush();
  const panel = document.querySelector('[data-cbp-quick-panel]');
  assert.equal(panel.textContent.includes('Quick actions'), true);
  assert.equal(panel.textContent.includes('Transcribe'), true);

  panel.querySelector('[data-cbp-action="transcribe"]').dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  await flush();
  assert.deepEqual(writes[0], {
    text: 'Transcribe this recording and turn it into a list of key points.',
    references: [],
  });

  root.unmount();
});
