/**
 * Session-state resolution for the state route.
 *
 * `computeState` assembles the normalized view from the Host's services
 * (agents projection + a bounded, memoized event tail), merges any live
 * broadcast, and picks the bubble line. Every failure path degrades to
 * `idle`; this module never throws.
 */
import { homedir } from 'node:os';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { loadPack, pickBubble } from './pack.js';
import { serviceOf } from './service.js';
import { deriveStatus, makeStatusTracker, normalizeProjection, scanTail } from './state.js';

/** How many events the tail read keeps. */
const TAIL_LIMIT = 50;

/** How long a tail read stays memoized per session. */
const TAIL_TTL_MS = 3000;

/** Default and bounds for a broadcast's lifetime. */
const BROADCAST_DEFAULT_MS = 5000;
const BROADCAST_MIN_MS = 1000;
const BROADCAST_MAX_MS = 30000;

/** Broadcasts keyed by session id, or '*' for every session. */
const broadcasts = new Map();

/** Memoized tail reads keyed by session id. */
const tails = new Map();

/** changedAt tracking shared by all state-route calls. */
const defaultTracker = makeStatusTracker();

/** Memoized superagent ledger read. */
let ledgerCache = { at: 0, value: null };
const LEDGER_TTL_MS = 10000;

/**
 * Store a broadcast. Returns the expiry time.
 * @param {string} key - a session id, or '*' for every session.
 * @param {{text: string, status?: string, durationMs?: number}} data
 * @param {number} [now]
 * @returns {{expiresAt: number}}
 */
export function setBroadcast(key, data, now = Date.now()) {
  const duration = clampDuration(data?.durationMs);
  const entry = {
    text: String(data?.text ?? '').slice(0, 100),
    status: typeof data?.status === 'string' ? data.status : undefined,
    expiresAt: now + duration,
  };
  broadcasts.set(String(key), entry);
  return { expiresAt: entry.expiresAt };
}

/**
 * Read the live broadcast for a session: its own entry wins over '*'.
 * Expired entries are dropped on read.
 * @param {string} sessionId
 * @param {number} [now]
 * @returns {{text: string, status?: string, expiresAt: number}|null}
 */
export function activeBroadcast(sessionId, now = Date.now()) {
  for (const key of [String(sessionId), '*']) {
    const entry = broadcasts.get(key);
    if (entry === undefined) continue;
    if (entry.expiresAt <= now) {
      broadcasts.delete(key);
      continue;
    }
    return entry;
  }
  return null;
}

/**
 * Clamp a requested broadcast lifetime into bounds.
 * @param {any} value
 * @returns {number} milliseconds.
 */
function clampDuration(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return BROADCAST_DEFAULT_MS;
  return Math.min(BROADCAST_MAX_MS, Math.max(BROADCAST_MIN_MS, number));
}

/**
 * Read the bounded event tail for a session, memoized for ~3s. An unreadable
 * session returns null (the caller treats it as "no evidence", never throws).
 * @param {any} ctx - the Host plugin context.
 * @param {string} sessionId
 * @returns {Promise<any[]|null>}
 */
export async function readTail(ctx, sessionId) {
  const key = String(sessionId);
  const now = Date.now();
  const hit = tails.get(key);
  if (hit !== undefined && now - hit.at < TAIL_TTL_MS) return hit.value;
  const value = await readTailUncached(ctx, key);
  tails.set(key, { at: now, value });
  return value;
}

/**
 * The actual tail read.
 *
 * `listEvents` is intentionally lightweight: its records carry only
 * seq/type/time/surface, NOT the event's `data`. The outcome of a turn lives in
 * `turn/end.data.reason.kind`, so the newest turn end must be read back through
 * `readEvent`. Without that second read every ending looks like a success.
 * `readSession` is the compatibility fallback for a Host without listEvents.
 * @param {any} ctx
 * @param {string} sessionId
 * @returns {Promise<any[]|null>}
 */
async function readTailUncached(ctx, sessionId) {
  const sessionQuery = serviceOf(ctx, 'sessionQuery');
  if (sessionQuery === undefined) return null;
  if (typeof sessionQuery.listEvents === 'function') {
    try {
      const events = await sessionQuery.listEvents(sessionId);
      if (!Array.isArray(events)) return null;
      const tail = events.slice(-TAIL_LIMIT);
      if (typeof sessionQuery.readEvent !== 'function') return tail;

      // Only the latest ending needs its payload; the other records are enough
      // for the waiting heuristic, and one exact read keeps the poll cheap.
      for (let index = tail.length - 1; index >= 0; index -= 1) {
        const record = tail[index];
        const type = String(record?.type ?? '');
        if (type !== 'turn/end' && !/turn.*(?:error|fail)/i.test(type)) continue;
        const seq = record?.seq;
        if (!Number.isFinite(seq)) break;
        try {
          const window = await sessionQuery.readEvent({
            sessionId,
            seq,
            before: 0,
            after: 0,
          });
          if (window?.target !== null && typeof window?.target === 'object') {
            tail[index] = window.target;
          }
        } catch {
          // A metadata-only ending must not be treated as a completed task.
        }
        break;
      }
      return tail;
    } catch {
      return null;
    }
  }
  if (typeof sessionQuery.readSession === 'function') {
    try {
      const snapshot = await sessionQuery.readSession(sessionId);
      if (Array.isArray(snapshot?.events)) return snapshot.events.slice(-TAIL_LIMIT);
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Read the superagent ticket ledger when it exists. The row is disabled in
 * the live profile and the ledger is absent, so this is null today; when a
 * ledger file appears the shape lights up without a code change.
 * @returns {Promise<{active: number, latest?: string}|null>}
 */
export async function readSuperagent() {
  const now = Date.now();
  if (now - ledgerCache.at < LEDGER_TTL_MS) return ledgerCache.value;
  const value = await readSuperagentUncached();
  ledgerCache = { at: now, value };
  return value;
}

/**
 * The uncached ledger read. Candidate paths stay in one list so wiring the
 * real ledger later is a config change, not a rewrite.
 * @returns {Promise<{active: number, latest?: string}|null>}
 */
async function readSuperagentUncached() {
  const candidates = [join(homedir(), '.dsh', 'superagent', 'ledger.json')];
  for (const file of candidates) {
    let raw;
    try {
      raw = await readFile(file, 'utf8');
    } catch {
      continue;
    }
    try {
      const ledger = JSON.parse(raw);
      const tickets = Array.isArray(ledger?.tickets) ? ledger.tickets : [];
      const active = tickets.filter((ticket) =>
        /open|pending|in.?progress|running|armed/i.test(String(ticket?.status ?? '')),
      );
      const latest = active[active.length - 1];
      const title = typeof latest?.title === 'string' ? latest.title
        : typeof latest?.subject === 'string' ? latest.subject
        : undefined;
      return { active: active.length, latest: title };
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Compute the full state-route result for one session.
 * @param {any} ctx - the Host plugin context.
 * @param {string} sessionId
 * @param {{now?: number, tracker?: {track: Function}, rng?: () => number}} [options]
 * @returns {Promise<{status: string, changedAt: number, bubble?: string,
 *                    waiting?: boolean, superagent: any}>}
 */
export async function computeState(ctx, sessionId, options = {}) {
  const now = options.now ?? Date.now();
  const tracker = options.tracker ?? defaultTracker;
  const rng = options.rng ?? Math.random;

  // The turn projection: absent services or an unknown session leave it null.
  let projection = null;
  try {
    const agents = serviceOf(ctx, 'agents');
    const agent = typeof agents?.get === 'function' ? agents.get(sessionId) : undefined;
    const session = agent?.session;
    if (session !== undefined && typeof agents?.turnBoundaryOf === 'function') {
      projection = agents.turnBoundaryOf(session);
    }
  } catch {
    projection = null;
  }
  const view = normalizeProjection(projection);

  // The event tail: waiting evidence and the turn-end marker live here.
  // Waiting is attributed to the still-open turn via openTurnStartSeq.
  const tail = await readTail(ctx, sessionId);
  if (tail !== null) {
    const scanned = scanTail(tail, { openTurnStartSeq: view.openTurnStartSeq, now });
    view.waiting = scanned.waiting;
    if (scanned.lastTurnEnd !== null) view.lastTurnEnd = scanned.lastTurnEnd;
  } else {
    view.waiting = false;
  }

  let status = deriveStatus(view, now);
  const pack = await loadPack();
  let bubble = status === 'idle' ? undefined : pickBubble(pack, status, rng);

  // A live broadcast overrides both the status (when it carries one) and the
  // bubble text; this is the superagent's future voice.
  const broadcast = activeBroadcast(sessionId, now);
  if (broadcast !== null) {
    if (typeof broadcast.status === 'string' && broadcast.status !== '' && broadcast.status !== 'idle') {
      status = broadcast.status;
    }
    if (broadcast.text !== '') bubble = broadcast.text;
  }

  const result = {
    status,
    changedAt: tracker.track(sessionId, status, now),
    superagent: await readSuperagent(),
  };
  // WHY the turn ended, when it just ended: 'completed' | 'failed' |
  // 'cancelled'. The status alone cannot tell an aborted task from a failed
  // one, and the client needs the difference to sound different.
  const outcome = view.lastTurnEnd?.outcome;
  if (typeof outcome === 'string' && (status === 'success' || status === 'error')) {
    result.detail = outcome;
  }
  if (bubble !== undefined) result.bubble = bubble;
  // The super agent's own voice is marked, so the client can give it a
  // dedicated sound instead of the status family's.
  if (broadcast !== null && broadcast.text !== '') result.source = 'broadcast';
  if (status === 'waiting') result.waiting = true;
  return result;
}
