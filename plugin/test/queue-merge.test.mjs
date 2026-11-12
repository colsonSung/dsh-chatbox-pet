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
  hasAttachment as clientHasAttachment,
  joinTexts,
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

  // Attachments no longer block: the page carries the blocks onto the merged message.
  const withImage = planMerge([queued('a', 'one'), queued('b', 'two', [{ type: 'image', attachment: {} }])]);
  assert.equal(withImage.ok, true);
  assert.equal(withImage.reason, '');

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

test('the chip counts the batch, and attachments no longer hide it', () => {
  const view = readItems([queued('a', 'one'), queued('b', 'two'), queued('c', 'three')]);
  assert.equal(view.items.length, 3);
  assert.equal(view.blocked, '');
  assert.equal(view.batch, 3);
  assert.equal(view.batches, 1);
  assert.equal(readItems([queued('a', 'one')]).blocked, 'too-few');
  assert.equal(readItems([]).blocked, 'too-few');

  const withFile = readItems([queued('a', 'one'), queued('b', 'two', [{ type: 'file', attachment: {} }])]);
  assert.equal(withFile.blocked, '', 'an attachment no longer blocks the merge');
  assert.equal(withFile.hasAttachment, true);

  const long = readItems(Array.from({ length: CLIENT_MERGE_LIMIT + 5 }, (_, i) => queued(String(i), `m${i}`)));
  assert.equal(long.blocked, '');
  assert.equal(long.batch, CLIENT_MERGE_LIMIT);
  assert.equal(long.batches, 2);
  assert.equal(CLIENT_MERGE_LIMIT, MERGE_LIMIT);
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

test('附件的块会被搬到合并后的那条消息上，不会丢', async () => {
  const calls = [];
  const image = { type: 'image', attachment: { attachmentId: 'img-1' } };
  const file = { type: 'file', attachment: { attachmentId: 'file-1' } };
  const session = {
    async updateQueue(id, action) {
      calls.push([id, action]);
      return { ok: true };
    },
  };
  const result = await applyMerge(
    session,
    [
      { id: 'a', content: [{ type: 'text', text: 'one' }, image] },
      { id: 'b', content: [{ type: 'text', text: 'two' }] },
      { id: 'c', content: [{ type: 'text', text: 'three' }, file] },
    ],
    'one two three',
  );
  assert.equal(result.ok, true);
  const edit = calls.find(([, action]) => action.kind === 'edit');
  assert.ok(edit, 'the first item is edited');
  assert.deepEqual(edit[1].content[0], { type: 'text', text: 'one two three' });
  assert.deepEqual(edit[1].content.slice(1), [image, file], 'both attachments ride along');
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
