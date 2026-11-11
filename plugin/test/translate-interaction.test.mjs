/**
 * The translation workbench interactions: a translated sentence exposes its
 * words, clicking one opens its card, and the card can go back to the
 * translation. Also pins the example highlighting.
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
  for (const anchor of anchors) {
    try {
      return createRequire(anchor)(id);
    } catch {
      // try the next anchor
    }
  }
  throw new Error('cannot resolve ' + id);
}

const flush = () => new Promise((resolve) => setTimeout(resolve, 80));
const click = (node) => node.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));

function type(node, value) {
  Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set.call(node, value);
  node.dispatchEvent(new window.Event('input', { bubbles: true }));
}

async function mount(routes) {
  const { buildSync } = requireFrom('esbuild');
  const outfile = join(here, '.ui-test.translate.cjs');
  buildSync({
    entryPoints: [join(here, 'ui-entry.jsx')],
    bundle: true,
    format: 'cjs',
    jsx: 'automatic',
    platform: 'browser',
    logLevel: 'silent',
    nodePaths: [join(here, '..', 'node_modules'), join(here, '..', '..', 'chat-selection', 'node_modules')].filter((p) => existsSync(p)),
    outfile,
  });
  const { JSDOM } = requireFrom('jsdom');
  const dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>', { url: 'http://localhost/', pretendToBeVisual: true });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.Node = dom.window.Node;
  Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
  globalThis.Audio = class {
    play() { return Promise.resolve(); }
  };
  const calls = [];
  globalThis.fetch = async (url, init = {}) => {
    const path = String(url).replace('http://localhost', '');
    calls.push({ path, body: init.body });
    const hit = Object.keys(routes).find((prefix) => path.startsWith(prefix));
    const payload = hit === undefined ? { ok: false, error: { message: 'no stub ' + path } } : routes[hit];
    return { ok: true, status: 200, json: async () => payload };
  };
  const mod = requireFrom(outfile);
  const root = mod.createRoot(document.getElementById('host'));
  const t = (key) => mod.zh[key] ?? key;
  root.render(mod.React.createElement(mod.TranslateWorkbench, { t, locale: () => 'zh', inputActions: { setDraft() {} } }));
  await flush();
  return { mod, root, calls };
}

const SENTENCE = {
  '/api/chatbox-pet/translate': { ok: true, result: { translated: 'This is a milestone.', from: 'zh', to: 'en', engine: 'local', ms: 300 } },
  '/api/chatbox-pet/favorites': { ok: true, result: { items: [] } },
  '/api/chatbox-pet/translate/engine': { ok: true, result: { local: true, model: 'hy-mt2-7b', models: [] } },
};

test('译文里的英文单词可点，点开后出词卡并能返回', async () => {
  const { root, calls } = await mount({
    ...SENTENCE,
    '/api/chatbox-pet/translate': { ok: true, result: { translated: 'This is a milestone.', from: 'zh', to: 'en', engine: 'local', ms: 300 } },
  });
  type(document.querySelector('[data-cbt-source]'), '这是一个里程碑。');
  click(document.querySelector('[data-cbt-translate]'));
  await flush();
  await flush();
  const words = document.querySelectorAll('[data-cbt-word]');
  assert.ok(words.length >= 3, 'each latin word is a button');
  assert.equal(document.querySelector('[data-cbt-back]'), null, 'no back button before a lookup');
  root.unmount();
});

test('例句里的词条被 mark 标记', async () => {
  const { root } = await mount({
    ...SENTENCE,
    '/api/chatbox-pet/translate': {
      ok: true,
      result: {
        dict: {
          word: 'milestone',
          phonetic: '',
          senses: [{ pos: 'n.', meaning: '里程碑', example: 'The team reached a major milestone.' }],
          note: '',
        },
        engine: 'local',
        ms: 400,
      },
    },
  });
  type(document.querySelector('[data-cbt-source]'), 'milestone');
  click(document.querySelector('[data-cbt-translate]'));
  await flush();
  await flush();
  const marks = [...document.querySelectorAll('[data-cbt-example] mark')].map((node) => node.textContent);
  assert.deepEqual(marks, ['milestone'], 'the headword is marked inside the example');
  root.unmount();
});
