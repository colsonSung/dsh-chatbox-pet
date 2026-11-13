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
 *
 * What may be folded is decided by the Host, not by taste: `updateQueue`'s edit
 * action carries `TextBlock[]` only and rejects any non-text block
 * (`session/attachment-invalid`, reason `QUEUE_EDIT_NON_TEXT`), and it rejects
 * an edit without non-whitespace text. So a message holding an image or a file
 * can never be folded — folding it would drop the attachment — and a queue with
 * fewer than two text-only messages has nothing to fold. The chip is only
 * offered when the Host would actually accept the write.
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
 * Can this queued item be folded into merged text at all?
 *
 * An item with an attachment cannot: the Host's queue edit replaces the message
 * with text blocks, so the image would disappear. An item with no words in it
 * has nothing to contribute either.
 * @param {any} item - the queued item.
 * @param {string} [text] - its text, when already read.
 * @returns {boolean} true when the merge may fold it.
 */
export function isFoldable(item, text = textOf(item)) {
  return typeof item?.id === 'string' && text !== '' && !hasAttachment(item);
}

/**
 * Find the run of queued messages a merge may fold.
 *
 * Only CONSECUTIVE foldable items are taken, because the merged message sits at
 * the first item's place in the queue: folding across an image would move the
 * second message's words in front of it. The first run of two or more is the
 * batch, so a queue of [image, a, b] folds a+b and leaves the image where it
 * was, while [a, image, b] has no foldable run and offers no chip.
 * @param {Array<any>} items - the queued items, in order.
 * @param {Array<string>} texts - their texts, in order.
 * @returns {{start: number, length: number}} the run, or `-1`/`0` when there is none.
 */
export function foldRun(items, texts) {
  const list = Array.isArray(items) ? items : [];
  const words = Array.isArray(texts) ? texts : [];
  let index = 0;
  while (index < list.length) {
    if (!isFoldable(list[index], words[index] ?? '')) {
      index += 1;
      continue;
    }
    let end = index;
    while (end + 1 < list.length && isFoldable(list[end + 1], words[end + 1] ?? '')) end += 1;
    if (end - index + 1 >= 2) return { start: index, length: end - index + 1 };
    index = end + 1;
  }
  return { start: -1, length: 0 };
}

/**
 * The queue as the merge sees it.
 *
 * `batch` is the count the chip badges and the merge folds in one press: only
 * the first run of text-only messages, capped at `MERGE_LIMIT`. `skipped` is
 * how many queued items stay out of the fold (they carry an image or a file),
 * which the chip says out loud instead of pretending it folded everything.
 * @param {any} session - the client Session.
 * @returns {{items: Array<any>, texts: string[], start: number, batch: number, batches: number, skipped: number, blocked: string}} the queue view.
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
 * @returns {{items: Array<any>, texts: string[], start: number, batch: number, batches: number, skipped: number, blocked: string}} the queue view.
 */
export function readItems(raw) {
  const list = Array.isArray(raw) ? raw : [];
  const items = list.filter((item) => item !== null && typeof item === 'object' && typeof item.id === 'string');
  const texts = items.map(textOf);
  const run = foldRun(items, texts);
  // Nothing foldable (or only one message's words): the chip must not appear.
  const blocked = run.length < 2 ? 'too-few' : '';
  const batch = Math.min(run.length, MERGE_LIMIT);
  return {
    items,
    texts,
    start: run.start,
    batch,
    batches: Math.max(1, Math.ceil(run.length / MERGE_LIMIT)),
    skipped: Math.max(0, items.length - run.length),
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
 * Edits the first item with text only — the Host's queue edit takes
 * `TextBlock[]` and rejects anything else — then removes the others one by one;
 * the first failure stops the loop and is reported, because continuing would
 * remove messages whose text the reader has not seen merged yet.
 * @param {any} session - the client Session.
 * @param {Array<any>} items - the queued items, in order.
 * @param {string} merged - the merged text.
 * @returns {Promise<{ok: boolean, merged: number, removed: number, claimed: number, error: string}>} the outcome.
 */
export async function applyMerge(session, items, merged) {
  const list = Array.isArray(items) ? items : [];
  const text = String(merged ?? '').trim();
  if (list.length < 2 || text === '') return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'bad-input' };
  if (typeof session?.updateQueue !== 'function') return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'no-session' };
  // An attachment cannot survive a text edit; refuse before touching the queue
  // rather than folding a message whose image would vanish.
  if (list.some((item) => hasAttachment(item))) {
    return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'has-attachment' };
  }
  if (list.some((item) => textOf(item) === '')) {
    return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'bad-input' };
  }

  const [first, ...rest] = list;
  try {
    const edited = await session.updateQueue(first.id, {
      kind: 'edit',
      content: [{ type: 'text', text }],
    });
    if (edited?.ok !== true) {
      return { ok: false, merged: 0, removed: 0, claimed: 0, error: edited?.error?.code ?? 'edit-failed' };
    }
  } catch (error) {
    return { ok: false, merged: 0, removed: 0, claimed: 0, error: messageOf(error) };
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
  // One batch per press: only the foldable run, capped at MERGE_LIMIT.
  const batch = queue.items.slice(queue.start, queue.start + queue.batch);
  const texts = batch.map(textOf);
  const merged = await requestMergedText(texts, {
    sessionId: input.sessionId,
    locale: input.locale,
    fetchImpl: input.fetchImpl,
  });
  // The queue is live. A message that settled while the model was merging is
  // not the same queue anymore; editing the snapshot would drop or duplicate
  // text, so stop and let the reader press the chip again on the new queue.
  // The run is recomputed rather than assumed to be at the same offset: an item
  // removed in front of it shifts it without changing what would be folded.
  const current = readQueue(input.session);
  const currentBatch = current.blocked === ''
    ? current.items.slice(current.start, current.start + batch.length)
    : [];
  const sameItems =
    currentBatch.length === batch.length &&
    currentBatch.every((item, index) => item.id === batch[index].id && textOf(item) === texts[index]);
  if (!sameItems) {
    return { ok: false, count: batch.length, optimized: false, reason: '', error: 'queue-changed' };
  }
  const applied = await applyMerge(input.session, currentBatch, merged.prompt);
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
