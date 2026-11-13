/**
 * The merge chip rendered for real, in jsdom.
 *
 * The unit tests cover what the queue view says; this one covers what the reader
 * sees: the chip is absent for a queue the Host would refuse (image-only), its
 * badge counts the foldable run, and a click writes exactly the edit-then-remove
 * sequence and nothing else.
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

const image = (id) => ({ type: 'image', attachment: { attachmentId: id } });

test('the merge chip only appears for a queue the Host can actually fold', async () => {
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
     * @returns {object} the container, the writes and a teardown.
     */
    async function render(items) {
      let snapshot = items;
      // The face must be stable between renders: a fresh object per
      // `getSnapshot()` call makes useSyncExternalStore re-render forever.
      let cell = { 'next-turn': snapshot };
      const face = {
        subscribe: () => () => {},
        getSnapshot: () => cell,
      };
      const writes = [];
      const session = {
        projections: { faceOf: () => face },
        async updateQueue(id, action) {
          writes.push([id, action]);
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
      return { container, writes, root, requests };
    }

    // The reported queue: two image-only messages. The Host refuses an edit of
    // those (text blocks only), so the chip must not be there at all.
    const imagesOnly = await render([
      { id: 'i1', role: 'user', content: [image('a')] },
      { id: 'i2', role: 'user', content: [image('b')] },
    ]);
    assert.equal(imagesOnly.container.querySelector('[data-cbp-merge]'), null, 'no chip for an image-only queue');
    imagesOnly.root.unmount();
    await flush();

    // Two text messages: the chip is there, badges 2, and folding it writes
    // edit(first) then remove(second) with text-only content.
    const texts = await render([queued('a', '第一条'), queued('b', '第二条')]);
    const chip = texts.container.querySelector('[data-cbp-merge]');
    assert.ok(chip, 'the chip renders for a foldable queue');
    assert.equal(chip.getAttribute('data-cbp-merge-batch'), '2');
    assert.equal(chip.getAttribute('aria-label'), zh['merge.label'](2));
    texts.container.querySelector('[data-cbp-merge]').dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    assert.deepEqual(texts.writes.map(([id, action]) => [id, action.kind]), [['a', 'edit'], ['b', 'remove']]);
    assert.deepEqual(texts.writes[0][1].content, [{ type: 'text', text: '合并稿' }], 'the edit carries text only');
    assert.equal(requests.at(-1).body.texts.length, 2, 'both texts were sent to the Host');
    assert.equal(texts.container.querySelector('[data-cbp-merge]'), null, 'the chip leaves with the queue');
    texts.root.unmount();
    await flush();

    // An image in front of two texts: the foldable run is the two texts, and the
    // chip says the image stays behind instead of claiming a fold of three.
    const mixed = await render([{ id: 'img', role: 'user', content: [image('c')] }, queued('a', '第一条'), queued('b', '第二条')]);
    const mixedChip = mixed.container.querySelector('[data-cbp-merge]');
    assert.ok(mixedChip, 'the text run after the image is mergeable');
    assert.equal(mixedChip.getAttribute('data-cbp-merge-batch'), '2');
    assert.equal(mixedChip.getAttribute('data-cbp-merge-count'), '3');
    assert.equal(mixedChip.getAttribute('aria-label'), zh['merge.labelSkipped'](2, 1));
    mixedChip.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    assert.deepEqual(mixed.writes.map(([id, action]) => [id, action.kind]), [['a', 'edit'], ['b', 'remove']], 'the image is never written');
    assert.equal(requests.at(-1).body.texts.length, 2);
    mixed.root.unmount();
    await flush();
  } finally {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
  }
});
