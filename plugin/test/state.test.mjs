/**
 * Unit tests for the status derivation, tail scan, JSONC parsing, broadcast
 * store, and the full computeState against fake Host services.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseJsonc, stripJsonc } from '../src/host/jsonc.js';
import { ERROR_LINES, pickBubble } from '../src/host/pack.js';
import { activeBroadcast, computeState, setBroadcast } from '../src/host/session.js';
import { deriveStatus, makeStatusTracker, normalizeProjection, resolveWaiting, scanTail, STALE_QUESTION_MS, timestampOf } from '../src/host/state.js';

test('parseJsonc strips line comments, block comments, and trailing commas', () => {
  const src = `{
    // a line comment
    "name": "pikachu", // trailing comment
    "list": [1, 2, 3,],
    "nested": { "a": true, },
    /* block
       comment */
    "url": "https://example.com//not-a-comment",
  }`;
  const parsed = parseJsonc(src);
  assert.equal(parsed.name, 'pikachu');
  assert.deepEqual(parsed.list, [1, 2, 3]);
  assert.deepEqual(parsed.nested, { a: true });
  assert.equal(parsed.url, 'https://example.com//not-a-comment');
});

test('parseJsonc keeps comment markers inside strings and rejects garbage', () => {
  assert.equal(parseJsonc('"a // b"'), 'a // b');
  assert.equal(parseJsonc('{ broken'), undefined);
  assert.equal(parseJsonc(''), undefined);
  assert.equal(parseJsonc(undefined), undefined);
  // stripJsonc leaves the structure intact for a sound file.
  assert.deepEqual(JSON.parse(stripJsonc('{"a":1,}')), { a: 1 });
});

test('deriveStatus follows the contract priority order', () => {
  const now = 1_000_000_000_000;
  // 1. waiting beats everything, including an open turn.
  assert.equal(deriveStatus({ waiting: true, turnOpen: true, stepStreaming: true }, now), 'waiting');
  // 2. thinking: turn open, model step streaming.
  assert.equal(deriveStatus({ turnOpen: true, stepStreaming: true }, now), 'thinking');
  // 3. working: turn open, between steps (tool executing).
  assert.equal(deriveStatus({ turnOpen: true, stepStreaming: false }, now), 'working');
  // 4. error: last turn ended with an error within the window.
  assert.equal(deriveStatus({ lastTurnEnd: { at: now - 5000, errored: true } }, now), 'error');
  // 5. success: last turn finished within the window.
  assert.equal(deriveStatus({ lastTurnEnd: { at: now - 5000, errored: false } }, now), 'success');
  // 6. idle: everything older or absent.
  assert.equal(deriveStatus({ lastTurnEnd: { at: now - 31000, errored: false } }, now), 'idle');
  assert.equal(deriveStatus({ lastTurnEnd: { at: now - 31000, errored: true } }, now), 'idle');
  assert.equal(deriveStatus({}, now), 'idle');
  assert.equal(deriveStatus(undefined, now), 'idle');
});

test('normalizeProjection reads the verified TurnBoundaryProjection shape', () => {
  // Open turn, step start boundary → thinking input.
  assert.deepEqual(
    normalizeProjection({ openTurnStartSeq: 10, lastStepBoundary: { kind: 'start', seq: 12 }, lastTurn: null }),
    { turnOpen: true, stepStreaming: true, openTurnStartSeq: 10, lastTurnEnd: null },
  );
  // Open turn, step end boundary → working input.
  assert.deepEqual(
    normalizeProjection({ openTurnStartSeq: 10, lastStepBoundary: { kind: 'end', seq: 12 }, lastTurn: null }),
    { turnOpen: true, stepStreaming: false, openTurnStartSeq: 10, lastTurnEnd: null },
  );
  // Open turn, no boundary yet → the model is about to stream (thinking).
  assert.deepEqual(
    normalizeProjection({ openTurnStartSeq: 10, lastStepBoundary: null, lastTurn: null }),
    { turnOpen: true, stepStreaming: true, openTurnStartSeq: 10, lastTurnEnd: null },
  );
  // Closed turn → not open.
  assert.equal(normalizeProjection({ openTurnStartSeq: null, lastStepBoundary: null }).turnOpen, false);
  // Garbage in → closed, calm.
  assert.deepEqual(normalizeProjection(null), { turnOpen: false, stepStreaming: true, openTurnStartSeq: null, lastTurnEnd: null });
  assert.deepEqual(normalizeProjection('nope'), { turnOpen: false, stepStreaming: true, openTurnStartSeq: null, lastTurnEnd: null });
});

test('scanTail finds an open question and its resolution', () => {
  const t = 1_000_000_000_000;
  const ctx = { now: t + 1 };
  // An open question → waiting.
  assert.equal(scanTail([{ type: 'question', id: 'q1', time: t }], ctx).waiting, true);
  // A question followed by its answer → not waiting.
  assert.equal(
    scanTail(
      [
        { type: 'question', id: 'q1', time: t },
        { type: 'question/answered', id: 'q1', time: t + 1 },
      ],
      ctx,
    ).waiting,
    false,
  );
  // An approval with an explicit pending status → waiting; resolved → not.
  assert.equal(scanTail([{ type: 'approval', status: 'pending', time: t }], ctx).waiting, true);
  assert.equal(scanTail([{ type: 'approval', status: 'approved', time: t }], ctx).waiting, false);
  // Same-event answer field resolves it.
  assert.equal(scanTail([{ type: 'question', answer: 'yes', time: t }], ctx).waiting, false);
  // No evidence → not waiting.
  assert.equal(scanTail([{ type: 'message', time: t }], ctx).waiting, false);
  assert.equal(scanTail(null, ctx).waiting, false);
});

test('scanTail: a stale question never holds waiting', () => {
  const t = 1_000_000_000_000;
  const ctx = { now: t + 100 };
  // A question from a turn that already ended → not waiting.
  assert.equal(
    scanTail(
      [
        { type: 'question', id: 'q1', time: t },
        { type: 'turn/end', time: t + 10 },
      ],
      ctx,
    ).waiting,
    false,
  );
  // Same via turn-error.
  assert.equal(
    scanTail(
      [
        { type: 'question', id: 'q1', time: t },
        { type: 'turn-error', time: t + 10 },
      ],
      ctx,
    ).waiting,
    false,
  );
  // A question followed by a newer user message → not waiting.
  assert.equal(
    scanTail(
      [
        { type: 'question', id: 'q1', time: t },
        { type: 'message', role: 'user', time: t + 20 },
      ],
      ctx,
    ).waiting,
    false,
  );
  // An unattributable question older than ~10 minutes → not waiting.
  assert.equal(
    scanTail([{ type: 'question', id: 'q1', time: t }], { now: t + STALE_QUESTION_MS + 1 }).waiting,
    false,
  );
  // A question with a seq but no open turn → not waiting.
  assert.equal(
    scanTail([{ type: 'question', seq: 5, time: t }], { now: t + 1, openTurnStartSeq: null }).waiting,
    false,
  );
});

test('scanTail: attribution — only the still-open turn owns waiting', () => {
  const t = 1_000_000_000_000;
  // Question seq after openTurnStartSeq → the open turn's own question → waiting.
  assert.equal(
    scanTail([{ type: 'question', seq: 12, time: t }], { now: t + 1, openTurnStartSeq: 10 }).waiting,
    true,
  );
  // Question seq before openTurnStartSeq → a previous turn's leftover → not waiting.
  assert.equal(
    scanTail([{ type: 'question', seq: 8, time: t }], { now: t + 1, openTurnStartSeq: 10 }).waiting,
    false,
  );
  // resolveWaiting in isolation.
  assert.equal(resolveWaiting(null, { openTurnStartSeq: 1 }), false);
  assert.equal(resolveWaiting({ seq: 5, at: t }, { openTurnStartSeq: 3 }), true);
  assert.equal(resolveWaiting({ seq: 2, at: t }, { openTurnStartSeq: 3 }), false);
  assert.equal(resolveWaiting({ seq: null, at: t }, { now: t + 1000 }), true);
  assert.equal(resolveWaiting({ seq: null, at: null }, { now: t }), false);
});

test('scanTail finds the last turn end, success and error', () => {
  const t = 1_000_000_000_000;
  // The Host records every ending as `turn/end`; the cause is in the reason.
  assert.deepEqual(scanTail([{ type: 'turn/end', time: t }]).lastTurnEnd, {
    at: t,
    outcome: 'completed',
    errored: false,
  });
  assert.deepEqual(scanTail([{ type: 'turn-error', time: t }]).lastTurnEnd, {
    at: t,
    outcome: 'failed',
    errored: true,
  });
  assert.deepEqual(
    scanTail([{ type: 'turn/end', time: t, data: { reason: { kind: 'aborted', reason: { kind: 'user' } } } }]).lastTurnEnd,
    { at: t, outcome: 'cancelled', errored: true },
  );
  assert.deepEqual(
    scanTail([{ type: 'turn/end', time: t, data: { reason: { kind: 'error', error: { code: 'QUOTA' } } } }]).lastTurnEnd,
    { at: t, outcome: 'failed', errored: true },
  );
  // The last matching event wins.
  const scanned = scanTail([
    { type: 'turn/end', time: t },
    { type: 'turn-error', time: t + 100 },
  ]);
  assert.deepEqual(scanned.lastTurnEnd, { at: t + 100, outcome: 'failed', errored: true });
  // No timestamp → no marker (a success needs a bounded window).
  assert.equal(scanTail([{ type: 'turn/end' }]).lastTurnEnd, null);
});

test('timestampOf accepts epoch millis, epoch seconds, and ISO strings', () => {
  const t = 1_000_000_000_000;
  assert.equal(timestampOf({ time: t }), t);
  assert.equal(timestampOf({ timestamp: 1_000_000_000 }), 1_000_000_000_000);
  assert.equal(timestampOf({ createdAt: '2001-09-09T01:46:40.000Z' }), t);
  assert.equal(timestampOf({}), null);
  assert.equal(timestampOf(null), null);
});

test('broadcast store merges and expires', () => {
  const now = 1_000_000_000_000;
  setBroadcast('s1', { text: 'hello', status: 'working' }, now);
  setBroadcast('*', { text: 'global' }, now);
  // The session's own entry wins over the global one.
  assert.equal(activeBroadcast('s1', now + 1).text, 'hello');
  assert.equal(activeBroadcast('s2', now + 1).text, 'global');
  // Expired entries are gone.
  assert.equal(activeBroadcast('s1', now + 6000), null);
  assert.equal(activeBroadcast('s2', now + 6000), null);
  // A custom duration is honoured.
  setBroadcast('s3', { text: 'long', durationMs: 20000 }, now);
  assert.equal(activeBroadcast('s3', now + 15000).text, 'long');
});

test('pickBubble picks within the bucket and falls back for error', () => {
  const pack = { workStatusTexts: [['t1', 't2'], ['w1'], ['r1'], ['x1'], ['s1']] };
  assert.equal(pickBubble(pack, 'working', () => 0), 'w1');
  assert.ok(['t1', 't2'].includes(pickBubble(pack, 'thinking', () => 0.9)));
  // No sixth bucket → the built-in error lines.
  assert.ok(ERROR_LINES.includes(pickBubble(pack, 'error', () => 0)));
  // Unknown status → nothing.
  assert.equal(pickBubble(pack, 'idle', () => 0), undefined);
  // An explicit error bucket wins over the fallback.
  const withError = { workStatusTexts: [[], [], [], [], [], ['e1']] };
  assert.equal(pickBubble(withError, 'error', () => 0), 'e1');
});

/**
 * Build a fake Host plugin context.
 * @param {{projection?: any, tail?: any[]|null}} fake
 */
function fakeCtx(fake) {
  return {
    agents:
      fake.projection === undefined
        ? undefined
        : {
            get: (id) => (id === 'nope' ? undefined : { session: { id } }),
            turnBoundaryOf: () => fake.projection,
          },
    sessionQuery:
      fake.tail === undefined
        ? undefined
        : {
            listEvents: async () => fake.tail,
          },
  };
}

test('computeState: open turn + step start → thinking', async () => {
  const now = 1_000_000_000_000;
  const result = await computeState(
    fakeCtx({ projection: { openTurnStartSeq: 3, lastStepBoundary: { kind: 'start', seq: 4 }, lastTurn: null }, tail: [] }),
    'ct-thinking',
    { now, tracker: makeStatusTracker(), rng: () => 0 },
  );
  assert.equal(result.status, 'thinking');
  assert.equal(typeof result.bubble, 'string');
  assert.equal(result.changedAt, now);
  assert.equal(result.superagent, null);
});

test('computeState: open turn + step end → working', async () => {
  const now = 1_000_000_000_000;
  const result = await computeState(
    fakeCtx({ projection: { openTurnStartSeq: 3, lastStepBoundary: { kind: 'end', seq: 4 }, lastTurn: null }, tail: [] }),
    'ct-working',
    { now, tracker: makeStatusTracker() },
  );
  assert.equal(result.status, 'working');
});

test('computeState: closed turn within 30s → success, older → idle', async () => {
  const now = 1_000_000_000_000;
  const tracker = makeStatusTracker();
  const recent = await computeState(
    fakeCtx({ projection: { openTurnStartSeq: null, lastStepBoundary: null }, tail: [{ type: 'turn/end', time: now - 5000 }] }),
    'ct-success',
    { now, tracker },
  );
  assert.equal(recent.status, 'success');
  const old = await computeState(
    fakeCtx({ projection: { openTurnStartSeq: null, lastStepBoundary: null }, tail: [{ type: 'turn/end', time: now - 31000 }] }),
    'ct-old',
    { now, tracker },
  );
  assert.equal(old.status, 'idle');
  assert.equal(old.bubble, undefined);
});

test('computeState: open question in the tail → waiting, sticky flag set', async () => {
  const now = 1_000_000_000_000;
  const result = await computeState(
    fakeCtx({
      projection: { openTurnStartSeq: 3, lastStepBoundary: { kind: 'end', seq: 4 } },
      tail: [{ type: 'question', id: 'q1', time: now - 1000 }],
    }),
    'ct-waiting',
    { now, tracker: makeStatusTracker() },
  );
  assert.equal(result.status, 'waiting');
  assert.equal(result.waiting, true);
});

test('computeState: missing session → idle, never throws', async () => {
  const now = 1_000_000_000_000;
  const result = await computeState(fakeCtx({}), 'nope', { now, tracker: makeStatusTracker() });
  assert.equal(result.status, 'idle');
  // A context with no services at all also yields idle.
  const bare = await computeState({}, 'ct-bare', { now, tracker: makeStatusTracker() });
  assert.equal(bare.status, 'idle');
  assert.equal(bare.superagent, null);
});

test('computeState: a live broadcast overrides status and bubble; expiry restores', async () => {
  const now = 1_000_000_000_000;
  const tracker = makeStatusTracker();
  setBroadcast('ct-broadcast', { text: '皮卡！工单完成了', status: 'success', durationMs: 5000 }, now);
  const merged = await computeState(fakeCtx({ tail: [] }), 'ct-broadcast', { now: now + 100, tracker });
  assert.equal(merged.status, 'success');
  assert.equal(merged.bubble, '皮卡！工单完成了');
  const after = await computeState(fakeCtx({ tail: [] }), 'ct-broadcast-2', { now: now + 10000, tracker });
  assert.equal(after.status, 'idle');
});

test('status tracker reports the first change time for a stable status', () => {
  const tracker = makeStatusTracker();
  assert.equal(tracker.track('s', 'idle', 100), 100);
  assert.equal(tracker.track('s', 'idle', 200), 100);
  assert.equal(tracker.track('s', 'thinking', 300), 300);
  assert.equal(tracker.track('s', 'thinking', 400), 300);
});
