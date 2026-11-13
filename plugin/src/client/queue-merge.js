/**
 * Merging the composer's queued messages, on the page.
 *
 * While the agent is busy, what the reader sends waits in the session's inbox
 * under `next-turn`. The page reaches that queue through the client Session
 * (`session.projections.faceOf('inbox')`), and the Host decides what a rewrite
 * may carry:
 *
 * - `session.updateQueue` edits ONE pending message with `TextBlock[]` only — a
 *   non-text block is rejected (`session/attachment-invalid`,
 *   `QUEUE_EDIT_NON_TEXT`) and so is an edit without words. That path is used
 *   for a text-only queue and is fast and order-preserving: the first item is
 *   edited, the rest removed.
 * - An image cannot travel that path at all. To fold messages that carry
 *   images, the merged message is SENT as a new queued turn
 *   (`session.prompt(content, 'queue')`, whose image parts are
 *   `{ type: 'image', mediaType, data: base64, name? }`, the same shape the
 *   composer sends), and the originals are removed afterwards. The bytes come
 *   from `session.readAttachment(ref)`, which reads the stored object without
 *   consulting history.
 *
 * Sending appends, so the requeue path folds the WHOLE queue — otherwise the
 * merged message would jump behind whatever followed it. That also means the
 * two paths are never mixed: a queue with images is folded whole, a text queue
 * in place.
 *
 * A failed write never loses the reader's words: the edit happens before any
 * removal, and the prompt is accepted before any removal.
 */

/**
 * The most queued messages one text merge folds in place.
 *
 * A queue longer than this is not an error: the chip merges the first batch and
 * stays available for the rest, so a reader with thirty waiting messages folds
 * them in three presses instead of being told the feature does not apply.
 */
export const MERGE_LIMIT = 8;

/**
 * The most images one merged message may carry.
 *
 * Mirrors the Host's default `maxImagesPerMessage` (20): admitting more than
 * that is refused, so the chip does not offer a write that cannot land.
 */
export const MAX_IMAGES = 20;

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
 * The image blocks of one queued item, in order.
 * @param {any} item - the queued item.
 * @returns {Array<any>} the image blocks that carry a stored attachment.
 */
export function imagesOf(item) {
  const blocks = Array.isArray(item?.content) ? item.content : [];
  return blocks.filter(
    (block) =>
      block !== null &&
      typeof block === 'object' &&
      block.type === 'image' &&
      typeof block.attachment === 'object' &&
      block.attachment !== null &&
      typeof block.attachment.attachmentId === 'string',
  );
}

/**
 * Does one queued item carry a block that is neither text nor an image?
 *
 * A file (or an unknown block) has no re-admission path from the page: a file
 * part needs an upload receipt bound to a prompt, and a queued item only holds
 * the admitted attachment reference. Those messages cannot be folded.
 * @param {any} item - the queued item.
 * @returns {boolean} true when the item holds a block the merge cannot carry.
 */
export function hasUnsupportedBlock(item) {
  const blocks = Array.isArray(item?.content) ? item.content : [];
  return blocks.some((block) => block === null || typeof block !== 'object' || (block.type !== 'text' && block.type !== 'image'));
}

/**
 * Does one queued item carry a non-text block?
 * @param {any} item - the queued item.
 * @returns {boolean} true when a text-only edit would drop something.
 */
export function hasAttachment(item) {
  const blocks = Array.isArray(item?.content) ? item.content : [];
  return blocks.some((block) => block === null || typeof block !== 'object' || block.type !== 'text');
}

/**
 * Can this queued item be folded by the in-place text merge?
 *
 * Only a text-only item with words in it: the Host's queue edit replaces the
 * message with text blocks, so an attachment would disappear.
 * @param {any} item - the queued item.
 * @param {string} [text] - its text, when already read.
 * @returns {boolean} true when the edit path may fold it.
 */
export function isFoldable(item, text = textOf(item)) {
  return typeof item?.id === 'string' && text !== '' && !hasAttachment(item);
}

/**
 * Find the run of queued messages the in-place merge may fold.
 *
 * Only CONSECUTIVE foldable items are taken, because the merged message sits at
 * the first item's place in the queue: folding across an image would move the
 * second message's words in front of it.
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
 * `mode` says which write path applies: `requeue` when the queue holds images
 * (folded whole, because sending appends), `edit` for a text-only run (folded in
 * place, batched), `none` when nothing can be folded. `batch` is the count the
 * chip badges and the merge folds in one press; `images` is how many image
 * blocks that batch carries.
 * @param {any} session - the client Session.
 * @returns {object} the queue view.
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
 * @returns {object} the queue view.
 */
export function readItems(raw) {
  const list = Array.isArray(raw) ? raw : [];
  const items = list.filter((item) => item !== null && typeof item === 'object' && typeof item.id === 'string');
  const texts = items.map(textOf);
  const images = items.reduce((count, item) => count + imagesOf(item).length, 0);
  const unsupported = items.some((item) => hasUnsupportedBlock(item));
  const run = foldRun(items, texts);

  let mode = 'none';
  let start = -1;
  let batch = 0;
  let batches = 1;
  let skipped = 0;
  let blocked = 'too-few';

  if (!unsupported && images > 0) {
    if (images > MAX_IMAGES) {
      blocked = 'too-many-images';
    } else if (items.length >= 2) {
      // Sending appends, so the whole queue is the only order-safe batch.
      mode = 'requeue';
      start = 0;
      batch = items.length;
      blocked = '';
    }
  } else if (run.length >= 2) {
    mode = 'edit';
    start = run.start;
    batch = Math.min(run.length, MERGE_LIMIT);
    batches = Math.max(1, Math.ceil(run.length / MERGE_LIMIT));
    skipped = Math.max(0, items.length - run.length);
    blocked = '';
  } else if (unsupported) {
    blocked = 'unsupported';
  }

  return { items, texts, mode, start, batch, batches, skipped, images, blocked };
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
 * Replace N queued messages with one, in place.
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
  return removeAll(session, rest, 1);
}

/**
 * Fold a queue that carries images by queuing one new message and removing the
 * originals.
 *
 * The order is not negotiable: the prompt must be accepted before anything is
 * removed, or a failed admission would delete the reader's messages. Once the
 * prompt lands, a removal that fails leaves a visible duplicate instead of lost
 * content, and is reported rather than hidden.
 * @param {any} session - the client Session.
 * @param {Array<any>} items - the queued items, in order.
 * @param {string} merged - the merged text, possibly empty.
 * @returns {Promise<{ok: boolean, merged: number, removed: number, claimed: number, error: string}>} the outcome.
 */
export async function applyRequeue(session, items, merged) {
  const list = Array.isArray(items) ? items : [];
  const text = String(merged ?? '').trim();
  if (list.length < 2) return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'bad-input' };
  if (
    typeof session?.prompt !== 'function' ||
    typeof session?.readAttachment !== 'function' ||
    typeof session?.updateQueue !== 'function'
  ) {
    return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'no-session' };
  }
  const blocks = list.flatMap((item) => imagesOf(item));
  if (blocks.length === 0) return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'bad-input' };
  if (blocks.length > MAX_IMAGES) return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'too-many-images' };

  const parts = [];
  for (const block of blocks) {
    let read;
    try {
      read = await session.readAttachment(block.attachment);
    } catch (error) {
      return { ok: false, merged: 0, removed: 0, claimed: 0, error: messageOf(error) };
    }
    if (read?.ok !== true) {
      return { ok: false, merged: 0, removed: 0, claimed: 0, error: read?.error?.code ?? 'image-read-failed' };
    }
    const bytes = read.value?.data;
    if (!(bytes instanceof Uint8Array) || bytes.length === 0) {
      return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'image-read-failed' };
    }
    const mediaType = block.attachment?.mediaType;
    if (typeof mediaType !== 'string' || mediaType === '') {
      return { ok: false, merged: 0, removed: 0, claimed: 0, error: 'image-read-failed' };
    }
    const name = typeof block.attachment?.name === 'string' && block.attachment.name !== '' ? block.attachment.name : '';
    parts.push({
      type: 'image',
      mediaType,
      data: base64Of(bytes),
      ...(name === '' ? {} : { name }),
    });
  }
  // Images first, text last — the order the composer itself sends.
  const content = text === '' ? parts : [...parts, { type: 'text', text }];
  try {
    const sent = await session.prompt(content, 'queue');
    if (sent?.ok !== true) {
      return { ok: false, merged: 0, removed: 0, claimed: 0, error: sent?.error?.code ?? 'prompt-failed' };
    }
  } catch (error) {
    return { ok: false, merged: 0, removed: 0, claimed: 0, error: messageOf(error) };
  }
  return removeAll(session, list, 1);
}

/**
 * Remove queued messages after their text is safely merged.
 * @param {any} session - the client Session.
 * @param {Array<any>} items - the items to remove.
 * @param {number} merged - how many merged messages now exist (1).
 * @returns {Promise<{ok: boolean, merged: number, removed: number, claimed: number, error: string}>} the outcome.
 */
async function removeAll(session, items, merged) {
  let removed = 0;
  let claimed = 0;
  for (const item of Array.isArray(items) ? items : []) {
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
      return { ok: false, merged, removed, claimed, error: result?.error?.code ?? 'remove-failed' };
    } catch (error) {
      return { ok: false, merged, removed, claimed, error: messageOf(error) };
    }
  }
  return {
    ok: claimed === 0,
    merged,
    removed,
    claimed,
    error: claimed > 0 ? 'session/queue-item-not-found' : '',
  };
}

/**
 * Run the whole merge for one session.
 * @param {object} input - `{ session, sessionId, locale, fetchImpl }`.
 * @returns {Promise<{ok: boolean, count: number, optimized: boolean, reason: string, mode: string, error: string}>} the outcome.
 */
export async function mergeQueue(input = {}) {
  const queue = readQueue(input.session);
  if (queue.blocked !== '' || queue.mode === 'none') {
    return { ok: false, count: 0, optimized: false, reason: '', mode: 'none', error: queue.blocked || 'too-few' };
  }
  const batch = queue.items.slice(queue.start, queue.start + queue.batch);
  const texts = batch.map(textOf).filter((text) => text !== '');
  // One text has nothing to reorganise; the queue's own text is the merge.
  const merged =
    texts.length >= 2
      ? await requestMergedText(texts, {
          sessionId: input.sessionId,
          locale: input.locale,
          fetchImpl: input.fetchImpl,
        })
      : { prompt: texts.join('\n\n'), optimized: false, reason: 'too-few' };

  // The queue is live. A message that settled while the model was merging is
  // not the same queue anymore; editing the snapshot would drop or duplicate
  // text, so stop and let the reader press the chip again on the new queue.
  const current = readQueue(input.session);
  const currentBatch = current.blocked === '' && current.mode === queue.mode
    ? current.items.slice(current.start, current.start + batch.length)
    : [];
  const sameItems =
    currentBatch.length === batch.length &&
    currentBatch.every((item, index) => sameQueuedItem(item, batch[index]));
  // A requeue appends, so it may only run when the batch is still the WHOLE
  // queue: a message queued during the model call would end up behind the
  // merged one, i.e. out of order.
  const sameQueue = queue.mode !== 'requeue' || current.items.length === batch.length;
  if (!sameItems || !sameQueue) {
    return { ok: false, count: batch.length, optimized: false, reason: '', mode: queue.mode, error: 'queue-changed' };
  }
  const applied =
    queue.mode === 'requeue'
      ? await applyRequeue(input.session, currentBatch, merged.prompt)
      : await applyMerge(input.session, currentBatch, merged.prompt);
  return {
    ok: applied.ok,
    count: batch.length,
    optimized: merged.optimized,
    reason: merged.reason,
    mode: queue.mode,
    error: applied.error,
  };
}

/**
 * Are these the same queued message, down to the images it carries?
 * @param {any} left - one item.
 * @param {any} right - the other.
 * @returns {boolean} true when the merge may still write.
 */
function sameQueuedItem(left, right) {
  if (left?.id !== right?.id) return false;
  if (textOf(left) !== textOf(right)) return false;
  const a = imagesOf(left).map((block) => block.attachment.attachmentId);
  const b = imagesOf(right).map((block) => block.attachment.attachmentId);
  return a.length === b.length && a.every((id, index) => id === b[index]);
}

/**
 * Base64 of raw bytes, in the wire form the composer sends.
 *
 * Encoded here rather than through `btoa` on a binary string: several engines
 * (and jsdom) reject a string built from raw byte codes, and the merge must not
 * depend on the page's brand of `btoa`.
 * @param {Uint8Array} bytes - image bytes.
 * @returns {string} bare base64 (no data-URL prefix).
 */
export function base64Of(bytes) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const length = bytes.length;
  const chunks = [];
  let out = '';
  let index = 0;
  for (; index + 2 < length; index += 3) {
    const value = (bytes[index] << 16) | (bytes[index + 1] << 8) | bytes[index + 2];
    out += alphabet[(value >> 18) & 63] + alphabet[(value >> 12) & 63] + alphabet[(value >> 6) & 63] + alphabet[value & 63];
    if (out.length >= 8192) {
      chunks.push(out);
      out = '';
    }
  }
  const rest = length - index;
  if (rest === 1) {
    const value = bytes[index] << 16;
    out += alphabet[(value >> 18) & 63] + alphabet[(value >> 12) & 63] + '==';
  } else if (rest === 2) {
    const value = (bytes[index] << 16) | (bytes[index + 1] << 8);
    out += alphabet[(value >> 18) & 63] + alphabet[(value >> 12) & 63] + alphabet[(value >> 6) & 63] + '=';
  }
  chunks.push(out);
  return chunks.join('');
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
