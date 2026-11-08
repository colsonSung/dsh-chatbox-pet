/**
 * Unit tests for the turn-end classification and the outcome-aware sounds.
 *
 * The bug this file guards against: the Host records every ending as ONE
 * event type (`turn/end`) and puts the cause in `data.reason.kind`. Reading
 * only the event type cannot tell a finished task from an aborted one, so
 * both used to be announced as success — the same sound for "done" and
 * "stopped".
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  classifyTurnEnd,
  deriveStatus,
  reasonKindOf,
  scanTail,
} from '../src/host/state.js';
import { soundForTransition, SOUND_FOR_STATUS, SOUND_NAMES } from '../src/client/sound.js';
import { computeState, readTail } from '../src/host/session.js';

const NOW = 1794060000000;

/**
 * A turn-end event in the Host's shape.
 * @param {string} kind - the reason kind.
 * @param {number} at - the timestamp.
 * @returns {object} the event.
 */
function turnEnd(kind, at = NOW) {
  return { type: 'turn/end', time: at, data: { turn: 3, reason: { kind } } };
}

test('the reason kind is read from the wrapped and the flat shape', () => {
  assert.equal(reasonKindOf(turnEnd('aborted')), 'aborted');
  assert.equal(reasonKindOf({ type: 'turn/end', reason: { kind: 'error' } }), 'error');
  assert.equal(reasonKindOf({ type: 'turn/end', reason: 'completed' }), 'completed');
  assert.equal(reasonKindOf({ type: 'turn/end', data: { reason: { kind: 'blocked' } } }), 'blocked');
  assert.equal(reasonKindOf({ type: 'turn/end', data: { reason: { error: { code: 'x' } } } }), 'error');
  assert.equal(reasonKindOf({ type: 'other' }), null);
});

test('every ending is classified into its own bucket', () => {
  assert.equal(classifyTurnEnd(turnEnd('completed')), 'completed');
  assert.equal(classifyTurnEnd(turnEnd('error')), 'failed');
  assert.equal(classifyTurnEnd(turnEnd('max-tokens')), 'failed');
  assert.equal(classifyTurnEnd(turnEnd('aborted')), 'cancelled');
  assert.equal(classifyTurnEnd(turnEnd('interrupted')), 'cancelled');
  assert.equal(classifyTurnEnd(turnEnd('blocked')), 'cancelled');
  // A fork is not this session's task ending.
  assert.equal(classifyTurnEnd(turnEnd('forked')), null);
  assert.equal(classifyTurnEnd({ type: 'assistant/message' }), null);
});

test('an event without a reason keeps the old behaviour', () => {
  assert.equal(classifyTurnEnd({ type: 'turn/end', time: NOW }), 'completed');
  assert.equal(classifyTurnEnd({ type: 'turn/error', time: NOW }), 'failed');
});

test('a metadata-only Host record is unknown, never an assumed success', () => {
  const record = { sessionId: 's', seq: 9, type: 'turn/end', time: NOW, surface: 'current' };
  assert.equal(classifyTurnEnd(record), null);
});

test('a completed task and an aborted one end in different statuses', () => {
  const completed = scanTail([turnEnd('completed')]);
  const aborted = scanTail([turnEnd('aborted')]);
  const failed = scanTail([turnEnd('error')]);

  assert.equal(completed.lastTurnEnd.outcome, 'completed');
  assert.equal(aborted.lastTurnEnd.outcome, 'cancelled');
  assert.equal(failed.lastTurnEnd.outcome, 'failed');

  const view = (scanned) => ({ waiting: false, turnOpen: false, lastTurnEnd: scanned.lastTurnEnd });
  assert.equal(deriveStatus(view(completed), NOW), 'success');
  assert.equal(deriveStatus(view(aborted), NOW), 'error');
  assert.equal(deriveStatus(view(failed), NOW), 'error');
});

test('the scan keeps the LAST ending, not the first', () => {
  const scanned = scanTail([turnEnd('aborted', NOW - 1000), turnEnd('completed', NOW - 100)]);
  assert.equal(scanned.lastTurnEnd.outcome, 'completed');
  assert.equal(scanned.lastTurnEnd.at, NOW - 100);
});

test('a cancelled task and a failed task do not share a sound', () => {
  assert.equal(soundForTransition('error', 'cancelled'), 'cancelled');
  assert.equal(soundForTransition('error', 'failed'), 'error');
  assert.equal(soundForTransition('error'), 'error');
  // A completed task keeps its own sound.
  assert.equal(soundForTransition('success', 'completed'), 'success');
  assert.equal(soundForTransition('success', 'completed'), SOUND_FOR_STATUS.success);
  // The other statuses are untouched.
  assert.equal(soundForTransition('thinking'), 'thinking');
  assert.equal(soundForTransition('working'), 'working');
  assert.equal(soundForTransition('waiting'), 'waiting');
  assert.equal(soundForTransition('result'), 'result');
});

test('the three end-sounds are three different recipes', () => {
  for (const name of ['success', 'error', 'cancelled']) {
    assert.ok(SOUND_NAMES.includes(name), `${name} is not a recipe`);
  }
  // Three names, three recipes: the kit must not map them onto one sound.
  assert.equal(new Set(['success', 'error', 'cancelled']).size, 3);
});

test('readTail enriches the lightweight turn/end record through readEvent', async () => {
  const full = turnEnd('aborted');
  full.seq = 2;
  const calls = [];
  const ctx = {
    get(name) {
      if (name !== 'sessionQuery') return undefined;
      return {
        async listEvents() {
          return [
            { sessionId: 's', seq: 1, type: 'turn/start', time: NOW - 20, surface: 'current' },
            { sessionId: 's', seq: 2, type: 'turn/end', time: NOW, surface: 'current' },
          ];
        },
        async readEvent(request) {
          calls.push(request);
          return { target: full, events: [full] };
        },
      };
    },
  };
  const tail = await readTail(ctx, `read-tail-${Date.now()}`);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].seq, 2);
  assert.equal(tail.at(-1).data.reason.kind, 'aborted');
  assert.equal(scanTail(tail).lastTurnEnd.outcome, 'cancelled');
});

test('computeState gets detail through the real listEvents + readEvent contract', async () => {
  const full = turnEnd('completed');
  full.seq = 4;
  const ctx = {
    get(name) {
      if (name === 'agents') return { get: () => undefined };
      if (name !== 'sessionQuery') return undefined;
      return {
        async listEvents() {
          return [{ sessionId: 's', seq: 4, type: 'turn/end', time: NOW, surface: 'current' }];
        },
        async readEvent() {
          return { target: full, events: [full] };
        },
      };
    },
  };
  const result = await computeState(ctx, `compute-${Date.now()}`, { now: NOW + 100, rng: () => 0 });
  assert.equal(result.status, 'success');
  assert.equal(result.detail, 'completed');
});
