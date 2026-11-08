/**
 * The work-status derivation.
 *
 * Pure functions take a normalized view of a session and return the pet's
 * status; `computeState` builds that view from the Host's services. Nothing
 * here throws: any missing piece degrades towards `idle`, the calm default.
 */

/** A finished turn counts as success/error only briefly. */
export const RECENT_TURN_MS = 30000;

/** The six statuses the pet understands. */
export const STATUSES = ['thinking', 'working', 'result', 'waiting', 'success', 'error'];

/**
 * Derive the status from a normalized view, in the contract's priority order.
 * @param {{waiting?: boolean, turnOpen?: boolean, stepStreaming?: boolean,
 *          lastTurnEnd?: {at: number, errored: boolean}|null}} view
 * @param {number} [now] - milliseconds epoch.
 * @returns {string} one of waiting|thinking|working|error|success|idle.
 */
export function deriveStatus(view, now = Date.now()) {
  const v = view ?? {};
  if (v.waiting === true) return 'waiting';
  if (v.turnOpen === true) return v.stepStreaming === false ? 'working' : 'thinking';
  const end = v.lastTurnEnd;
  if (end !== null && end !== undefined && Number.isFinite(end.at) && now - end.at <= RECENT_TURN_MS && now >= end.at) {
    // Only a completed turn is a success. An aborted or failed turn is an
    // error, and the outcome is what tells the two apart downstream. A view
    // without an outcome falls back to the old `errored` flag.
    const completed =
      typeof end.outcome === 'string' ? end.outcome === 'completed' : end.errored !== true;
    return completed ? 'success' : 'error';
  }
  return 'idle';
}

/**
 * Normalize the Host's TurnBoundaryProjection. Every access is guarded: the
 * projection shape is a verified fact but services may still be absent.
 * @param {any} projection - the value of `agents.turnBoundaryOf(session)`.
 * @returns {{turnOpen: boolean, stepStreaming: boolean, openTurnStartSeq: number|null,
 *            lastTurnEnd: {at: number, errored: boolean}|null}}
 */
export function normalizeProjection(projection) {
  const p = projection !== null && typeof projection === 'object' ? projection : {};
  const turnOpen = p.openTurnStartSeq !== null && p.openTurnStartSeq !== undefined;
  // No boundary yet means the turn just opened: the model is about to stream.
  const stepStreaming = p.lastStepBoundary?.kind !== 'end';
  const openTurnStartSeq =
    typeof p.openTurnStartSeq === 'number' && Number.isFinite(p.openTurnStartSeq)
      ? p.openTurnStartSeq
      : null;
  return { turnOpen, stepStreaming, openTurnStartSeq, lastTurnEnd: normalizeLastTurn(p.lastTurn) };
}

/**
 * Read an end marker off the projection's lastTurn, whatever shape it has.
 * @param {any} lastTurn
 * @returns {{at: number, errored: boolean}|null}
 */
function normalizeLastTurn(lastTurn) {
  // The Host's TurnBoundaryProjection carries `lastTurn` as the turn NUMBER,
  // not as a record: there is nothing to read here. The event tail is the
  // only place that knows why a turn ended.
  if (lastTurn === null || typeof lastTurn !== 'object') return null;
  const at = timestampOf(lastTurn);
  if (at === null) return null;
  const errored =
    lastTurn.error !== undefined && lastTurn.error !== null
      ? true
      : lastTurn.errored === true || lastTurn.failed === true || lastTurn.ok === false;
  return { at, errored, outcome: errored === true ? 'failed' : 'completed' };
}

/**
 * Read a timestamp off an event-like object: number epoch or ISO string.
 * @param {any} value
 * @returns {number|null} milliseconds epoch.
 */
export function timestampOf(value) {
  if (value === null || typeof value !== 'object') return null;
  for (const key of ['time', 'timestamp', 'createdAt', 'endedAt', 'at', 'seq_time']) {
    const raw = value[key];
    if (typeof raw === 'number' && Number.isFinite(raw) && raw > 0) {
      // Tolerate seconds-based epochs: a seconds value stays below 1e11
      // until the year 5138; a millis value crossed it in 1973.
      return raw < 1e11 ? raw * 1000 : raw;
    }
    if (typeof raw === 'string') {
      const parsed = Date.parse(raw);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return null;
}

/**
 * How a turn ended, in the pet's three buckets.
 *
 * The Host records ONE event type for every ending — `turn/end` — and puts
 * the cause in `data.reason.kind` (see the Host's TurnEndReasonMap):
 * `completed`, `aborted`, `blocked`, `error`, `max-tokens`, `interrupted`,
 * `forked`. Reading only the event type cannot tell a finished task from an
 * aborted one, which is why both used to sound like success.
 */
export const TURN_OUTCOMES = ['completed', 'failed', 'cancelled'];

/** The Host's reason kinds, mapped onto the pet's three buckets. */
const REASON_TO_OUTCOME = {
  completed: 'completed',
  error: 'failed',
  'max-tokens': 'failed',
  aborted: 'cancelled',
  interrupted: 'cancelled',
  blocked: 'cancelled',
};

/**
 * Read the reason kind off a turn-end event.
 *
 * The event may be flat (`{ type, reason }`) or wrapped (`{ type, data: {
 * reason } }`); the Host's query layer is not the only reader, so both are
 * checked.
 * @param {any} event - the event.
 * @returns {string|null} the reason kind.
 */
export function reasonKindOf(event) {
  if (event === null || typeof event !== 'object') return null;
  // The stored shape is `{ type, data: { reason: { kind } } }`; a flat
  // `{ type, reason: { kind } }` is accepted too.
  const candidates = [event.data?.reason, event.payload?.reason, event.turnEnd?.reason, event.reason];
  for (const reason of candidates) {
    if (reason === null || reason === undefined) continue;
    if (typeof reason === 'string') return reason;
    if (typeof reason.kind === 'string') return reason.kind;
    // A reason object without a kind but with an error is a failure.
    if (reason.error !== undefined && reason.error !== null) return 'error';
  }
  return null;
}

/**
 * Classify one turn-end event into the pet's outcome buckets.
 * @param {any} event - the event.
 * @returns {'completed'|'failed'|'cancelled'|null} the outcome, or null when the
 *   event is not a turn end.
 */
export function classifyTurnEnd(event) {
  if (event === null || typeof event !== 'object') return null;
  const type = String(event.type ?? event.kind ?? '');
  const isTurnEnd = type === 'turn/end' || TURN_END_RE.test(type);
  const isTurnError = TURN_ERROR_RE.test(type);
  if (!isTurnEnd && !isTurnError) return null;
  const kind = reasonKindOf(event);
  if (kind === null) {
    // A Host listEvents record is metadata-only. If the exact readEvent did
    // not supply its payload, the outcome is UNKNOWN — never assume success.
    if (type === 'turn/end' && event.data === undefined && ('sessionId' in event || 'surface' in event)) {
      return null;
    }
    // A legacy error event is a failure; a bare legacy turn/end is completed.
    return isTurnError ? 'failed' : 'completed';
  }
  if (kind === 'forked') return null;
  return REASON_TO_OUTCOME[kind] ?? 'completed';
}

const OPEN_RE = /question|approval|permission|confirm/i;
const CLOSE_RE = /answer|resolv|decid|grant|deny|reject|approv[ae]d|complete|close|cancel|dismiss|submit/i;
const TURN_END_RE = /turn.*(end|finish|complete|done|stop)|(?:end|finish|complete|done|stop).*turn/i;
const TURN_ERROR_RE = /turn.*error|error.*turn|turn.*fail|fail.*turn/i;
const USER_RE = /user|human/i;
const ASSISTANT_RE = /assistant|agent/i;

/** An unattributable question only holds waiting for this long. */
export const STALE_QUESTION_MS = 10 * 60 * 1000;

/**
 * Read an event's sequence number, if it carries one.
 * @param {any} event
 * @returns {number|null}
 */
function seqOf(event) {
  for (const key of ['seq', 'sequence']) {
    const raw = event[key];
    if (typeof raw === 'number' && Number.isFinite(raw)) return raw;
    if (typeof raw === 'string' && raw !== '' && Number.isFinite(Number(raw))) return Number(raw);
  }
  return null;
}

/**
 * Does this event prove the conversation moved past a pending question? A
 * turn boundary, a newer user message, or a newer assistant message all mean
 * nobody is waiting on the question any more.
 * @param {any} event
 * @param {string} type
 * @returns {boolean}
 */
function movesPast(event, type) {
  if (TURN_END_RE.test(type) || TURN_ERROR_RE.test(type)) return true;
  const role = typeof event.role === 'string' ? event.role : '';
  return USER_RE.test(type) || USER_RE.test(role) || ASSISTANT_RE.test(type) || ASSISTANT_RE.test(role);
}

/**
 * Decide whether a pending question still holds the pet in `waiting`.
 * Attribution first: a question with a seq only counts when the turn that
 * owns it is still open (its seq sits after openTurnStartSeq). Without a seq
 * the fallback is recency: within ~10 minutes and nothing conversational
 * after it (guaranteed by the scan — any later conversational event clears
 * the pending record).
 * @param {{seq: number|null, at: number|null}|null} pending
 * @param {{openTurnStartSeq?: number|null, now?: number}} context
 * @returns {boolean}
 */
export function resolveWaiting(pending, context = {}) {
  if (pending === null) return false;
  const openSeq = context.openTurnStartSeq;
  if (pending.seq !== null) {
    return typeof openSeq === 'number' && Number.isFinite(openSeq) && pending.seq > openSeq;
  }
  if (pending.at === null) return false;
  const now = typeof context.now === 'number' ? context.now : Date.now();
  return now >= pending.at && now - pending.at <= STALE_QUESTION_MS;
}

/**
 * Scan a bounded event tail for an open question/approval and the last turn
 * end. Heuristic and defensive: only positive evidence counts, and any doubt
 * resolves to "not waiting" so the pet never gets stuck begging. A question
 * from a turn that already ended — a later turn end/error, or a newer user
 * message — never holds waiting.
 * @param {any[]} events - chronological tail (oldest first).
 * @param {{openTurnStartSeq?: number|null, now?: number}} [context] - the
 *   session's current turn boundary, for turn attribution.
 * @returns {{waiting: boolean, lastTurnEnd: {at: number, errored: boolean}|null}}
 */
export function scanTail(events, context = {}) {
  const list = Array.isArray(events) ? events : [];
  let pending = null;
  let lastTurnEnd = null;
  for (const event of list) {
    if (event === null || typeof event !== 'object') continue;
    const type = String(event.type ?? event.kind ?? '');
    if (OPEN_RE.test(type)) {
      const resolved =
        CLOSE_RE.test(type) ||
        event.answered === true ||
        event.resolved === true ||
        event.answer != null ||
        event.resolution != null;
      if (resolved) {
        pending = null;
      } else if (typeof event.status === 'string') {
        pending = /pending|open|waiting|unanswered/i.test(event.status)
          ? { seq: seqOf(event), at: timestampOf(event) }
          : null;
      } else {
        pending = { seq: seqOf(event), at: timestampOf(event) };
      }
    } else if (pending !== null && movesPast(event, type)) {
      // The conversation moved on: the question is stale regardless of age.
      pending = null;
    }
    const outcome = classifyTurnEnd(event);
    if (outcome !== null) {
      const at = timestampOf(event);
      if (at !== null) lastTurnEnd = { at, outcome, errored: outcome !== 'completed' };
    }
  }
  return { waiting: resolveWaiting(pending, context), lastTurnEnd };
}

/**
 * Track when each session's status last changed, so the route can report a
 * stable changedAt instead of the request time.
 * @returns {{track: (sessionId: string, status: string, now: number) => number}}
 */
export function makeStatusTracker() {
  const seen = new Map();
  return {
    track(sessionId, status, now) {
      const key = String(sessionId);
      const previous = seen.get(key);
      if (previous !== undefined && previous.status === status) return previous.changedAt;
      seen.set(key, { status, changedAt: now });
      return now;
    },
  };
}
