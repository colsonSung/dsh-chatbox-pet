/**
 * The pet's own small talk.
 *
 * The reader asks for a line, the pet picks one real thing out of the reader's
 * own stores (memory, meeting minutes, reading notes, moments) and turns it
 * into one bubble — a topic to pick up, a reminder, a recollection, a nudge,
 * encouragement, a tease, or plain chit-chat.
 *
 * Design rules, and why:
 *   - LOCAL TEMPLATES, not a model call: a bubble that takes 5–20 seconds is
 *     not a companion, it is a bug. Every kind has several phrasings, and the
 *     item is chosen by a seeded digest so the line is deterministic and
 *     testable while still varying between calls.
 *   - GROUNDED: a line always carries a real snippet from a real store, or it
 *     says so honestly (the generic pool) when every store is empty.
 *   - SHORT: a bubble is one glance, so the snippet is cut to one clause and
 *     the whole line stays inside `QUIP_LIMIT`.
 *   - NO REPEATS: the engine keeps a ring of the items it already used, so the
 *     same moment is not quoted twice in a row.
 */

/** The kinds of line the pet can bring up. */
export const QUIP_KINDS = ['topic', 'reminder', 'recall', 'nudge', 'encourage', 'tease', 'chitchat'];

/** The longest line the bubble will show. */
export const QUIP_LIMIT = 52;

/** The longest snippet taken out of one stored item. */
export const SNIPPET_LIMIT = 28;

/**
 * How many recently used items the engine refuses to repeat.
 *
 * It must stay well below the size of a store pool (a dozen items or so), or
 * the pet exhausts its own material and falls back to generic lines for the
 * rest of the session.
 */
export const RECENT_LIMIT = 6;

/**
 * Which store each kind prefers, best first. Kinds that do not need a
 * particular store fall back to "whatever is freshest".
 */
const KIND_SOURCES = {
  reminder: ['minutes', 'moments', 'memory'],
  recall: ['memory', 'reader', 'moments'],
  topic: ['memory', 'reader', 'moments'],
  nudge: ['minutes', 'memory', 'moments'],
  encourage: ['memory', 'minutes', 'moments'],
  tease: ['moments', 'memory', 'reader'],
  chitchat: ['moments', 'memory', 'reader'],
};

/**
 * The phrasings per kind, `{when}` = the relative time, `{what}` = the snippet.
 * Every pool has several entries so repeated calls in one session do not read
 * like a template engine.
 */
const TEMPLATES = {
  zh: {
    topic: ['聊个话题？{what}', '突然想到：{what}', '{when}你在想 {what}，后来呢'],
    reminder: ['{when}记的：{what}', '提醒你一下，{what}', '别忘啦，{what}'],
    recall: ['{when}你记过：{what}', '翻到一条：{what}', '还记得吗，{what}'],
    nudge: ['{what} 还挂着呢', '要不要先把 {what} 推一下', '皮卡丘盯上了：{what}'],
    encourage: ['{what} 都有进展了，继续', '你连 {what} 都搞定了', '{what} 那关已经过了，冲'],
    tease: ['又在忙？{what} 还没动', '说好今天搞 {what} 的', '三分钟够了吧，{what} 呢'],
    chitchat: ['{what}，要聊两句吗', '闲着也是闲着：{what}', '陪你说说 {what}'],
  },
  en: {
    topic: ['Topic: {what}', 'Random thought: {what}', '{when} you noted {what} — how did it go?'],
    reminder: ['You noted {when}: {what}', 'Reminder: {what}', 'Do not forget: {what}'],
    recall: ['{when} you wrote: {what}', 'Found this: {what}', 'Remember: {what}'],
    nudge: ['{what} is still open', 'Shall we push {what}?', 'Pikachu is watching {what}'],
    encourage: ['{what} is moving — keep going', 'You cleared {what} already', '{what} is done, on to the next'],
    tease: ['Busy again? {what} untouched', 'Today was {what} day, right?', 'Three minutes, then {what}?'],
    chitchat: ['{what} — chat about it?', 'Idle anyway: {what}', 'Tell me about {what}'],
  },
};

/** Lines used when no store has anything to quote. */
const GENERIC = {
  zh: {
    topic: ['今天想聊点什么？', '皮卡丘在这儿，说点什么吧'],
    reminder: ['有件事别忘了，皮卡丘记着呢', '要不要先看看待办？'],
    recall: ['以前的事，皮卡丘替你记着', '哪天想翻旧账就叫我'],
    nudge: ['该推进的都推进了吗？', '皮卡丘催你一下：先做最重要的'],
    encourage: ['今天也辛苦了，皮卡', '进度不管多小都算数'],
    tease: ['皮卡？又在发呆', '摸鱼的时候尾巴会翘哦'],
    chitchat: ['皮卡丘在摸鱼，你也在吗', '要不要休息一下，喝口水'],
  },
  en: {
    topic: ['What should we talk about?', 'Pikachu is here — say something'],
    reminder: ['Something is on your list', 'Shall we check the todo?'],
    recall: ['Pikachu keeps the old notes', 'Ask me for an old one'],
    nudge: ['Is the important thing moving?', 'A small nudge: start with the top one'],
    encourage: ['Good work today, pika', 'Every small step counts'],
    tease: ['Pika? Spacing out again', 'The tail twitches when you slack'],
    chitchat: ['Pikachu is slacking, you too?', 'Take a breath, drink some water'],
  },
};

/**
 * A stable hash, used to pick phrasings deterministically.
 * @param {string} value - the text.
 * @returns {number} a non-negative integer.
 */
export function hashText(value) {
  let hash = 2166136261;
  const text = String(value ?? '');
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/**
 * Strip the noise a stored item carries: markdown marks, a leading date, a
 * trailing "（2026-11-03 核实）" stamp.
 * @param {string} value - the raw text.
 * @returns {string} the cleaned text.
 */
function tidy(value) {
  return String(value ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/^#+\s*/, '')
    .replace(/^\d{4}-\d{2}-\d{2}\s*/, '')
    // A dated stamp is metadata, wherever it sits: "约定（2026-11-03 核实）".
    .replace(/[（(][^）)]*\d{4}-\d{2}-\d{2}[^）)]*[）)]/g, '')
    // A short trailing parenthesis is decoration: "标题栏（已修）".
    .replace(/\s*[（(][^）)]{0,10}[）)]\s*$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Cut a quote to the limit at a natural boundary: a space or a CJK
 * punctuation if there is one near the end, otherwise a hard cut marked with
 * an ellipsis.
 * @param {string} value - the quote.
 * @param {number} limit - the code-point limit.
 * @returns {string} the quote.
 */
function cut(value, limit) {
  const characters = Array.from(value);
  if (characters.length <= limit) return value;
  const head = characters.slice(0, limit - 1).join('');
  // Prefer to end on a boundary: a space, or one of the CJK marks. The
  // boundary must be late enough to keep most of the thought — a space right
  // after a Latin product name ("Moments Canvas ") is not a boundary worth
  // taking, it would cut the sentence down to the product name.
  const boundary = Math.max(
    head.lastIndexOf('，'),
    head.lastIndexOf('、'),
    head.lastIndexOf('：'),
    head.lastIndexOf('/'),
    head.lastIndexOf(' '),
  );
  const kept = boundary >= Math.floor(limit * 0.6) ? head.slice(0, boundary).trim() : head;
  return `${kept}…`;
}

/**
 * Cut a heading before the metadata that follows it.
 *
 * A stored note is often "# 标题 仓库：xxx 根目录：yyy" on one line, and the
 * title is what the reader wrote, not the fields under it.
 * @param {string} heading - the heading text.
 * @returns {string} the heading without its trailing fields.
 */
function trimHeading(heading) {
  const text = String(heading ?? '');
  // A space, then a short label, then a colon: " 仓库：".
  const match = /\s\S{1,8}：/.exec(text);
  if (match !== null && match.index > 4) return text.slice(0, match.index).trim();
  return text.trim();
}

/**
 * The phrase to quote for one item.
 *
 * A stored item is often "heading + body". The heading is the thought; the
 * body is the detail. So the heading wins, then the title, and only then the
 * first clause of the body — quoting the first 20 characters of a body gives
 * a truncated date like "2026-11-07 Moments …", which says nothing.
 * @param {object} item - the item ({ text, title }).
 * @param {number} [limit] - the code-point limit.
 * @returns {string} the quote, or ''.
 */
export function quoteFor(item, limit = SNIPPET_LIMIT) {
  const text = String(item?.text ?? '').trim();
  const heading = /^#{1,3}[ \t]*(.+)$/m.exec(text);
  let candidate = '';
  if (heading !== null) candidate = tidy(trimHeading(heading[1]));
  if (candidate === '') candidate = tidy(item?.title);
  if (candidate === '') {
    const body = tidy(text);
    candidate = body.split(/[。！？!?；;\n]/)[0].trim() || body;
  }
  if (candidate === '') return '';
  return cut(candidate, limit);
}

/**
 * Cut one stored item down to a single short clause (kept for callers that
 * only have the raw text).
 * @param {any} value - the item text.
 * @param {number} [limit] - the code-point limit.
 * @returns {string} the snippet, or ''.
 */
export function snippet(value, limit = SNIPPET_LIMIT) {
  const text = String(value ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text === '') return '';
  const firstClause = text.split(/[。！？!?；;\n]/)[0].trim() || text;
  const characters = Array.from(firstClause);
  return characters.length <= limit ? firstClause : `${characters.slice(0, limit - 1).join('')}…`;
}

/**
 * "3 天前" / "昨天" / "今天" in the reader's language.
 * @param {number} at - when the item was written (epoch ms, 0 = unknown).
 * @param {number} now - the current time.
 * @param {'zh'|'en'} locale - the language.
 * @returns {string} the phrase, or '' when the time is unknown.
 */
export function relativeWhen(at, now, locale = 'zh') {
  if (!Number.isFinite(at) || at <= 0) return '';
  const day = 24 * 60 * 60 * 1000;
  const diff = Math.max(0, now - at);
  const zh = locale !== 'en';
  if (diff < 60 * 60 * 1000) return zh ? '刚才' : 'just now';
  if (diff < day) {
    const hours = Math.max(1, Math.round(diff / (60 * 60 * 1000)));
    return zh ? `${hours} 小时前` : `${hours}h ago`;
  }
  const days = Math.round(diff / day);
  if (days <= 1) return zh ? '昨天' : 'yesterday';
  if (days < 7) return zh ? `${days} 天前` : `${days}d ago`;
  if (days < 30) {
    const weeks = Math.round(days / 7);
    return zh ? `${weeks} 周前` : `${weeks}w ago`;
  }
  const months = Math.round(days / 30);
  return zh ? `${months} 个月前` : `${months}mo ago`;
}

/**
 * Every item across the collected stores, annotated with where it came from.
 * @param {Array<object>} sources - `collectContext().sources`.
 * @returns {Array<{source: string, label: string, text: string, title: string, at: number, key: string}>} the items.
 */
export function flattenItems(sources) {
  const out = [];
  const list = Array.isArray(sources) ? sources : [];
  for (const source of list) {
    const items = Array.isArray(source?.items) ? source.items : [];
    for (const item of items) {
      const text = typeof item?.text === 'string' ? item.text.trim() : '';
      if (text === '') continue;
      out.push({
        source: String(source?.id ?? ''),
        label: String(source?.label ?? source?.id ?? ''),
        text,
        title: typeof item?.title === 'string' ? item.title : '',
        at: Number.isFinite(item?.at) && item.at > 0 ? item.at : 0,
        key: `${source?.id ?? ''}\u0000${text}`,
      });
    }
  }
  return out;
}

/**
 * Rank items for one kind: preferred stores first, then the freshest.
 * @param {Array<object>} items - the flattened items.
 * @param {string} kind - the quip kind.
 * @returns {Array<object>} the ordered items.
 */
export function rankForKind(items, kind) {
  const preference = KIND_SOURCES[kind] ?? [];
  const rankOf = (item) => {
    const index = preference.indexOf(item.source);
    return index === -1 ? preference.length : index;
  };
  return [...items].sort((left, right) => {
    const bySource = rankOf(left) - rankOf(right);
    if (bySource !== 0) return bySource;
    return (right.at || 0) - (left.at || 0);
  });
}

/**
 * Choose the next kind, never the same one twice in a row.
 * @param {string|null} previous - the kind of the last quip.
 * @param {number} seed - a seed (call count or time).
 * @returns {string} the kind.
 */
export function pickKind(previous, seed) {
  const pool = QUIP_KINDS.filter((kind) => kind !== previous);
  // A digest, not a raw modulo: sequential seeds (call counters) would
  // otherwise land on the same kind over and over.
  const index = hashText(`kind\u0000${Number.isFinite(seed) ? Math.trunc(seed) : 0}`) % pool.length;
  return pool[index] ?? QUIP_KINDS[0];
}

/**
 * The language of a piece of text: Chinese when it holds CJK, English
 * otherwise. An empty text has no language of its own.
 * @param {string} value - the text.
 * @returns {'zh'|'en'|null} the language.
 */
export function textLanguage(value) {
  const text = String(value ?? '');
  if (text === '') return null;
  return /[\u3400-\u9fff\uf900-\ufaff]/.test(text) ? 'zh' : 'en';
}

/**
 * Render one line from a kind, an item and a moment.
 * @param {object} input - the inputs.
 * @param {string} input.kind - the kind.
 * @param {string} input.snippetText - the snippet ('' → the generic pool).
 * @param {string} input.when - the relative time phrase (may be '').
 * @param {'zh'|'en'} input.locale - the language.
 * @param {string} input.seed - the digest that picks the phrasing.
 * @returns {string} the line.
 */
export function renderQuip({ kind, snippetText, when, locale, seed }) {
  const language = locale === 'en' ? 'en' : 'zh';
  const generic = GENERIC[language][kind] ?? GENERIC[language].chitchat;
  let pool = TEMPLATES[language][kind] ?? TEMPLATES[language].chitchat;
  if (snippetText === '') {
    pool = generic;
  } else {
    // A grounded line must actually show the quote: a template without a
    // placeholder would collect the item and then never say it.
    const withQuote = pool.filter((entry) => entry.includes('{what}'));
    pool = withQuote.length > 0 ? withQuote : ['{what}'];
  }
  const template = pool[hashText(`${kind}\u0000${seed}`) % pool.length];
  const line = template
    .replace(/\{what\}/g, snippetText)
    .replace(/\{when\}/g, when)
    // A template that lost its placeholder to an empty value must not leave a
    // double space or a stray separator behind.
    .replace(/\s{2,}/g, ' ')
    .replace(/^[\s，,：:、-]+|[\s，,：:、-]+$/g, '')
    // A cut quote ends in an ellipsis; a Chinese particle after it ("… 的")
    // reads as a mistake, so the particle goes with the missing words.
    .replace(/…\s*[的了吧啊呀呢嘛]/g, '…')
    .trim();
  const characters = Array.from(line);
  return characters.length <= QUIP_LIMIT ? line : `${characters.slice(0, QUIP_LIMIT - 1).join('')}…`;
}

/**
 * Build one quip from collected context.
 * @param {object} input - the inputs.
 * @param {Array<object>} input.sources - `collectContext().sources`.
 * @param {string} [input.kind] - force a kind.
 * @param {string|null} [input.previousKind] - the last kind, for rotation.
 * @param {'zh'|'en'} [input.locale] - the language.
 * @param {number} [input.now] - the current time.
 * @param {Set<string>} [input.exclude] - item keys already used.
 * @param {number} [input.seed] - the variation seed.
 * @returns {{kind: string, text: string, source: null|{id: string, label: string}, key: string|null, at: number}} the quip.
 */
export function buildQuip(input = {}) {
  const now = Number.isFinite(input.now) ? input.now : Date.now();
  const locale = input.locale === 'en' ? 'en' : 'zh';
  const seed = Number.isFinite(input.seed) ? input.seed : Math.floor(now / 1000);
  const kind = QUIP_KINDS.includes(input.kind) ? input.kind : pickKind(input.previousKind ?? null, seed);
  const items = flattenItems(input.sources);
  const exclude = input.exclude instanceof Set ? input.exclude : new Set();
  const ordered = rankForKind(items, kind);
  // The no-repeat set is a preference, not a filter: when every item is
  // already spoken of, the oldest one is reused rather than falling back to
  // a generic line. A pool of four items and a ring of six must still talk
  // about the reader's own notes.
  const fresh = ordered.filter((item) => !exclude.has(item.key));
  const chosen = (fresh[0] ?? ordered[0]) ?? null;
  const quote = chosen === null ? '' : quoteFor(chosen);
  // The quote decides the language: an English shell with Chinese notes must
  // still read as a Chinese sentence, and an English book title inside a
  // Chinese note must not turn the whole line English.
  // The item is the reader's own writing, so its language is the right one.
  // The quote alone is not: "Moments Canvas" has no CJK even when the note it
  // comes from is entirely Chinese.
  const line = textLanguage(chosen?.text) ?? textLanguage(quote) ?? locale;
  const text = renderQuip({
    kind,
    snippetText: quote,
    when: chosen === null ? '' : relativeWhen(chosen.at, now, line),
    locale: line,
    seed: `${seed}\u0000${chosen?.key ?? ''}`,
  });
  return {
    kind,
    text,
    quote,
    // The item the quote came from, so a caller can show it and a test can
    // check that the quote really is part of a stored item.
    item: chosen === null ? '' : chosen.text.slice(0, 320),
    locale: line,
    source: chosen === null ? null : { id: chosen.source, label: chosen.label },
    key: chosen === null ? null : chosen.key,
    at: chosen === null ? 0 : chosen.at,
  };
}

/**
 * The stateful wrapper the Host keeps: kind rotation plus a no-repeat ring.
 * @param {object} [deps] - `{ now, seed }` injectable for tests.
 * @returns {object} the engine.
 */
export function createQuipEngine(deps = {}) {
  const now = typeof deps.now === 'function' ? deps.now : () => Date.now();
  let previousKind = null;
  let counter = 0;
  const used = [];

  /**
   * Produce one quip and remember what it quoted.
   * @param {Array<object>} sources - the collected stores.
   * @param {{kind?: string, locale?: 'zh'|'en'}} [options] - the request.
   * @returns {object} the quip.
   */
  function next(sources, options = {}) {
    counter += 1;
    const quip = buildQuip({
      sources,
      kind: options.kind,
      previousKind,
      locale: options.locale,
      now: now(),
      exclude: new Set(used),
      seed: counter * 7919 + Math.floor(now() / 1000),
    });
    previousKind = quip.kind;
    if (quip.key !== null) {
      used.push(quip.key);
      if (used.length > RECENT_LIMIT) used.shift();
    }
    return quip;
  }

  return {
    next,
    /** Forget the no-repeat memory (a test hook, and a fresh start per reload). */
    reset() {
      used.length = 0;
      previousKind = null;
      counter = 0;
    },
    usedCount: () => used.length,
  };
}
