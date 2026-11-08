/**
 * How the pet reacts to a work-status change.
 *
 * The rule that matters: a status is not enough. A finished task, a broken
 * task and a stopped task all end in the same two statuses the pet has, so
 * the *outcome* travels with the status and decides the clip and the sound.
 *
 * Pure functions, so the rule is tested rather than hoped for.
 */
import { soundForTransition } from './sound.js';

/** The clip each status plays. */
export const CLIP_FOR = {
  thinking: 'act-typing',
  working: 'act-reading',
  result: 'act-spin',
  waiting: 'act-shy',
  success: 'act-thunderbolt',
  error: 'click-angry',
};

/**
 * A cancelled task is not the pet's fault: it is something put down, so it
 * gets the sheepish clip, not the angry one.
 */
export const CLIP_FOR_ERROR = { failed: 'click-angry', cancelled: 'act-shy' };

/**
 * Decide whether the pet should react to a new state, and how.
 *
 * The pet reacts when the status changes OR when the outcome changes: a task
 * that failed and a task that was stopped two seconds later both land on
 * `error`, and the reader must hear the difference.
 * @param {object} input - the states.
 * @param {{status: string, detail: string|null}} input.previous - the last state.
 * @param {{status: string, detail: string|null}} input.next - the new state.
 * @param {string} input.idleClip - the clip for the idle loop.
 * @returns {{changed: boolean, status: string, detail: string|null, clip: string|null, sound: string|null}} the reaction.
 */
export function resolveTransition(input) {
  const previousStatus = input?.previous?.status ?? 'idle';
  const nextStatus = input?.next?.status ?? 'idle';
  const previousDetail = input?.previous?.detail ?? null;
  const nextDetail = input?.next?.detail ?? null;

  const changed = nextStatus !== previousStatus || nextDetail !== previousDetail;
  // A step finished and the next one is streaming: the contract's `result`
  // transition, derived client-side because the route's status set has no
  // room for it.
  const isResult = previousStatus === 'working' && nextStatus === 'thinking';
  const status = isResult ? 'result' : nextStatus;

  if (!changed) return { changed: false, status, detail: nextDetail, clip: null, sound: null };
  if (nextStatus === 'idle') {
    return { changed: true, status: 'idle', detail: nextDetail, clip: null, sound: null };
  }

  const clip =
    status === 'error'
      ? CLIP_FOR_ERROR[nextDetail] ?? CLIP_FOR.error
      : CLIP_FOR[status] ?? input?.idleClip ?? null;
  return {
    changed: true,
    status,
    detail: nextDetail,
    clip,
    sound: soundForTransition(status, nextDetail),
  };
}
