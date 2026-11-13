/**
 * The merge chip rendered for real, in jsdom.
 *
 * The unit tests cover what the queue view says; this one covers what the reader
 * sees: the chip is absent when nothing can be folded, a text queue folds in
 * place with an edit-then-remove write, and a queue carrying images is folded by
 * queuing one message with every picture on it.
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(new URL(import.meta.url).pathname);

/**
 * Resolve a peer dependency the same way build.mjs does.
 * @param {string} id - the module id.
 * @returns {any} the module.
 */
function requireFrom(id) {
  const anchors = [join(here, '..', 'package.json'), join(here, '..', '..', 'chat-selection', 'package.json'), join(here, '..', '..', '..', 'chat-selection', 'package.json')];
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

/**
 * One queued message.
 * @param {string} id - item id.
 * @param {string} text - its text.
 * @param {Array<object>} [extra] - extra content blocks.
 * @returns {object} the message.
 */
function queued(id, text, extra = []) {
  return { id, role: 'user', content: [{ type: 'text', text }, ...extra] };
}

const picture = (id, attachmentId) => ({
  id,
  role: 'user',
  content: [{ type: 'image', attachment: { attachmentId, mediaType: 'image/png' } }],
});

test('the merge chip folds a text queue in place and a picture queue by requeue', async () => {
  const { buildSync } = requireFrom('esbuild');
  const outfile = join(here, '.ui-test.merge.cjs');
  buildSync({
    entryPoints: [join(here, 'ui-entry-merge.jsx')],
    bundle: true,
    format: 'cjs',
    jsx: 'automatic',
    platform: 'browser',
    logLevel: 'silent',
    alias: { '@deepseek-ai/dsh-client-ui-primitives': join(here, 'stub-ui-primitives.js') },
    nodePaths: [
      join(here, '..', 'node_modules'),
      join(here, '..', '..', 'chat-selection', 'node_modules'),
      join(here, '..', '..', '..', 'chat-selection', 'node_modules'),
    ].filter((path) => existsSync(path)),
    outfile,
  });

  const { JSDOM } = requireFrom('jsdom');
  const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/', pretendToBeVisual: true });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.localStorage = dom.window.localStorage;
  const requests = [];
  globalThis.fetch = async (url, init) => {
    requests.push({ url, body: JSON.parse(init.body) });
    return { ok: true, json: async () => ({ ok: true, result: { prompt: '合并稿', optimized: true, reason: '' } }) };
  };

  try {
    const { createRoot, QueueMergeButton, React, zh } = requireFrom(outfile);

    /**
     * Render the chip over one queue.
     * @param {Array<object>} items - the initial `next-turn` contents.
     * @returns {Promise<object>} the container, the call log and a teardown.
     */
    async function render(items) {
      let snapshot = items;
      // The face must be stable between renders: a fresh object per
      // `getSnapshot()` call makes useSyncExternalStore re-render forever.
      let cell = { 'next-turn': snapshot };
      const face = { subscribe: () => () => {}, getSnapshot: () => cell };
      const calls = [];
      const session = {
        projections: { faceOf: () => face },
        async readAttachment(ref) {
          calls.push(['read', ref.attachmentId]);
          return { ok: true, value: { attachment: ref, data: Uint8Array.from([1, 2, 3]) } };
        },
        async prompt(content, mode) {
          calls.push(['prompt', mode, content]);
          snapshot = [...snapshot, { id: 'merged', role: 'user', content }];
          cell = { 'next-turn': snapshot };
          return { ok: true, value: { accepted: true } };
        },
        async updateQueue(id, action) {
          calls.push([id, action]);
          if (action.kind === 'edit') {
            snapshot = snapshot.map((item) => (item.id === id ? { ...item, content: action.content } : item));
          } else {
            snapshot = snapshot.filter((item) => item.id !== id);
          }
          cell = { 'next-turn': snapshot };
          return { ok: true };
        },
      };
      const container = dom.window.document.createElement('div');
      dom.window.document.body.appendChild(container);
      const root = createRoot(container);
      root.render(
        React.createElement(QueueMergeButton, {
          sessionId: 's1',
          sessions: { binding: () => ({ session }) },
          t: (key) => zh[key],
          locale: () => 'zh',
        }),
      );
      await flush();
      return { container, calls, root };
    }

    // One image and one text: nothing to fold, so no chip.
    const single = await render([picture('i1', 'a')]);
    assert.equal(single.container.querySelector('[data-cbp-merge]'), null, 'no chip for a single message');
    single.root.unmount();
    await flush();

    // Two text messages: the chip folds them in place.
    const texts = await render([queued('a', '第一条'), queued('b', '第二条')]);
    const chip = texts.container.querySelector('[data-cbp-merge]');
    assert.ok(chip, 'the chip renders for a foldable queue');
    assert.equal(chip.getAttribute('data-cbp-merge-mode'), 'edit');
    assert.equal(chip.getAttribute('data-cbp-merge-batch'), '2');
    assert.equal(chip.getAttribute('aria-label'), zh['merge.label'](2));
    chip.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    assert.deepEqual(texts.calls.slice(-2).map(([id, action]) => [id, action.kind]), [['a', 'edit'], ['b', 'remove']]);
    assert.equal(texts.container.querySelector('[data-cbp-merge]'), null, 'the chip leaves with the queue');
    texts.root.unmount();
    await flush();

    // Two image messages: the chip folds both pictures into ONE queued message.
    const pictures = await render([picture('i1', 'a'), picture('i2', 'b')]);
    const pictureChip = pictures.container.querySelector('[data-cbp-merge]');
    assert.ok(pictureChip, 'an image-only queue can be merged');
    assert.equal(pictureChip.getAttribute('data-cbp-merge-mode'), 'requeue');
    assert.equal(pictureChip.getAttribute('aria-label'), zh['merge.labelImages'](2, 2));
    pictureChip.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    const prompt = pictures.calls.find((call) => call[0] === 'prompt');
    assert.ok(prompt, 'one new message is queued: ' + JSON.stringify(pictures.calls.map((call) => [call[0], call[1]])));
    assert.equal(prompt[1], 'queue');
    assert.deepEqual(prompt[2].map((part) => part.type), ['image', 'image'], 'both pictures ride on it');
    assert.deepEqual(
      pictures.calls.filter((call) => call[0] !== 'prompt' && call[0] !== 'read').map(([id, action]) => [id, action.kind]),
      [['i1', 'remove'], ['i2', 'remove']],
    );
    assert.equal(pictures.container.querySelector('[data-cbp-merge]'), null, 'one merged message is left');
    pictures.root.unmount();
    await flush();

    // Image then two texts: the whole queue folds, images first, merged text last.
    const mixed = await render([picture('img', 'c'), queued('a', '第一条'), queued('b', '第二条')]);
    const mixedChip = mixed.container.querySelector('[data-cbp-merge]');
    assert.ok(mixedChip, 'a mixed queue is mergeable');
    assert.equal(mixedChip.getAttribute('data-cbp-merge-mode'), 'requeue');
    assert.equal(mixedChip.getAttribute('data-cbp-merge-count'), '3');
    mixedChip.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    const mixedPrompt = mixed.calls.find((call) => call[0] === 'prompt');
    assert.deepEqual(mixedPrompt[2].map((part) => part.type), ['image', 'text'], 'images first, text last');
    assert.equal(mixedPrompt[2][1].text, '合并稿');
    assert.deepEqual(
      mixed.calls.filter((call) => call[0] !== 'prompt' && call[0] !== 'read').map(([id, action]) => [id, action.kind]),
      [['img', 'remove'], ['a', 'remove'], ['b', 'remove']],
    );
    mixed.root.unmount();
    await flush();
  } finally {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
  }
});
