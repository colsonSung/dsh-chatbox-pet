/**
 * The pet's context menu catalogue.
 *
 * Right-clicking the pet is the direct-manipulation escape hatch: say exactly
 * this line, or play exactly this clip. The catalogue is data, so the labels
 * and the clip names can be checked against the pack whitelist in a unit test
 * instead of being discovered as a 404 at runtime.
 */

/**
 * The actions the menu offers, in the order the chips render. The resting
 * clips (`idle-breathe`, `idle-breathe-loop`) are deliberately absent: they are
 * the pet's default state, not something to trigger.
 */
export const MENU_ACTIONS = [
  { clip: 'click-wave', zh: '挥手', en: 'Wave' },
  { clip: 'click-cheer', zh: '欢呼', en: 'Cheer' },
  { clip: 'click-surprise', zh: '惊讶', en: 'Surprise' },
  { clip: 'click-angry', zh: '生气', en: 'Angry' },
  { clip: 'act-shy', zh: '害羞', en: 'Shy' },
  { clip: 'act-spin', zh: '转圈', en: 'Spin' },
  { clip: 'act-stretch', zh: '伸懒腰', en: 'Stretch' },
  { clip: 'act-reading', zh: '读代码', en: 'Read' },
  { clip: 'act-typing', zh: '打字', en: 'Type' },
  { clip: 'act-fishing', zh: '钓鱼', en: 'Fish' },
  { clip: 'act-snore', zh: '打盹', en: 'Doze' },
  { clip: 'act-charge', zh: '蓄力', en: 'Charge' },
  { clip: 'act-thunderbolt', zh: '放电', en: 'Zap' },
  { clip: 'idle-look', zh: '张望', en: 'Look' },
  { clip: 'idle-march', zh: '踏步', en: 'March' },
  { clip: 'act-harley', zh: '骑哈雷', en: 'Ride' },
  { clip: 'act-beach', zh: '海边', en: 'Beach' },
];

/** The longest line the reader may put in the pet's mouth. */
export const SAY_LIMIT = 60;

/**
 * The label of one action in the active language.
 * @param {{zh: string, en: string}} action - the catalogue entry.
 * @param {'zh'|'en'} locale - the language.
 * @returns {string} the label.
 */
export function actionLabel(action, locale) {
  const language = locale === 'en' ? 'en' : 'zh';
  return typeof action?.[language] === 'string' ? action[language] : '';
}

/**
 * Clean the text the reader wants the pet to say.
 *
 * The bubble is one line: collapse whitespace, drop control characters, and cap
 * the length by code points so an emoji is never cut in half. An empty result
 * means "nothing to say" and the caller must not show a bubble.
 * @param {string} raw - what the reader typed.
 * @returns {string} the line to show.
 */
export function sanitizeSay(raw) {
  const text = String(raw ?? '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text === '') return '';
  const characters = Array.from(text);
  return characters.length <= SAY_LIMIT ? text : characters.slice(0, SAY_LIMIT).join('');
}

/**
 * Where the menu should sit, in viewport coordinates.
 *
 * The menu opens up-left of the pet (the composer is at the bottom of the
 * window, so above is the roomy direction), then gets clamped into the
 * viewport so it can never render half outside it.
 * @param {{left: number, right: number, top: number, bottom: number}} anchor - the pet's rect.
 * @param {{width: number, height: number}} size - the menu's size.
 * @param {{width: number, height: number}} viewport - the window size.
 * @param {number} [gap] - the distance from the pet.
 * @returns {{left: number, top: number}} the position.
 */
export function placeMenu(anchor, size, viewport, gap = 8) {
  const margin = 8;
  const width = Number.isFinite(size?.width) ? size.width : 0;
  const height = Number.isFinite(size?.height) ? size.height : 0;
  const viewWidth = Number.isFinite(viewport?.width) ? viewport.width : 0;
  const viewHeight = Number.isFinite(viewport?.height) ? viewport.height : 0;

  // Prefer the pet's right edge; fall back to the left edge if that would
  // push the menu off the right side.
  let left = (Number.isFinite(anchor?.right) ? anchor.right : 0) - width;
  if (left < margin) left = Number.isFinite(anchor?.left) ? anchor.left : margin;

  // Above the pet, then clamped.
  let top = (Number.isFinite(anchor?.top) ? anchor.top : 0) - height - gap;
  if (top < margin) top = (Number.isFinite(anchor?.bottom) ? anchor.bottom : 0) + gap;

  const maxLeft = Math.max(margin, viewWidth - width - margin);
  const maxTop = Math.max(margin, viewHeight - height - margin);
  return {
    left: Math.min(Math.max(left, margin), maxLeft),
    top: Math.min(Math.max(top, margin), maxTop),
  };
}
