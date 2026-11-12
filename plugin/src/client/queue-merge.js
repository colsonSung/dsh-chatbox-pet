/**
 * Merging the composer's queued messages, on the page.
 *
 * While the agent is busy, what the reader sends waits in the session's inbox
 * under `next-turn`. The page reaches that queue through the client Session
 * (`session.projections.faceOf('inbox')`) and edits it through
 * `session.updateQueue` — the same two calls the built-in queue dock uses, so
 * the merge goes through the Host's own command path (which is what retires an
 * upload prompt for a removed item) instead of reaching into host memory.
 *
 * One merged message replaces N queued ones: the first item is EDITED to the
 * merged text and the rest are REMOVED. That order matters — if a removal
 * fails midway the reader is left with the merged text plus a duplicate they
 * can see and delete, never with the text already gone.
 */

/**
 * The most queued messages one merge folds.
 *
 * A queue longer than this is not an error: the chip merges the first batch and
 * stays available for the rest, so a reader with thirty waiting messages folds
 * them in three presses instead of being told the feature does not apply.
 */
export const MERGE_LIMIT = 8;

/** The inbox projection cell that holds the queue for the next turn. */
const QUEUE_CELL = 'next-turn';

/**
 * Read one queued item's plain text.
 * @param {any} item - the queued item.
 * @returns {string} the text, joined and trimmed.
 */
export function textOf(item) {
  const blocks = Array.isArray(item?.content) ? item.content : [];
  return blocks
    .filter((block) => block !== null && typeof block === 'object' && block.type === 'text' && typeof block.text === 'string')
    .map((block) => block.text)
    .join('')
    .trim();
}

/**
 * Does one queued item carry a non-text block?
 * @param {any} item - the queued item.
 * @returns {boolean} true when an edit would drop something.
 */
export function hasAttachment(item) {
  const blocks = Array.isArray(item?.content) ? item.content : [];
  return blocks.some((block) => block === null || typeof block !== 'object' || block.type !== 'text');
}

/**
 * The queue as the merge sees it.
 *
 * `mergeable` is the count the chip shows: only text-only items with words in
 * them can be folded, and a queue of one has nothing to fold.
 * @param {any} session - the client Session.
 * @returns {{items: Array<any>, texts: string[], mergeable: number, blocked: string}} the queue view.
 */
export function readQueue(session) {
  let raw = [];
  try {
    const face = session?.projections?.faceOf?.('inbox');
    const snapshot = face?.getSnapshot?.();
    raw = Array.isArray(snapshot?.[QUEUE_CELL]) ? snapshot[QUEUE_CELL] : [];
  } catch {
    raw = [];
  }
  return readItems(raw);
}

/**
 * The queue view for an already-read inbox cell.
 * @param {Array<any>} raw - the `next-turn` array.
 * @returns {{items: Array<any>, texts: string[], mergeable: number, blocked: string}} the queue view.
 */
export function readItems(raw) {
  const list = Array.isArray(raw) ? raw : [];
  const items = list.filter((item) => item !== null && typeof item === 'object' && typeof item.id === 'string');
  const texts = items.map(textOf);
  // Only the next batch is folded; the rest waits for the following press.
  const batch = Math.min(items.length, MERGE_LIMIT);
  const blocked = items.length < 2 ? 'too-few' : '';
  return {
    items,
    texts,
    mergeable: items.length,
    batch,
    batches: Math.max(1, Math.ceil(items.length / MERGE_LIMIT)),
    hasAttachment: items.some((item) => hasAttachment(item)),
    blocked,
  };
}

/**
 * Ask the Host for the merged text.
 *
 * The Host answers with the model's merge when it can and with a plain join of
 * the originals when it cannot, so a model failure still merges rather than
 * refusing. A host that cannot be reached at all degrades to the same join on
 * this side.
 * @param {Array<string>} texts - the queued texts, in order.
 * @param {object} [options] - `{ sessionId, locale, fetchImpl }`.
 * @returns {Promise<{prompt: string, optimized: boolean, reason: string}>} the merge.
 */
export async function requestMergedText(texts, options = {}) {
  const local = joinTexts(texts);
  const doFetch = typeof options.fetchImpl === 'function' ? options.fetchImpl : (...args) => globalThis.fetch(...args);
  try {
    const response = await doFetch('/api/chatbox-pet/merge', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        texts,
        session: typeof options.sessionId === 'string' ? options.sessionId : undefined,
        locale: options.locale === 'en' ? 'en' : 'zh',
      }),
    });
    if (!response.ok) return { prompt: local, optimized: false, reason: 'http-' + String(response.status) };
    const body = await response.json();
    const prompt = typeof body?.result?.prompt === 'string' ? body.result.prompt.trim() : '';
    if (prompt === '') return { prompt: local, optimized: false, reason: 'empty' };
    return {
      prompt,
      optimized: body.result.optimized === true,
      reason: typeof body.result.reason === 'string' ? body.result.reason : '',
    };
  } catch {
    return { prompt: local, optimized: false, reason: 'network' };
  }
}

/**
 * Join the originals untouched — the floor the merge never goes below.
 * @param {Array<string>} texts - the queued texts.
 * @returns {string} the joined text.
 */
export function joinTexts(texts) {
  return (Array.isArray(texts) ? texts : [])
    .map((text) => String(text ?? '').trim())
    .filter((text) => text !== '')
    .join('\n\n');
}

/**
 * Replace N queued messages with one.
 *
 * Edits the first item, then removes the others one by one; the first failure
 * stops the loop and is reported, because continuing would remove messages
 * whose text the reader has not seen merged yet.
 * @param {any} session - the client Session.
 * @param {Array<any>} items - the queued items, in order.
 * @param {string} merged - the merged text.
 * @returns {Promise<{ok: boolean, merged: number, removed: number, error: string}>} the outcome.
 */
export async function applyMerge(session, items, merged) {
  const list = Array.isArray(items) ? items : [];
  const text = String(merged ?? '').trim();
  if (list.length < 2 || text === '') return { ok: false, merged: 0, removed: 0, error: 'bad-input' };
  if (typeof session?.updateQueue !== 'function') return { ok: false, merged: 0, removed: 0, error: 'no-session' };

  const [first, ...rest] = list;
  // Attachments from every folded message ride along on the merged one: an edit
  // that only carried text would silently drop the images the reader queued.
  const attachments = list.flatMap((item) =>
    (Array.isArray(item?.content) ? item.content : []).filter(
      (block) => block !== null && typeof block === 'object' && block.type !== 'text',
    ),
  );
  try {
    const edited = await session.updateQueue(first.id, {
      kind: 'edit',
      content: [{ type: 'text', text }, ...attachments],
    });
    if (edited?.ok !== true) {
      return { ok: false, merged: 0, removed: 0, error: edited?.error?.code ?? 'edit-failed' };
    }
  } catch (error) {
    return { ok: false, merged: 0, removed: 0, error: messageOf(error) };
  }

  let removed = 0;
  let claimed = 0;
  for (const item of rest) {
    try {
      const result = await session.updateQueue(item.id, { kind: 'remove' });
      if (result?.ok === true) {
        removed += 1;
        continue;
      }
      // The agent claimed this message while the merge was being prepared.
      // Its words are already in the merged text, so the turn may now contain
      // a duplicate: finish the other removals, then say so instead of calling
      // the whole thing a success.
      if (result?.error?.code === 'session/queue-item-not-found') {
        claimed += 1;
        continue;
      }
      return { ok: false, merged: 1, removed, claimed, error: result?.error?.code ?? 'remove-failed' };
    } catch (error) {
      return { ok: false, merged: 1, removed, claimed, error: messageOf(error) };
    }
  }
  return {
    ok: claimed === 0,
    merged: 1,
    removed,
    claimed,
    error: claimed > 0 ? 'session/queue-item-not-found' : '',
  };
}

/**
 * Run the whole merge for one session.
 * @param {object} input - `{ session, sessionId, locale, fetchImpl }`.
 * @returns {Promise<{ok: boolean, count: number, optimized: boolean, reason: string, error: string}>} the outcome.
 */
export async function mergeQueue(input = {}) {
  const queue = readQueue(input.session);
  if (queue.blocked !== '') return { ok: false, count: 0, optimized: false, reason: '', error: queue.blocked };
  // One batch per press: the queue may be longer than a single merge allows.
  const batch = queue.items.slice(0, MERGE_LIMIT);
  const texts = batch.map(textOf);
  const merged = await requestMergedText(texts, {
    sessionId: input.sessionId,
    locale: input.locale,
    fetchImpl: input.fetchImpl,
  });
  // The queue is live. A message that settled while the model was merging is
  // not the same queue anymore; editing the snapshot would drop or duplicate
  // text, so stop and let the reader press the chip again on the new queue.
  const current = readQueue(input.session);
  const currentBatch = current.items.slice(0, batch.length);
  const sameItems =
    currentBatch.length === batch.length &&
    currentBatch.every((item, index) => item.id === batch[index].id && textOf(item) === texts[index]);
  if (!sameItems) {
    return { ok: false, count: batch.length, optimized: false, reason: '', error: 'queue-changed' };
  }
  const applied = await applyMerge(input.session, batch, merged.prompt);
  return {
    ok: applied.ok,
    count: batch.length,
    optimized: merged.optimized,
    reason: merged.reason,
    error: applied.error,
  };
}

/**
 * Turn any thrown value into a short message.
 * @param {any} error - the thrown value.
 * @returns {string} the message.
 */
function messageOf(error) {
  if (typeof error?.message === 'string' && error.message.trim() !== '') return error.message.trim();
  return String(error);
}
