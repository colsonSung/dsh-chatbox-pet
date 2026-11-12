/**
 * Merging the reader's queued messages into one.
 *
 * The composer queues messages while the agent is busy. Two or three short
 * follow-ups are usually ONE request the reader typed in a hurry, and the agent
 * ends up running three turns for it. Merging folds them into a single message
 * that still waits in the queue — the queue is untouched in kind, it just holds
 * one item instead of three.
 *
 * This module is the part of that which can be reasoned about without a page or
 * a model: what counts as mergeable, how to join them when there is no model,
 * and how to accept the model's answer (it must not invent or drop content).
 *
 * The queue itself is client state (the Host inbox is reached through
 * `session.updateQueue` on the page), so the mutation lives in
 * `src/client/queue-merge.js`. This half only answers "what should the merged
 * text be".
 */

/** The most queued messages one merge will fold; more means the reader is not merging. */
export const MERGE_LIMIT = 8;

/** The longest merged prompt the composer will take; the model's answer is cut here. */
export const MERGED_TEXT_LIMIT = 4000;

/**
 * Read one queued item's plain text.
 *
 * A queued message is a `UserMessage`: `content` is a block array, and only
 * text blocks carry words. Anything else (an image, a file) is an attachment,
 * which a text edit cannot preserve.
 * @param {any} item - the queued item.
 * @returns {string} the text, joined, without surrounding blanks.
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
 * Does this queued item carry anything a text-only edit would drop?
 * @param {any} item - the queued item.
 * @returns {boolean} true when it holds a non-text block.
 */
export function hasAttachment(item) {
  const blocks = Array.isArray(item?.content) ? item.content : [];
  return blocks.some((block) => block === null || typeof block !== 'object' || block.type !== 'text');
}

/**
 * Decide whether a queue can be merged, and which slice gets folded.
 *
 * A long queue is not a refusal any more: only the first `limit` items are
 * described, and the page folds the same slice, so a queue of thirty is merged
 * in batches. Attachments no longer block the merge either — the page carries
 * every non-text block onto the merged message, so nothing is lost.
 * @param {Array<any>} items - the queued items, in order.
 * @param {number} [limit] - the most items one merge will fold.
 * @returns {{ok: boolean, reason: string, items: Array<any>, texts: string[], total: number}} the verdict.
 */
export function planMerge(items, limit = MERGE_LIMIT) {
  const all = Array.isArray(items) ? items.filter((item) => item !== null && typeof item === 'object') : [];
  if (all.length < 2) return { ok: false, reason: 'too-few', items: all, texts: [], total: all.length };
  const batch = all.slice(0, Math.max(2, limit));
  const texts = batch.map(textOf);
  const total = all.length;
  if (texts.every((text) => text === '')) return { ok: false, reason: 'empty', items: batch, texts, total };
  if (texts.some((text) => text === '')) return { ok: false, reason: 'empty', items: batch, texts, total };
  return { ok: true, reason: '', items: batch, texts, total };
}

/**
 * Join queued texts without a model.
 *
 * This is the honest fallback: it keeps every word the reader typed, in order,
 * and adds nothing. A merge that has to invent a connective is worse than one
 * that reads like two paragraphs.
 * @param {string[]} texts - the queued texts, in order.
 * @returns {string} the joined text.
 */
export function joinQueued(texts) {
  const parts = (Array.isArray(texts) ? texts : [])
    .map((text) => String(text ?? '').trim())
    .filter((text) => text !== '');
  return parts.join('\n\n');
}

/**
 * Trim the model's answer back to something sendable.
 *
 * The model is asked for the prompt body only, but it still wraps answers in
 * fences or quotes now and then, and it does not get to decide how long the
 * reader's own words are.
 * @param {any} answer - the model's answer.
 * @returns {string} the prompt body, or '' when nothing usable came back.
 */
export function sanitizeMerged(answer) {
  let text = typeof answer === 'string' ? answer : '';
  if (text === '') return '';
  text = text.trim();
  // A fenced answer: keep what is inside the first fence.
  const fenced = /```[a-zA-Z0-9-]*\n([\s\S]*?)```/.exec(text);
  if (fenced !== null && fenced[1].trim() !== '') text = fenced[1].trim();
  // A fully quoted answer: drop the outer pair.
  if (text.length > 2 && /^["“'「]/.test(text) && /["”'」]$/.test(text)) {
    text = text.slice(1, -1).trim();
  }
  const characters = Array.from(text);
  return characters.length <= MERGED_TEXT_LIMIT ? text : characters.slice(0, MERGED_TEXT_LIMIT).join('');
}

/**
 * The system prompt for one merge.
 *
 * The rules are the same shape as the rewriter's, with one difference that
 * matters: a merge may only REORGANISE what is already there. Inventing a
 * requirement here would be putting words in the reader's mouth.
 * @param {'zh'|'en'} locale - the output language.
 * @returns {string} the system prompt.
 */
export function buildMergeSystemPrompt(locale) {
  return locale === 'en' ? MERGE_SYSTEM_EN : MERGE_SYSTEM_ZH;
}

const MERGE_SYSTEM_ZH = [
  '你在把用户排队中的几条消息合并成一条，让智能体一次就能做对。',
  '',
  '规则：',
  '1. 只整合用户已经说过的话：保留全部事实、数字、文件名、约束和语气，不得新增任何用户没提的需求。',
  '2. 合并后读起来要像一个人一次说清：同类的合并，重复的只说一次，顺序按做事时真正需要的顺序。',
  '3. 指令之间如果互相冲突，两条都保留，并在末尾加一条「待确认：」说明冲突点。',
  '4. 不要编造事实、数据或引用；不要解释你做了什么。',
  '5. 只输出合并后的消息正文：不要前言、不要标题、不要代码围栏、不要整体加引号。',
  '6. 中文输入输出中文，英文输入输出英文。',
  '7. 长度接近几条原文之和，能短则短；不要为了「完整」把每条都扩写一遍。',
].join('\n');

const MERGE_SYSTEM_EN = [
  'You fold several queued messages from the same reader into one message the agent can act on in a single pass.',
  '',
  'Rules:',
  '1. Reorganise only what the reader already said: keep every fact, number, file name, constraint and the tone. Add no requirement they did not ask for.',
  '2. It must read as one request: fold the duplicates, group what belongs together, order it the way the work has to happen.',
  '3. If two instructions conflict, keep both and add one "To confirm:" line at the end naming the conflict.',
  '4. Never invent facts, numbers or citations, and do not explain what you did.',
  '5. Output only the merged message body: no preamble, no headings, no code fences, no surrounding quotes.',
  '6. Reply in the language of the input.',
  '7. Keep it close to the combined length of the originals, shorter where possible; do not expand each one.',
].join('\n');

/**
 * The user message for one merge.
 * @param {string[]} texts - the queued texts, in order.
 * @returns {string} the user prompt.
 */
export function buildMergeUserPrompt(texts) {
  const parts = (Array.isArray(texts) ? texts : []).map((text, index) => `${index + 1}. ${String(text ?? '').trim()}`);
  return ['下面是用户连续发给同一个智能体、还在排队中的消息，按发送顺序：', '', ...parts].join('\n');
}
