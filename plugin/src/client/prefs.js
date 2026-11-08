/**
 * The two feature switches, as the page sees them.
 *
 * The Host owns the file; this module keeps the page's copy in sync so a
 * switch takes effect immediately — the seats re-render off this snapshot and
 * the other feature keeps running untouched.
 *
 * Optimistic writes: the switch moves at once, then the Host's answer wins.
 * A failed write rolls back and leaves the previous value in place.
 */

/** The route the Host serves. */
const ROUTE = '/api/chatbox-pet/prefs';

/** The snapshot before the Host has answered: both features on. */
const INITIAL = Object.freeze({ pet: true, boost: true, sound: true, loaded: false });

/**
 * Build the shared store.
 * @param {object} [deps] - injectable fetch for tests.
 * @returns {object} the store.
 */
export function createPrefsStore(deps = {}) {
  const doFetch = typeof deps.fetch === 'function' ? deps.fetch : (...args) => globalThis.fetch(...args);
  let snapshot = INITIAL;
  const listeners = new Set();

  /**
   * Publish a new snapshot.
   * @param {object} next - the partial state.
   * @returns {void}
   */
  function write(next) {
    snapshot = { ...snapshot, ...next };
    for (const listener of listeners) {
      try {
        listener();
      } catch {
        // A listener must never break the store.
      }
    }
  }

  /**
   * Read the Host's current switches.
   * @returns {Promise<object>} the snapshot after the read.
   */
  async function refresh() {
    try {
      const response = await doFetch(ROUTE, { method: 'GET', headers: { accept: 'application/json' } });
      const body = await response.json();
      if (body?.ok === true && body.result !== null && typeof body.result === 'object') {
        write({
          pet: body.result.pet !== false,
          boost: body.result.boost !== false,
          sound: body.result.sound !== false,
          loaded: true,
        });
      } else {
        write({ loaded: true });
      }
    } catch {
      // Keep the optimistic defaults; the next refresh tries again.
    }
    return snapshot;
  }

  /**
   * Change one or more switches and persist them.
   * @param {object} patch - `{ pet?, boost?, sound? }`.
   * @returns {Promise<boolean>} whether the Host accepted the write.
   */
  async function update(patch) {
    const previous = snapshot;
    const optimistic = {};
    for (const key of ['pet', 'boost', 'sound']) {
      if (typeof patch?.[key] === 'boolean') optimistic[key] = patch[key];
    }
    write(optimistic);
    try {
      const response = await doFetch(ROUTE, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ prefs: optimistic }),
      });
      const body = await response.json();
      if (body?.ok !== true || body.result === null || typeof body.result !== 'object') throw new Error('rejected');
      write({
        pet: body.result.pet !== false,
        boost: body.result.boost !== false,
        sound: body.result.sound !== false,
        loaded: true,
      });
      return true;
    } catch {
      write({ pet: previous.pet, boost: previous.boost, sound: previous.sound });
      return false;
    }
  }

  return {
    subscribe(listener) {
      if (typeof listener !== 'function') return () => {};
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot() {
      return snapshot;
    },
    refresh,
    update,
  };
}

/** The process-wide store the seats read. */
export const prefsStore = createPrefsStore();
