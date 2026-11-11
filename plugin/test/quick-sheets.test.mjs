/**
 * The four workbenches, driven through the real panel.
 *
 * The Host is faked at fetch: these tests pin what the page does with an
 * answer — show it, and only write into the composer when the reader presses
 * the fill button.
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

/**
 * Type into a controlled input the way a browser does.
 *
 * React tracks the previous value on the DOM node itself, so assigning
 * `node.value` directly is invisible to it — the native setter plus a real
 * input event is what a keystroke looks like.
 * @param {any} node - the input or textarea.
 * @param {string} value - the text to type.
 * @returns {void}
 */
function type(node, value) {
  const proto = node.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
  Object.getOwnPropertyDescriptor(proto, 'value').set.call(node, value);
  node.dispatchEvent(new window.Event('input', { bubbles: true }));
}

/**
 * Mount the dock with a stubbed Host.
 * @param {object} routes - path → response body.
 * @returns {Promise<object>} the harness.
 */
async function mount(routes = {}) {
  const { buildSync } = requireFrom('esbuild');
  const outfile = join(here, '.ui-test.sheets.cjs');
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

  const calls = [];
  globalThis.fetch = async (url, init = {}) => {
    const path = String(url).replace('http://localhost', '');
    calls.push({ path, body: init.body });
    const hit = Object.keys(routes).find((prefix) => path.startsWith(prefix));
    const payload = hit === undefined ? { ok: false, error: { message: 'no stub for ' + path } } : routes[hit];
    return { ok: true, status: 200, json: async () => payload };
  };

  const mod = requireFrom(outfile);
  const writes = [];
  const root = mod.createRoot(dom.window.document.getElementById('host'));
  root.render(
    mod.React.createElement(mod.QuickActionsDock, {
      inputActions: { setDraft: (value) => writes.push(value) },
      // Keep function-valued keys as functions: the sheets call them with their
      // own arguments (e.g. meta(segments, language, duration)).
      t: (key) => mod.zh[key] ?? key,
      locale: () => 'zh',
    }),
  );
  await flush();
  return { mod, dom, root, writes, calls };
}

/**
 * Open one shortcut's workbench from the panel.
 * @param {string} id - the shortcut id.
 * @returns {Promise<void>} resolves when the sheet is on screen.
 */
async function openSheet(id) {
  click(document.querySelector('[data-cbp-more]'));
  await flush();
  click(document.querySelector(`[data-cbp-action="${id}"]`));
  await flush();
}

test('帮我写作: 生成后先给预览，点「填入输入框」才写进草稿', async () => {
  const { root, writes, calls } = await mount({
    '/api/chatbox-pet/write': { ok: true, result: { text: 'Q2 我们上线了 3 个本地支付方式。', genre: 'update' } },
  });
  await openSheet('writing');

  const topic = document.querySelector('[data-cbp-write-topic]');
  assert.ok(topic, 'the write sheet renders its topic field');
  type(topic, 'Q2 进展');
  await flush();

  click(document.querySelector('[data-cbp-write-go]'));
  await flush();
  assert.equal(calls.some((call) => call.path.startsWith('/api/chatbox-pet/write')), true, 'the Host was asked to write');
  const preview = document.querySelector('[data-cbp-written]');
  assert.ok(preview, 'the draft is previewed');
  assert.match(preview.textContent, /Q2 我们上线了/);
  assert.equal(writes.length, 0, 'generating alone writes nothing');

  click([...document.querySelectorAll('.cbp-btn-primary')].find((node) => node.textContent.includes('填入')));
  await flush();
  assert.equal(writes.length, 1, 'the fill button writes once');
  assert.match(writes[0].text, /Q2 我们上线了/);
  assert.equal(document.querySelector('[data-cbp-sheet]'), null, 'the sheet closes after filling');
  root.unmount();
});

test('PPT 生成: 结果卡片显示页数与路径，不自动下载', async () => {
  const { root, calls } = await mount({
    '/api/chatbox-pet/deck': {
      ok: true,
      result: { path: '/Users/x/.dsh/chatbox-pet/decks/a.pptx', name: 'a.pptx', slides: 6, title: '季度复盘', base64: '' },
    },
  });
  await openSheet('slides');

  const topic = document.querySelector('[data-cbp-deck-topic]');
  type(topic, '季度复盘');
  await flush();
  click(document.querySelector('[data-cbp-deck-go]'));
  await flush();

  assert.equal(calls.some((call) => call.path.startsWith('/api/chatbox-pet/deck')), true);
  const card = document.querySelector('[data-cbp-deck-result]');
  assert.ok(card, 'the result card renders');
  assert.match(card.textContent, /季度复盘/);
  assert.match(card.textContent, /6 页/);
  assert.match(card.textContent, /a\.pptx/);
  assert.ok(document.querySelector('[data-cbp-deck-download]'), 'a download button is offered');
  root.unmount();
});

test('录音转写: 选一个音频文件，转写结果可填入输入框', async () => {
  const { root, writes } = await mount({
    '/api/chatbox-pet/transcribe': {
      ok: true,
      result: {
        text: '明天下午三点开会。',
        segments: [{ start: 0, end: 2, text: '明天下午三点开会。' }],
        language: 'zh',
        durationSeconds: 2,
      },
    },
  });
  await openSheet('transcribe');

  const input = document.querySelector('[data-cbp-audio-file]');
  assert.ok(input, 'a file picker is offered');
  const file = new File([new Uint8Array([1, 2, 3])], 'note.webm', { type: 'audio/webm' });
  Object.defineProperty(input, 'files', { value: [file], configurable: true });
  input.dispatchEvent(new window.Event('change', { bubbles: true }));
  await flush();

  const transcript = document.querySelector('[data-cbp-transcript]');
  assert.ok(transcript, 'the transcript renders');
  assert.match(transcript.textContent, /明天下午三点开会/);
  assert.equal(writes.length, 0, 'transcribing alone writes nothing');

  click([...document.querySelectorAll('.cbp-btn-primary')].find((node) => node.textContent.includes('填入')));
  await flush();
  assert.equal(writes.length, 1);
  assert.match(writes[0].text, /明天下午三点开会/);
  root.unmount();
});

test('视频理解: 贴链接后填入一条带链接的 video_read 指令', async () => {
  const { root, writes } = await mount();
  await openSheet('read-video');

  const link = document.querySelector('[data-cbp-video-link]');
  type(link, 'https://www.youtube.com/watch?v=abc');
  await flush();
  click(document.querySelector('[data-cbp-video-go]'));
  await flush();

  assert.equal(writes.length, 1);
  assert.match(writes[0].text, /video_read/);
  assert.match(writes[0].text, /youtube\.com\/watch\?v=abc/);
  root.unmount();
});