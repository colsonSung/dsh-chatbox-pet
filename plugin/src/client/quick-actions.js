/**
 * The quick-actions catalogue: one entry per shortcut the "更多" button offers.
 *
 * Every entry is data, not code: an id, an icon key, the two labels and the two
 * prompt templates. Adding a shortcut later means adding one object here (or
 * one row in the patch config, once that lands), never touching the component.
 *
 * Clicking an entry only writes the template into the composer — the shortcut
 * never sends a message on the reader's behalf.
 */

/**
 * @typedef {object} QuickAction
 * @property {string} id - stable key, also used as the DOM marker.
 * @property {'mic'|'image'|'pen'|'video'|'film'|'music'|'slides'} icon - glyph key.
 * @property {string} zh - Chinese label.
 * @property {string} en - English label.
 * @property {{zh: string, en: string}} prompt - what clicking it writes.
 */

/** @type {QuickAction[]} */
export const QUICK_ACTIONS = [
  {
    id: 'transcribe',
    icon: 'mic',
    zh: '录音转写',
    en: 'Transcribe',
    prompt: { zh: '帮我转写这段录音，并按要点整理成清单。', en: 'Transcribe this recording and turn it into a list of key points.' },
  },
  {
    id: 'image',
    icon: 'image',
    zh: '图像生成',
    en: 'Image',
    prompt: { zh: '帮我生成一张图：', en: 'Generate an image of ' },
  },
  {
    id: 'writing',
    icon: 'pen',
    zh: '帮我写作',
    en: 'Writing',
    prompt: { zh: '帮我写一段文字，主题是：', en: 'Write a short piece about ' },
  },
  {
    id: 'video',
    icon: 'video',
    zh: '视频生成',
    en: 'Video',
    prompt: { zh: '帮我生成一个短视频，内容是：', en: 'Generate a short video about ' },
  },
  {
    id: 'read-video',
    icon: 'film',
    zh: '视频理解',
    en: 'Read video',
    prompt: {
      zh: '用 video_read 看这个视频，总结它讲了什么、有谁在说话。',
      en: 'Use video_read on this video: summarise what it says and who speaks.',
    },
  },
  {
    id: 'music',
    icon: 'music',
    zh: '音乐生成',
    en: 'Music',
    prompt: { zh: '帮我生成一段音乐，风格是：', en: 'Generate a short piece of music in the style of ' },
  },
  {
    id: 'slides',
    icon: 'slides',
    zh: 'PPT 生成',
    en: 'Slides',
    prompt: { zh: '帮我做一份 PPT，主题是：', en: 'Build me a slide deck about ' },
  },
];

/**
 * Pick the localized half of a translation pair.
 * @param {{zh: string, en: string}} pair - the pair.
 * @param {'zh'|'en'} locale - active locale.
 * @returns {string} the text for that locale.
 */
export function pick(pair, locale) {
  return locale === 'en' ? pair.en : pair.zh;
}
