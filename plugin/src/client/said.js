/**
 * The reader's remembered lines, as the page sees them.
 *
 * The Host owns the file; this is the page's copy, kept in sync so the context
 * menu can offer "say it again" without a round trip on every open. Every write
 * is optimistic and mirrored to localStorage: if the Host route fails (a reload
 * race, a feature switched off), the pet still remembers the line in this
 * browser instead of losing it silently.
 */

/** The route the Host serves. */
const ROUTE = '/api/chatbox-pet/said';

/** The localStorage mirror key. */
const MIRROR_KEY = 'chatboxPet.said';

/** How many lines the page keeps in its own mirror. */
export const CLIENT_SAID_LIMIT = 24;

/** The longest line the page will show. */
export const CLIENT_SAID_MAX = 60;

/**
 * Clean a line the same way the Host does.
 * @param {any} raw - the raw text.
 * @returns {string} the storable line, or ''.
 */
export function cleanLine(raw) {
  const text = String(raw ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text === '') return '';
  const characters = Array.from(text);
  return characters.length <= CLIENT_SAID_MAX ? text : characters.slice(0, CLIENT_SAID_MAX).join('');
}

/**
 * Fold one line into a list, newest first, without twins.
 * @param {Array<{text: string, at: number}>} lines - the current list.
 * @param {string} raw - the new line.
 * @param {number} [at] - when it was said.
 * @returns {Array<{text: string, at: number}>} the new list.
 */
export function foldLine(lines, raw, at = Date.now()) {
  const text = cleanLine(raw);
  const current = Array.isArray(lines) ? lines.filter((line) => typeof line?.text === 'string') : [];
  if (text === '') return current.slice(0, CLIENT_SAID_LIMIT);
  const rest = current.filter((line) => line.text !== text);
  return [{ text, at }, ...rest].slice(0, CLIENT_SAID_LIMIT);
}

/**
 * Keep only usable entries from an unknown payload.
 * @param {any} payload - `{ lines }` or a bare array.
 * @returns {Array<{text: string, at: number}>} the lines.
 */
export function normaliseLines(payload) {
  const raw = Array.isArray(payload?.lines) ? payload.lines : Array.isArray(payload) ? payload : [];
  const out = [];
  const seen = new Set();
  for (const entry of raw) {
    const text = cleanLine(typeof entry === 'string' ? entry : entry?.text);
    if (text === '' || seen.has(text)) continue;
    seen.add(text);
    out.push({ text, at: Number.isFinite(entry?.at) ? entry.at : 0 });
    if (out.length >= CLIENT_SAID_LIMIT) break;
  }
  return out;
}

/**
 * The page's localStorage, when it is reachable.
 * @returns {Storage|undefined} the store.
 */
function safeStorage() {
  try {
    return typeof window === 'undefined' ? undefined : window.localStorage;
  } catch {
    return undefined;
  }
}

/**
 * Build the remembered-lines store.
 * @param {object} [deps] - injectable fetch/storage for tests.
 * @returns {object} the store.
 */
export function createSaidStore(deps = {}) {
  const doFetch = typeof deps.fetch === 'function' ? deps.fetch : (...args) => globalThis.fetch(...args);
  const storage = deps.storage === undefined ? safeStorage() : deps.storage;
  const readMirror = () => {
    try {
      const raw = storage?.getItem(MIRROR_KEY);
      return raw === null || raw === undefined ? [] : normaliseLines(JSON.parse(raw));
    } catch {
      return [];
    }
  };
  const writeMirror = (lines) => {
    try {
      storage?.setItem(MIRROR_KEY, JSON.stringify(lines));
    } catch {
      // A blocked store only costs the mirror, never the write path.
    }
  };

  let snapshot = Object.freeze({ lines: Object.freeze(readMirror()), loaded: false });
  const listeners = new Set();

  /**
   * Publish a new snapshot.
   * @param {object} next - the partial state.
   * @returns {void}
   */
  function publish(next) {
    snapshot = Object.freeze({ ...snapshot, ...next });
    for (const listener of listeners) {
      try {
        listener();
      } catch {
        // A listener must never break the store.
      }
    }
  }

  /**
   * Load the Host's list; the mirror keeps the page useful when it fails.
   * @returns {Promise<Array<{text: string, at: number}>>} the lines.
   */
  async function refresh() {
    try {
      const response = await doFetch(ROUTE, { method: 'GET', headers: { accept: 'application/json' } });
      const body = await response.json();
      if (body?.ok === true) {
        const lines = normaliseLines(body.result);
        publish({ lines, loaded: true });
        writeMirror(lines);
        return lines;
      }
    } catch {
      // Fall through: keep whatever the mirror holds.
    }
    publish({ loaded: true });
    return snapshot.lines;
  }

  /**
   * Remember one line: the page updates at once, the Host is told after.
   * @param {string} raw - the line.
   * @returns {Promise<Array<{text: string, at: number}>>} the new list.
   */
  async function remember(raw) {
    const line = cleanLine(raw);
    if (line === '') return snapshot.lines;
    const optimistic = foldLine(snapshot.lines, line);
    publish({ lines: Object.freeze(optimistic) });
    writeMirror(optimistic);
    try {
      const response = await doFetch(ROUTE, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text: line }),
      });
      const body = await response.json();
      if (body?.ok === true) {
        const lines = normaliseLines(body.result);
        publish({ lines, loaded: true });
        writeMirror(lines);
        return lines;
      }
    } catch {
      // The Host did not take it; the mirror already remembers it here.
    }
    return snapshot.lines;
  }

  /**
   * Forget every line, on the Host and in the mirror.
   * @returns {Promise<Array<{text: string, at: number}>>} the empty list.
   */
  async function clear() {
    publish({ lines: Object.freeze([]) });
    writeMirror([]);
    try {
      await doFetch(ROUTE, { method: 'DELETE', headers: { accept: 'application/json' } });
    } catch {
      // The Host keeps its copy; the next refresh will show it again.
    }
    return [];
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
    remember,
    clear,
  };
}

/** The process-wide store the pet reads. */
export const saidStore = createSaidStore();
