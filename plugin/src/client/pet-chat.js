/**
 * Pet chat: the Pikachu reacts when the reader talks to it in the composer.
 *
 * Typing one of the wake words ("hi pika" / "pika" / "pika pika" / "皮卡丘" /
 * "电老鼠") puts the pet into conversation mode: it perks up immediately, then
 * answers the content of the draft with a matching clip, sound and one-line
 * bubble.
 *
 * Everything here is a pure function of its inputs — the component owns the
 * timers, this module owns the judgement — so the whole behaviour is testable
 * without a browser, and the same draft always produces the same answer
 * (a seeded digest picks the line variant).
 */

/** The words that put the pet into conversation mode, longest first. */
export const WAKE_WORDS = ['hi pika', 'pika pika', '皮卡丘', '电老鼠', 'pika'];

/** The line the pet shows the moment it hears its name. */
const WAKE_LINES = {
  zh: ['皮卡？', '嗯？皮卡', '皮卡皮卡？'],
  en: ['Pika?', 'Hm? Pika', 'Pika pika?'],
};

/**
 * Intent rules, first match wins. Latin keywords match as whole tokens, so
 * "hi" never matches "this"; Chinese keywords match as substrings.
 *
 * The order is the product decision: a sentence that thanks you AND praises you
 * is a thanks (the pet answers the social move, not the compliment).
 */
const INTENTS = [
  {
    id: 'sleep',
    zh: ['睡', '困', '晚安', '休息'],
    en: ['sleep', 'sleepy', 'tired', 'night'],
  },
  {
    id: 'bye',
    zh: ['拜拜', '再见', '走了', '回头见'],
    en: ['bye', 'goodbye', 'see you', 'later'],
  },
  {
    id: 'thanks',
    zh: ['谢谢', '谢啦', '感谢', '辛苦了'],
    en: ['thanks', 'thank you', 'thx', 'appreciate'],
  },
  {
    id: 'scold',
    zh: ['笨', '吵', '烦', '闭嘴', '滚', '讨厌', '难看', '别吵'],
    en: ['stupid', 'annoying', 'shut up', 'hate', 'useless'],
  },
  {
    id: 'praise',
    zh: ['厉害', '棒', '可爱', '喜欢', '爱你', '乖', '真好', '不错', '牛', '赞'],
    en: ['good', 'great', 'cute', 'love', 'nice', 'awesome', 'smart', 'best'],
  },
  {
    id: 'food',
    zh: ['吃', '饿', '饭', '零食', '果汁', '咖啡', '糖'],
    en: ['food', 'hungry', 'snack', 'juice', 'coffee', 'eat'],
  },
  {
    id: 'play',
    zh: ['玩', '跳舞', '转圈', '一起', '游戏'],
    en: ['play', 'dance', 'spin', 'game', 'together'],
  },
  {
    id: 'status',
    zh: ['在干嘛', '在干什么', '你好吗', '怎么样', '忙吗', '状态', '在忙'],
    en: ['how are you', 'what are you doing', 'busy', 'status'],
  },
  {
    id: 'greet',
    zh: ['你好', '嗨', '哈喽', '早上好', '早', '在吗'],
    en: ['hello', 'hi', 'hey', 'morning'],
  },
  {
    id: 'question',
    zh: ['为什么', '怎么', '什么', '能不能', '是不是', '吗', '？', '?'],
    en: ['why', 'how', 'what', 'can you', '?'],
  },
];

/**
 * What the pet does about each intent: one clip, one sound, a pool of lines.
 * Clips are the pack's, so an unknown clip name would 404 — the list is the
 * whitelist intersection (see `src/host/pack.js`).
 */
const REPLIES = {
  greet: {
    clip: 'click-wave',
    sound: 'click',
    zh: ['皮卡！', '皮卡皮卡～', '皮卡丘在的'],
    en: ['Pika!', 'Pika pika~', 'Pikachu is here'],
  },
  praise: {
    clip: 'click-cheer',
    sound: 'cheer',
    zh: ['皮卡皮卡！', '嘿嘿…皮卡', '被夸了皮卡'],
    en: ['Pika pika!', 'Hehe, pika', 'I am flattered'],
  },
  thanks: {
    clip: 'click-cheer',
    sound: 'cheer',
    zh: ['不客气皮卡', '皮卡～', '举手之劳皮卡'],
    en: ['No problem, pika', 'Pika~', 'Anytime, pika'],
  },
  scold: {
    clip: 'click-angry',
    sound: 'pout',
    zh: ['皮卡……', '委屈皮卡', '呜…皮卡'],
    en: ['Pika...', 'That hurt, pika', 'Aw, pika'],
  },
  bye: {
    clip: 'click-wave',
    sound: 'click',
    zh: ['下次见皮卡', '拜拜皮卡！', '皮卡丘走啦'],
    en: ['See you, pika', 'Bye bye pika!', 'Pikachu is off'],
  },
  food: {
    clip: 'act-fishing',
    sound: 'cheer',
    zh: ['想吃皮卡！', '有零食吗皮卡', '果汁！皮卡'],
    en: ['Hungry pika!', 'Got a snack, pika?', 'Juice! Pika'],
  },
  play: {
    clip: 'act-spin',
    sound: 'cheer',
    zh: ['皮卡皮卡！', '转圈圈皮卡', '一起玩皮卡'],
    en: ['Pika pika!', 'Spin spin, pika', 'Let us play, pika'],
  },
  status: {
    clip: 'act-reading',
    sound: 'thinking',
    zh: ['在看代码皮卡', '皮卡在干活', '刚歇一会儿皮卡'],
    en: ['Reading code, pika', 'Pika is working', 'Taking a break, pika'],
  },
  question: {
    clip: 'act-typing',
    sound: 'thinking',
    zh: ['皮卡？', '让我想想皮卡', '这个皮卡想想'],
    en: ['Pika?', 'Let me think, pika', 'Hmm, pika is thinking'],
  },
  sleep: {
    clip: 'act-snore',
    sound: 'sleep',
    zh: ['zzz…皮卡', '皮卡要充电了', '晚安皮卡'],
    en: ['Zzz... pika', 'Pikachu needs a charge', 'Good night, pika'],
  },
  fallback: {
    clip: 'click-surprise',
    sound: 'notify',
    zh: ['皮卡？', '皮卡皮卡', '嗯？皮卡'],
    en: ['Pika?', 'Pika pika', 'Hm? Pika'],
  },
};

/** Every intent the pet can answer, `fallback` last. */
export const INTENT_IDS = [...INTENTS.map((rule) => rule.id), 'fallback'];

/**
 * Escape a literal string for use inside a RegExp.
 * @param {string} value - the literal.
 * @returns {string} the escaped literal.
 */
function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Normalise a draft for matching: NFC, lower case, whitespace collapsed.
 * @param {string} value - the raw draft.
 * @returns {string} the normalised text.
 */
function normalise(value) {
  return String(value ?? '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Find the wake word in a draft.
 *
 * Latin wake words must be whole tokens ("pika" inside "pikachu" is not a
 * call); Chinese ones are plain substrings. The longest match wins, so
 * "hi pika" is reported as itself rather than as "pika".
 * @param {string} draft - the composer draft.
 * @returns {{wake: string, rest: string}|null} the match, or null.
 */
export function detectWake(draft) {
  const text = normalise(draft);
  if (text === '') return null;
  for (const word of WAKE_WORDS) {
    const latin = /^[a-z ]+$/.test(word);
    const pattern = latin
      ? new RegExp(`(^|[^a-z])${escapeRegExp(word).replace(/ /g, '\\s+')}([^a-z]|$)`)
      : new RegExp(escapeRegExp(word));
    const match = pattern.exec(text);
    if (match === null) continue;
    const start = match.index + (latin ? match[1].length : 0);
    const end = start + (latin ? word.replace(/ /g, ' ').length : word.length);
    // The matched span in the normalised text: strip it out of the draft copy
    // so the content classifier only sees what was said to the pet.
    const rest = `${text.slice(0, start)} ${text.slice(end)}`
      .replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g, '')
      .trim();
    return { wake: word, rest };
  }
  return null;
}

/**
 * A stable hash of a text, used to pick a line deterministically.
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
 * Classify the content the reader addressed to the pet.
 * @param {string} rest - the draft with the wake word removed.
 * @returns {string} one of `INTENT_IDS`.
 */
export function classifyIntent(rest) {
  const text = normalise(rest);
  if (text === '') return 'fallback';
  for (const rule of INTENTS) {
    for (const keyword of rule.zh) {
      if (text.includes(keyword)) return rule.id;
    }
    for (const keyword of rule.en) {
      // Escaped: an unescaped '?' would become a quantifier and match almost
      // anything (measured: every short Chinese string classified as a question).
      const pattern = new RegExp(`(^|[^a-z])${escapeRegExp(keyword).replace(/ /g, '\\s+')}([^a-z]|$)`);
      if (pattern.test(text)) return rule.id;
    }
  }
  return 'fallback';
}

/**
 * Pick one line from a pool, deterministically from a seed.
 * @param {string[]} pool - the lines.
 * @param {string} seed - the digest.
 * @returns {string} the chosen line.
 */
function pickLine(pool, seed) {
  const lines = Array.isArray(pool) ? pool.filter((line) => typeof line === 'string' && line !== '') : [];
  if (lines.length === 0) return '';
  return lines[hashText(seed) % lines.length];
}

/**
 * The reply for one intent.
 * @param {string} intent - one of `INTENT_IDS`.
 * @param {{locale?: 'zh'|'en', seed?: string}} [options] - the locale and the seed.
 * @returns {{intent: string, clip: string, sound: string, line: string}} the reply.
 */
export function replyFor(intent, options = {}) {
  const reply = REPLIES[intent] ?? REPLIES.fallback;
  const locale = options.locale === 'en' ? 'en' : 'zh';
  const seed = typeof options.seed === 'string' && options.seed !== '' ? options.seed : String(intent);
  return {
    intent: REPLIES[intent] === undefined ? 'fallback' : intent,
    clip: reply.clip,
    sound: reply.sound,
    line: pickLine(reply[locale], seed),
  };
}

/**
 * The language the pet answers in: the language the reader used, not the UI
 * locale (a Chinese reader can run an English-locale shell).
 * @param {string} draft - the composer draft.
 * @param {'zh'|'en'} [fallback] - the UI locale, used when the draft has no letters.
 * @returns {'zh'|'en'} the language.
 */
export function draftLocale(draft, fallback = 'zh') {
  const text = String(draft ?? '');
  if (/[\u4e00-\u9fff]/.test(text)) return 'zh';
  if (/[a-z]/i.test(text)) return 'en';
  return fallback === 'en' ? 'en' : 'zh';
}

/**
 * The line the pet shows the moment it hears its name.
 * @param {{locale?: 'zh'|'en', seed?: string}} [options] - the locale and the seed.
 * @returns {string} the line.
 */
export function wakeLine(options = {}) {
  const locale = options.locale === 'en' ? 'en' : 'zh';
  return pickLine(WAKE_LINES[locale], options.seed ?? 'wake');
}

/**
 * The conversation-mode state machine.
 *
 * Two moments matter, and they are deliberately separate:
 *   - `observe` runs on every keystroke: it reacts to the wake word at once
 *     (the pet looks up the moment it hears its name);
 *   - `settle` runs after the typing pauses: it answers the content. That is
 *     what stops the pet from replying to every half-typed word.
 *
 * @param {{now?: () => number, debounceMs?: number, holdMs?: number,
 *          minReplyGapMs?: number}} [options] - tunables for tests.
 * @returns {object} the engine.
 */
export function createChatEngine(options = {}) {
  const now = typeof options.now === 'function' ? options.now : () => Date.now();
  const debounceMs = Number.isFinite(options.debounceMs) ? options.debounceMs : 700;
  const holdMs = Number.isFinite(options.holdMs) ? options.holdMs : 15_000;
  const minReplyGapMs = Number.isFinite(options.minReplyGapMs) ? options.minReplyGapMs : 1200;

  let active = false;
  let wake = '';
  let lastDigest = '';
  let lastSeenAt = 0;
  // The gap guards content replies against each other; the wake moment starts
  // the conversation, so the first answer is never delayed by it.
  let lastContentReplyAt = 0;

  /**
   * Feed one draft; report whether the pet should react right now.
   * @param {string} draft - the composer draft.
   * @returns {{kind: 'wake'|'off', wake?: string, digest?: string}|null} a decision.
   */
  function observe(draft) {
    const hit = detectWake(draft);
    if (hit === null) {
      if (!active) return null;
      active = false;
      wake = '';
      lastDigest = '';
      return { kind: 'off' };
    }
    lastSeenAt = now();
    if (active) return null;
    active = true;
    wake = hit.wake;
    lastDigest = hit.rest;
    lastSeenAt = now();
    lastContentReplyAt = 0;
    return { kind: 'wake', wake: hit.wake, digest: hit.rest };
  }

  /**
   * Answer the content once the typing has paused.
   * @param {string} draft - the composer draft.
   * @param {{locale?: 'zh'|'en'}} [replyOptions] - the locale.
   * @returns {{kind: 'reply', ...}|null} the reply decision, or null.
   */
  function settle(draft, replyOptions = {}) {
    if (!active) return null;
    const hit = detectWake(draft);
    if (hit === null) {
      active = false;
      return { kind: 'off' };
    }
    const digest = `${hit.wake}\u0000${hit.rest}`;
    if (digest === lastDigest) return null;
    const at = now();
    const elapsed = at - lastContentReplyAt;
    if (elapsed < minReplyGapMs) {
      // The reader kept talking inside the cooldown. Do NOT swallow it: report
      // how long to wait and let the caller come back for the answer.
      return { kind: 'cooldown', retryInMs: minReplyGapMs - elapsed };
    }
    lastDigest = digest;
    lastContentReplyAt = at;
    lastSeenAt = at;
    const intent = classifyIntent(hit.rest);
    const reply = replyFor(intent, { ...replyOptions, seed: digest });
    return { kind: 'reply', ...reply, digest };
  }

  /**
   * Drop out of conversation mode after a quiet spell.
   * @returns {{kind: 'off'}|null} the decision.
   */
  function expire() {
    if (!active) return null;
    if (now() - lastSeenAt < holdMs) return null;
    active = false;
    wake = '';
    lastDigest = '';
    return { kind: 'off' };
  }

  return {
    observe,
    settle,
    expire,
    isActive: () => active,
    /** How long the component should wait before asking for a content reply. */
    debounceMs,
    /** How long a quiet conversation mode survives. */
    holdMs,
    wakeWord: () => wake,
  };
}
