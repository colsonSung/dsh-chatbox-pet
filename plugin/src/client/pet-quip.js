/**
 * The pet's small talk, on the page side.
 *
 * The wording lives on the Host (it reads the reader's stores); the page only
 * decides what the pet does while saying it: which clip plays, which sound
 * pops, and how long the bubble stays. That split keeps the judgement (which
 * snippet, which phrasing) on the side that can read the stores, and keeps the
 * reaction on the side that owns the video element.
 */
/** The kinds of line the pet can bring up (must match the Host's list). */
export const QUIP_KINDS = ['topic', 'reminder', 'recall', 'nudge', 'encourage', 'tease', 'chitchat'];

/** The clip and sound each kind uses while it talks. */
export const QUIP_REACTION = {
  topic: { clip: 'idle-look', sound: 'thinking' },
  reminder: { clip: 'act-typing', sound: 'notify' },
  recall: { clip: 'act-reading', sound: 'thinking' },
  nudge: { clip: 'click-surprise', sound: 'notify' },
  encourage: { clip: 'click-cheer', sound: 'cheer' },
  tease: { clip: 'act-shy', sound: 'pout' },
  chitchat: { clip: 'click-wave', sound: 'click' },
};

/** How long a small-talk bubble stays up: longer than a reply, it is content. */
export const QUIP_BUBBLE_MS = 9000;

/** How long the pet must be idle before it may bring something up itself. */
export const QUIP_AFTER_MS = 240_000;

/** The chance an eligible idle tick brings up something from the stores. */
export const QUIP_CHANCE = 0.05;

/**
 * Should the pet bring something up on its own, right now?
 *
 * The pet must stay quiet most of the time: it only speaks unprompted after a
 * long silence, and then only rarely. Kept as a pure function so the rule can
 * be tested instead of being a coin flip nobody can verify.
 * @param {object} input - the situation.
 * @param {number} input.idleForMs - how long the pet has been idle.
 * @param {number} [input.chance] - the probability, 0–1.
 * @param {() => number} [input.random] - the randomness, injectable.
 * @returns {boolean} true when the pet should speak up.
 */
export function shouldBringUp(input = {}) {
  const idleFor = Number.isFinite(input.idleForMs) ? input.idleForMs : 0;
  if (idleFor < QUIP_AFTER_MS) return false;
  const chance = Number.isFinite(input.chance) ? input.chance : QUIP_CHANCE;
  const random = typeof input.random === 'function' ? input.random : Math.random;
  return random() < chance;
}

/**
 * The label of one kind, in the reader's language.
 * @param {string} kind - the kind.
 * @param {'zh'|'en'} locale - the language.
 * @returns {string} the label.
 */
export function kindLabel(kind, locale) {
  const language = locale === 'en' ? 'en' : 'zh';
  const labels = {
    topic: { zh: '话题', en: 'Topic' },
    reminder: { zh: '提醒', en: 'Reminder' },
    recall: { zh: '回忆', en: 'Recall' },
    nudge: { zh: '催促', en: 'Nudge' },
    encourage: { zh: '鼓励', en: 'Cheer' },
    tease: { zh: '调侃', en: 'Tease' },
    chitchat: { zh: '聊闲', en: 'Chat' },
  };
  return labels[kind]?.[language] ?? '';
}

/**
 * The reaction for one kind, with a safe default.
 * @param {string} kind - the kind.
 * @returns {{clip: string, sound: string}} the reaction.
 */
export function reactionFor(kind) {
  return QUIP_REACTION[kind] ?? QUIP_REACTION.chitchat;
}

/**
 * Ask the Host for one line.
 *
 * The Host never throws into the page: a failed request resolves to null, and
 * the caller simply says nothing. A companion that stutters is worse than one
 * that is quiet.
 * @param {object} [options] - the request.
 * @param {string} [options.kind] - a specific kind, or none for the Host's choice.
 * @param {'zh'|'en'} [options.locale] - the language.
 * @param {typeof fetch} [options.fetch] - an injectable fetch.
 * @returns {Promise<null|{kind: string, text: string, source: null|{id: string, label: string}, sources: Array<object>}>} the quip.
 */
export async function fetchQuip(options = {}) {
  const doFetch = typeof options.fetch === 'function' ? options.fetch : (...args) => globalThis.fetch(...args);
  try {
    const response = await doFetch('/api/chatbox-pet/quip', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        kind: typeof options.kind === 'string' ? options.kind : undefined,
        locale: options.locale === 'en' ? 'en' : 'zh',
      }),
    });
    if (!response.ok) return null;
    const body = await response.json();
    if (body?.ok !== true) return null;
    const result = body.result;
    if (typeof result?.text !== 'string' || result.text.trim() === '') return null;
    return {
      kind: QUIP_KINDS.includes(result.kind) ? result.kind : 'chitchat',
      text: result.text.trim(),
      quote: typeof result?.quote === 'string' ? result.quote : '',
      item: typeof result?.item === 'string' ? result.item : '',
      source: typeof result?.source?.label === 'string' ? result.source : null,
      sources: Array.isArray(result?.sources) ? result.sources : [],
    };
  } catch {
    return null;
  }
}
