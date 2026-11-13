/**
 * Unit tests for merging queued messages.
 *
 * Two halves: the host's text judgement (what is mergeable, how to join, how to
 * accept a model answer) and the page's queue mechanics (what the chip counts,
 * and the exact edit/remove sequence that turns N queue items into one).
 *
 * The property that matters most: a merge may never lose the reader's words.
 * Every refusal path is asserted, because a silent refusal looks like a
 * broken button and a silent acceptance looks like lost text.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  buildMergeSystemPrompt,
  buildMergeUserPrompt,
  hasAttachment,
  joinQueued,
  MERGED_TEXT_LIMIT,
  MERGE_LIMIT,
  planMerge,
  sanitizeMerged,
  textOf,
} from '../src/host/merge.js';
import {
  applyMerge,
  applyRequeue,
  base64Of,
  foldRun,
  hasAttachment as clientHasAttachment,
  imagesOf,
  isFoldable,
  joinTexts,
  MAX_IMAGES,
  MERGE_LIMIT as CLIENT_MERGE_LIMIT,
  mergeQueue,
  readItems,
  requestMergedText,
  textOf as clientTextOf,
} from '../src/client/queue-merge.js';

/**
 * One queued message.
 * @param {string} id - the item id.
 * @param {string} text - its text.
 * @param {Array<object>} [extra] - extra content blocks.
 * @returns {object} the queued item.
 */
function queued(id, text, extra = []) {
  return { id, role: 'user', content: [{ type: 'text', text }, ...extra], source: { kind: 'user' } };
}

test('the text of a queued item is its text blocks, joined', () => {
  assert.equal(textOf(queued('a', '你好')), '你好');
  assert.equal(textOf({ id: 'b', content: [{ type: 'text', text: 'a' }, { type: 'text', text: 'b' }] }), 'ab');
  assert.equal(textOf({ id: 'c', content: [{ type: 'image', attachment: {} }] }), '');
  assert.equal(textOf({}), '');
  assert.equal(clientTextOf(queued('d', '  留白  ')), '留白');
});

test('an attachment is detected on either side', () => {
  const image = { type: 'image', attachment: { attachmentId: 'x' } };
  assert.equal(hasAttachment(queued('a', 'text', [image])), true);
  assert.equal(hasAttachment(queued('a', 'text')), false);
  assert.equal(hasAttachment({}), false);
  assert.equal(clientHasAttachment(queued('a', 'text', [image])), true);
});

test('a merge needs at least two non-empty messages; a long queue is folded in batches', () => {
  assert.equal(planMerge([queued('a', 'one')]).reason, 'too-few');
  assert.equal(planMerge([]).reason, 'too-few');
  assert.equal(planMerge([queued('a', 'one'), queued('b', '   ')]).reason, 'empty');

  // The Host's queue edit takes TextBlock[] only, so a folded attachment would
  // be dropped: the batch is refused, not silently stripped.
  const withImage = planMerge([queued('a', 'one'), queued('b', 'two', [{ type: 'image', attachment: {} }])]);
  assert.equal(withImage.ok, false);
  assert.equal(withImage.reason, 'attachment');

  // A queue longer than one batch is not a refusal; only the batch is described.
  const tooMany = Array.from({ length: MERGE_LIMIT + 4 }, (_, index) => queued(String(index), `m${index}`));
  const batched = planMerge(tooMany);
  assert.equal(batched.ok, true);
  assert.equal(batched.items.length, MERGE_LIMIT);
  assert.equal(batched.texts.length, MERGE_LIMIT);
  assert.equal(batched.total, MERGE_LIMIT + 4);

  const ok = planMerge([queued('a', 'one'), queued('b', 'two')]);
  assert.equal(ok.ok, true);
  assert.deepEqual(ok.texts, ['one', 'two']);
});

test('the local join keeps every word and adds nothing', () => {
  assert.equal(joinQueued(['  one  ', '', 'two ']), 'one\n\ntwo');
  assert.equal(joinQueued([]), '');
  assert.equal(joinTexts(['a', 'b']), 'a\n\nb');
});

test('the model answer is trimmed to a sendable body', () => {
  assert.equal(sanitizeMerged('  合并后的正文  '), '合并后的正文');
  assert.equal(sanitizeMerged('```\n正文\n```'), '正文');
  assert.equal(sanitizeMerged('「正文」'), '正文');
  assert.equal(sanitizeMerged(''), '');
  assert.equal(sanitizeMerged(null), '');
  const long = '×'.repeat(MERGED_TEXT_LIMIT + 50);
  assert.equal(Array.from(sanitizeMerged(long)).length, MERGED_TEXT_LIMIT);
});

test('the merge prompt forbids inventing requirements', () => {
  const zh = buildMergeSystemPrompt('zh');
  assert.match(zh, /不得新增/);
  const en = buildMergeSystemPrompt('en');
  assert.match(en, /Add no requirement/);
  const user = buildMergeUserPrompt(['第一条', '第二条']);
  assert.match(user, /1\. 第一条/);
  assert.match(user, /2\. 第二条/);
});

test('the chip counts the batch: a text run in place, a whole image queue by requeue', () => {
  const view = readItems([queued('a', 'one'), queued('b', 'two'), queued('c', 'three')]);
  assert.equal(view.items.length, 3);
  assert.equal(view.blocked, '');
  assert.equal(view.start, 0);
  assert.equal(view.batch, 3);
  assert.equal(view.batches, 1);
  assert.equal(view.skipped, 0);
  assert.equal(readItems([queued('a', 'one')]).blocked, 'too-few');
  assert.equal(readItems([]).blocked, 'too-few');

  // The queue in the bug report: two image-only messages. Images cannot travel
  // the text edit, so the merge is a requeue of the whole queue and it carries
  // both pictures.
  const imageOnly = readItems([
    { id: 'a', content: [{ type: 'image', attachment: { attachmentId: 'i1', mediaType: 'image/jpeg' } }] },
    { id: 'b', content: [{ type: 'image', attachment: { attachmentId: 'i2', mediaType: 'image/jpeg' } }] },
  ]);
  assert.equal(imageOnly.blocked, '');
  assert.equal(imageOnly.mode, 'requeue');
  assert.equal(imageOnly.batch, 2);
  assert.equal(imageOnly.start, 0);
  assert.equal(imageOnly.images, 2);

  // A file is not re-admissible from the page, so it splits the queue; the text
  // run after it is still foldable in place and the skipped count stays honest.
  const mixed = readItems([queued('a', 'one'), queued('b', 'two', [{ type: 'file', attachment: {} }]), queued('c', 'three'), queued('d', 'four')]);
  assert.equal(mixed.blocked, '');
  assert.equal(mixed.mode, 'edit');
  assert.equal(mixed.start, 2);
  assert.equal(mixed.batch, 2);
  assert.equal(mixed.skipped, 2);

  // Words, a picture, more words: the queue holds an image, so it merges whole
  // rather than moving the second text in front of the picture.
  const withPicture = readItems([queued('a', 'one'), queued('b', 'two', [{ type: 'image', attachment: { attachmentId: 'x', mediaType: 'image/png' } }]), queued('c', 'three')]);
  assert.equal(withPicture.mode, 'requeue');
  assert.equal(withPicture.batch, 3);
  assert.equal(withPicture.images, 1);

  // A queue that is only a file and one text has nothing to fold.
  const fileOnly = readItems([queued('a', 'one', [{ type: 'file', attachment: {} }]), queued('b', 'two', [{ type: 'file', attachment: {} }])]);
  assert.equal(fileOnly.blocked, 'unsupported', 'files have no re-admission path from the page');
  assert.equal(fileOnly.mode, 'none');

  // More images than one message may carry: the chip must not offer the write.
  const tooMany = readItems(
    Array.from({ length: MAX_IMAGES + 1 }, (_, index) => ({ id: `i${index}`, content: [{ type: 'image', attachment: { attachmentId: `a${index}`, mediaType: 'image/png' } }] })),
  );
  assert.equal(tooMany.blocked, 'too-many-images');
  assert.equal(tooMany.mode, 'none');

  const long = readItems(Array.from({ length: CLIENT_MERGE_LIMIT + 5 }, (_, i) => queued(String(i), `m${i}`)));
  assert.equal(long.blocked, '');
  assert.equal(long.batch, CLIENT_MERGE_LIMIT);
  assert.equal(long.batches, 2);
  assert.equal(CLIENT_MERGE_LIMIT, MERGE_LIMIT);
});

test('only consecutive text-only messages are foldable', () => {
  const image = { type: 'image', attachment: { attachmentId: 'x' } };
  assert.equal(isFoldable(queued('a', 'one')), true);
  assert.equal(isFoldable(queued('a', '   ')), false);
  assert.equal(isFoldable(queued('a', 'one', [image])), false);
  assert.equal(isFoldable({ content: [{ type: 'text', text: 'no id' }] }), false);
  assert.deepEqual(foldRun([queued('a', 'one')], ['one']), { start: -1, length: 0 });
  assert.deepEqual(foldRun([queued('a', 'one'), queued('b', 'two')], ['one', 'two']), { start: 0, length: 2 });
});

test('applying a merge edits the first item, then removes the rest', async () => {
  const calls = [];
  const session = {
    async updateQueue(id, action) {
      calls.push([id, action.kind]);
      return { ok: true };
    },
  };
  const items = [queued('a', 'one'), queued('b', 'two'), queued('c', 'three')];
  const result = await applyMerge(session, items, 'one and two and three');
  assert.equal(result.ok, true);
  assert.equal(result.removed, 2);
  assert.deepEqual(calls, [
    ['a', 'edit'],
    ['b', 'remove'],
    ['c', 'remove'],
  ]);
});

test('a merge writes text only, and refuses a batch carrying an attachment', async () => {
  const calls = [];
  const image = { type: 'image', attachment: { attachmentId: 'img-1' } };
  const session = {
    async updateQueue(id, action) {
      calls.push([id, action]);
      return { ok: true };
    },
  };
  const ok = await applyMerge(
    session,
    [{ id: 'a', content: [{ type: 'text', text: 'one' }] }, { id: 'b', content: [{ type: 'text', text: 'two' }] }],
    'one two',
  );
  assert.equal(ok.ok, true);
  const edit = calls.find(([, action]) => action.kind === 'edit');
  assert.deepEqual(edit[1].content, [{ type: 'text', text: 'one two' }], 'the edit carries text blocks only');

  calls.length = 0;
  const refused = await applyMerge(
    session,
    [{ id: 'a', content: [{ type: 'text', text: 'one' }, image] }, { id: 'b', content: [{ type: 'text', text: 'two' }] }],
    'one two',
  );
  assert.equal(refused.ok, false);
  assert.equal(refused.error, 'has-attachment');
  assert.deepEqual(calls, [], 'nothing is written when an attachment would be dropped');
});

test('a failed edit stops the merge before anything is removed', async () => {
  const calls = [];
  const session = {
    async updateQueue(id, action) {
      calls.push([id, action.kind]);
      return { ok: false, error: { code: 'session/queue-item-not-found' } };
    },
  };
  const result = await applyMerge(session, [queued('a', 'one'), queued('b', 'two')], 'merged');
  assert.equal(result.ok, false);
  assert.equal(result.error, 'session/queue-item-not-found');
  assert.deepEqual(calls, [['a', 'edit']], 'no removal after a failed edit');
});

test('a message the agent claimed mid-merge is reported, not hidden', async () => {
  const session = {
    async updateQueue(id, action) {
      if (action.kind === 'edit') return { ok: true };
      return { ok: false, error: { code: 'session/queue-item-not-found' } };
    },
  };
  const result = await applyMerge(session, [queued('a', 'one'), queued('b', 'two')], 'merged');
  assert.equal(result.ok, false);
  assert.equal(result.claimed, 1, 'the claimed item is what the reader needs to check');
  assert.equal(result.error, 'session/queue-item-not-found');
});

test('a queue that changes while the model is merging is never edited', async () => {
  const first = queued('a', '第一条');
  const second = queued('b', '第二条');
  let snapshot = [first, second];
  const calls = [];
  const session = {
    projections: { faceOf: () => ({ getSnapshot: () => ({ 'next-turn': snapshot }) }) },
    async updateQueue(id, action) {
      calls.push([id, action.kind]);
      return { ok: true };
    },
  };
  const result = await mergeQueue({
    session,
    sessionId: 's',
    fetchImpl: async () => {
      // The agent claims the second message before the answer arrives.
      snapshot = [first];
      return { ok: true, json: async () => ({ ok: true, result: { prompt: '合并稿', optimized: true } }) };
    },
  });
  assert.equal(result.ok, false);
  assert.equal(result.error, 'queue-changed');
  assert.deepEqual(calls, [], 'no queue write may happen after the queue changed');
});

test('a merge never runs without a session or with one item', async () => {
  assert.equal((await applyMerge(null, [queued('a', 'one'), queued('b', 'two')], 'x')).error, 'no-session');
  assert.equal((await applyMerge({ updateQueue: async () => ({ ok: true }) }, [queued('a', 'one')], 'x')).error, 'bad-input');
});

test('the host merge is used when it answers, the local join when it does not', async () => {
  const optimized = await requestMergedText(['one', 'two'], {
    fetchImpl: async () => ({ ok: true, json: async () => ({ ok: true, result: { prompt: '模型合并稿', optimized: true, reason: '' } }) }),
  });
  assert.equal(optimized.prompt, '模型合并稿');
  assert.equal(optimized.optimized, true);

  const failed = await requestMergedText(['one', 'two'], {
    fetchImpl: async () => ({ ok: true, json: async () => ({ ok: false }) }),
  });
  assert.equal(failed.prompt, 'one\n\ntwo');
  assert.equal(failed.optimized, false);

  const offline = await requestMergedText(['one', 'two'], {
    fetchImpl: async () => {
      throw new Error('offline');
    },
  });
  assert.equal(offline.prompt, 'one\n\ntwo');
  assert.equal(offline.reason, 'network');
});

test('mergeQueue refuses a queue it cannot fold, and touches nothing', async () => {
  let touched = 0;
  const session = {
    projections: { faceOf: () => ({ getSnapshot: () => ({ 'next-turn': [queued('a', 'only one')] }) }) },
    async updateQueue() {
      touched += 1;
      return { ok: true };
    },
  };
  const result = await mergeQueue({ session, sessionId: 's', fetchImpl: async () => ({ ok: false }) });
  assert.equal(result.ok, false);
  assert.equal(result.error, 'too-few');
  assert.equal(touched, 0);
});

test('an image-only queue is merged by queuing one message that carries both pictures', async () => {
  let asked = 0;
  const images = [
    { id: 'a', content: [{ type: 'image', attachment: { attachmentId: 'i1', mediaType: 'image/jpeg' } }] },
    { id: 'b', content: [{ type: 'image', attachment: { attachmentId: 'i2', mediaType: 'image/png' } }] },
  ];
  const calls = [];
  const session = {
    projections: { faceOf: () => ({ getSnapshot: () => ({ 'next-turn': images }) }) },
    async readAttachment(ref) {
      return { ok: true, value: { attachment: ref, data: Uint8Array.from([1, 2, 3, 4]) } };
    },
    async prompt(content, mode) {
      calls.push(['prompt', mode, content]);
      return { ok: true, value: { accepted: true } };
    },
    async updateQueue(id, action) {
      calls.push([id, action.kind]);
      return { ok: true };
    },
  };
  const result = await mergeQueue({
    session,
    sessionId: 's',
    fetchImpl: async () => {
      asked += 1;
      return { ok: false };
    },
  });
  assert.equal(result.ok, true);
  assert.equal(result.mode, 'requeue');
  assert.equal(asked, 0, 'a queue with no text has nothing for the model to merge');
  const prompt = calls.find((call) => call[0] === 'prompt');
  assert.ok(prompt, 'one new message is queued');
  assert.equal(prompt[1], 'queue', 'it is queued, not sent as a new turn');
  assert.deepEqual(
    prompt[2].map((part) => part.type),
    ['image', 'image'],
    'both pictures ride on the merged message, in order',
  );
  assert.equal(prompt[2][0].data, base64Of(Uint8Array.from([1, 2, 3, 4])));
  assert.equal(prompt[2][0].mediaType, 'image/jpeg');
  assert.deepEqual(
    calls.filter((call) => call[0] !== 'prompt').map(([id, kind]) => [id, kind]),
    [['a', 'remove'], ['b', 'remove']],
    'the originals are removed only after the new message was accepted',
  );
});

test('a file message splits the queue, and the text run after it merges in place', async () => {
  const file = queued('file', '看看这个', [{ type: 'file', attachment: { attachmentId: 'f1' } }]);
  const first = queued('a', '第一条');
  const second = queued('b', '第二条');
  const calls = [];
  const session = {
    projections: { faceOf: () => ({ getSnapshot: () => ({ 'next-turn': [file, first, second] }) }) },
    async updateQueue(id, action) {
      calls.push([id, action.kind]);
      return { ok: true };
    },
    async prompt() {
      throw new Error('a text-only run must not requeue');
    },
  };
  const result = await mergeQueue({
    session,
    sessionId: 's',
    fetchImpl: async () => ({ ok: true, json: async () => ({ ok: true, result: { prompt: '合并稿', optimized: true, reason: '' } }) }),
  });
  assert.equal(result.ok, true);
  assert.equal(result.mode, 'edit');
  assert.deepEqual(calls, [['a', 'edit'], ['b', 'remove']], 'the file item is never written');
});

test('the host merge returns the model text, and degrades to a join', async () => {
  const { mergeQueuedPrompts } = await import('../src/host/boost/optimize.js');
  const deps = {
    llm: {
      async prepareCall() {
        return {
          async *stream() {
            yield { type: 'text-delta', text: '给这个函数补上错误处理，再补一个测试。' };
          },
        };
      },
    },
    agentDefaultModel: { currentSelection: () => ({ provider: 'test', model: 'test-model' }) },
    config: {},
  };
  const optimized = await mergeQueuedPrompts({ texts: ['第一条', '第二条'], locale: 'zh' }, deps);
  assert.equal(optimized.prompt, '给这个函数补上错误处理，再补一个测试。');
  assert.equal(optimized.optimized, true);

  const noModel = await mergeQueuedPrompts({ texts: ['第一条', '第二条'] }, {});
  assert.equal(noModel.prompt, '第一条\n\n第二条');
  assert.equal(noModel.optimized, false);
  assert.equal(noModel.reason, 'no-model');

  const failed = await mergeQueuedPrompts(
    { texts: ['第一条', '第二条'] },
    { ...deps, llm: { async prepareCall() { throw new Error('quota'); } } },
  );
  assert.equal(failed.prompt, '第一条\n\n第二条');
  assert.equal(failed.reason, 'model-failed');

  // One text plus one attachment-only entry is not a merge: the page would have
  // to edit a message it cannot edit.
  const halfEmpty = await mergeQueuedPrompts({ texts: ['第一条', ''] }, deps);
  assert.equal(halfEmpty.optimized, false);
  assert.equal(halfEmpty.reason, 'too-few');
});

test('mergeQueue runs the whole path end to end', async () => {
  const items = [queued('a', '第一条'), queued('b', '第二条')];
  const calls = [];
  const session = {
    projections: { faceOf: () => ({ getSnapshot: () => ({ 'next-turn': items }) }) },
    async updateQueue(id, action) {
      calls.push([id, action.kind]);
      return { ok: true };
    },
  };
  const result = await mergeQueue({
    session,
    sessionId: 's',
    fetchImpl: async () => ({
      ok: true,
      json: async () => ({ ok: true, result: { prompt: '合并稿', optimized: true, reason: '' } }),
    }),
  });
  assert.equal(result.ok, true);
  assert.equal(result.count, 2);
  assert.equal(result.optimized, true);
  assert.deepEqual(calls, [['a', 'edit'], ['b', 'remove']]);
});

/**
 * A session whose queue carries images, with the page-side reads stubbed.
 * @param {Array<any>} items - the queued items.
 * @param {object} [behaviour] - overrides for readAttachment / prompt / updateQueue.
 * @returns {object} the fake session plus the call log.
 */
function imageSession(items, behaviour = {}) {
  const calls = [];
  let snapshot = items;
  let cell = { 'next-turn': snapshot };
  const face = { subscribe: () => () => {}, getSnapshot: () => cell };
  const session = {
    projections: { faceOf: () => face },
    async readAttachment(ref) {
      calls.push(['read', ref.attachmentId]);
      if (behaviour.readAttachment !== undefined) return behaviour.readAttachment(ref);
      return { ok: true, value: { attachment: ref, data: Uint8Array.from([7, 8, 9]) } };
    },
    async prompt(content, mode) {
      calls.push(['prompt', mode, content]);
      if (behaviour.prompt !== undefined) return behaviour.prompt(content, mode);
      return { ok: true, value: { accepted: true } };
    },
    async updateQueue(id, action) {
      calls.push([id, action.kind]);
      if (behaviour.updateQueue !== undefined) return behaviour.updateQueue(id, action);
      snapshot = snapshot.filter((item) => item.id !== id);
      cell = { 'next-turn': snapshot };
      return { ok: true };
    },
  };
  return { session, calls, replace(next) { snapshot = next; cell = { 'next-turn': next }; } };
}

const picture = (id, attachmentId) => ({ id, content: [{ type: 'image', attachment: { attachmentId, mediaType: 'image/png' } }] });

test('a requeue never prompts when an image cannot be read', async () => {
  const fake = imageSession([picture('a', 'i1'), picture('b', 'i2')], {
    readAttachment: () => ({ ok: false, error: { code: 'session/attachment-invalid' } }),
  });
  const result = await applyRequeue(fake.session, [picture('a', 'i1'), picture('b', 'i2')], '');
  assert.equal(result.ok, false);
  assert.equal(result.error, 'session/attachment-invalid');
  assert.deepEqual(fake.calls.filter((call) => call[0] === 'prompt'), [], 'nothing is queued');
  assert.deepEqual(fake.calls.filter((call) => call[0] !== 'read'), [], 'nothing is removed');
});

test('a requeue removes nothing when the prompt is refused', async () => {
  const items = [picture('a', 'i1'), picture('b', 'i2')];
  const fake = imageSession(items, {
    prompt: () => ({ ok: false, error: { code: 'session/agent-busy' } }),
  });
  const result = await applyRequeue(fake.session, items, '');
  assert.equal(result.ok, false);
  assert.equal(result.error, 'session/agent-busy');
  assert.deepEqual(fake.calls.map((call) => call[1]), ['i1', 'i2', 'queue'], 'read, prompt, and no removal');
});

test('a requeue that cannot remove every original says so instead of claiming success', async () => {
  const items = [picture('a', 'i1'), picture('b', 'i2')];
  const fake = imageSession(items, {
    updateQueue: (id) => (id === 'b'
      ? { ok: false, error: { code: 'remove-failed' } }
      : { ok: true }),
  });
  const result = await applyRequeue(fake.session, items, '');
  assert.equal(result.ok, false);
  assert.equal(result.merged, 1, 'the merged message is queued');
  assert.equal(result.removed, 1);
  assert.equal(result.error, 'remove-failed');
});

test('a queue that grows while an image merge is prepared is left alone', async () => {
  const fake = imageSession([picture('img', 'i1'), queued('a', '第一条'), queued('b', '第二条')]);
  const result = await mergeQueue({
    session: fake.session,
    sessionId: 's',
    fetchImpl: async () => {
      // A third message is queued while the model merges the two texts.
      fake.replace([picture('img', 'i1'), queued('a', '第一条'), queued('b', '第二条'), queued('c', '第三条')]);
      return { ok: true, json: async () => ({ ok: true, result: { prompt: '合并稿', optimized: true, reason: '' } }) };
    },
  });
  assert.equal(result.ok, false);
  assert.equal(result.error, 'queue-changed');
  assert.deepEqual(fake.calls, [], 'no image read, no prompt, no removal');
});

test('a mixed image and text queue sends the images with the merged text', async () => {
  const items = [picture('img', 'i1'), queued('a', '第一条'), queued('b', '第二条')];
  const fake = imageSession(items);
  const result = await mergeQueue({
    session: fake.session,
    sessionId: 's',
    fetchImpl: async () => ({ ok: true, json: async () => ({ ok: true, result: { prompt: '合并稿', optimized: true, reason: '' } }) }),
  });
  assert.equal(result.ok, true);
  assert.equal(result.mode, 'requeue');
  const prompt = fake.calls.find((call) => call[0] === 'prompt');
  assert.deepEqual(prompt[2].map((part) => part.type), ['image', 'text'], 'images first, text last');
  assert.equal(prompt[2][1].text, '合并稿');
  assert.deepEqual(
    fake.calls.filter((call) => call[0] !== 'prompt' && call[0] !== 'read').map(([id, kind]) => [id, kind]),
    [['img', 'remove'], ['a', 'remove'], ['b', 'remove']],
  );
});

test('image bytes are encoded the way the composer sends them', () => {
  assert.equal(base64Of(Uint8Array.from([])), '');
  assert.equal(base64Of(Uint8Array.from([65])), 'QQ==');
  assert.equal(base64Of(Uint8Array.from([65, 66])), 'QUI=');
  assert.equal(base64Of(Uint8Array.from([65, 66, 67])), 'QUJD');
  // Multi-chunk input (the encoder flushes every 8 KiB) must round-trip.
  const long = Uint8Array.from({ length: 20000 }, (_, index) => index % 256);
  const encoded = base64Of(long);
  assert.equal(encoded.length, 4 * Math.ceil(long.length / 3));
  assert.equal(Buffer.from(encoded, 'base64').equals(Buffer.from(long)), true);
});
