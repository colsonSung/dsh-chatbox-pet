/**
 * Unit tests for the pet's reaction to a work-status change.
 *
 * The rule under test: a status alone is not enough to react. A finished task,
 * a broken task and a stopped task have to be told apart — by the sound and
 * by the clip — and the pet has to react again when only the outcome changes.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { CLIP_FOR, CLIP_FOR_ERROR, resolveTransition } from '../src/client/pet-status.js';

const IDLE = 'idle-breathe-loop';

/**
 * Resolve one transition.
 * @param {object} previous - the last state.
 * @param {object} next - the new state.
 * @returns {object} the reaction.
 */
function run(previous, next) {
  return resolveTransition({ previous, next, idleClip: IDLE });
}

test('a completed task sounds like success', () => {
  const transition = run({ status: 'working', detail: null }, { status: 'success', detail: 'completed' });
  assert.equal(transition.changed, true);
  assert.equal(transition.sound, 'success');
  assert.equal(transition.clip, CLIP_FOR.success);
});

test('a stopped task is not a completed task', () => {
  const transition = run({ status: 'working', detail: null }, { status: 'error', detail: 'cancelled' });
  assert.equal(transition.changed, true);
  assert.equal(transition.sound, 'cancelled');
  assert.notEqual(transition.sound, 'success');
  assert.equal(transition.clip, CLIP_FOR_ERROR.cancelled);
  assert.notEqual(transition.clip, CLIP_FOR.success);
});

test('a broken task is neither a success nor a stop', () => {
  const transition = run({ status: 'working', detail: null }, { status: 'error', detail: 'failed' });
  assert.equal(transition.sound, 'error');
  assert.equal(transition.clip, CLIP_FOR_ERROR.failed);
});

test('the three endings are three different sounds and three different clips', () => {
  const done = run({ status: 'working' }, { status: 'success', detail: 'completed' });
  const stopped = run({ status: 'working' }, { status: 'error', detail: 'cancelled' });
  const broken = run({ status: 'working' }, { status: 'error', detail: 'failed' });
  const sounds = new Set([done.sound, stopped.sound, broken.sound]);
  const clips = new Set([done.clip, stopped.clip, broken.clip]);
  assert.equal(sounds.size, 3, `sounds: ${[...sounds].join(',')}`);
  assert.equal(clips.size, 3, `clips: ${[...clips].join(',')}`);
});

test('the pet reacts again when only the outcome changes', () => {
  // A failed task and a stopped task both land on `error`: the second one
  // must still be heard.
  const failed = run({ status: 'working', detail: null }, { status: 'error', detail: 'failed' });
  const stopped = run({ status: 'error', detail: 'failed' }, { status: 'error', detail: 'cancelled' });
  assert.equal(failed.changed, true);
  assert.equal(stopped.changed, true);
  assert.equal(stopped.sound, 'cancelled');

  // The same state twice: nothing to say.
  const same = run({ status: 'error', detail: 'failed' }, { status: 'error', detail: 'failed' });
  assert.equal(same.changed, false);
  assert.equal(same.sound, null);
});

test('a step finishing is the result transition', () => {
  const transition = run({ status: 'working', detail: null }, { status: 'thinking', detail: null });
  assert.equal(transition.changed, true);
  assert.equal(transition.status, 'result');
  assert.equal(transition.sound, 'result');
  assert.equal(transition.clip, CLIP_FOR.result);
});

test('going idle is the pet returning to its loop', () => {
  const transition = run({ status: 'success', detail: 'completed' }, { status: 'idle', detail: null });
  assert.equal(transition.changed, true);
  assert.equal(transition.status, 'idle');
  assert.equal(transition.clip, null);
  assert.equal(transition.sound, null);
});

test('an error without an outcome still fails loudly', () => {
  const transition = run({ status: 'working', detail: null }, { status: 'error', detail: null });
  assert.equal(transition.sound, 'error');
  assert.equal(transition.clip, CLIP_FOR.error);
});
