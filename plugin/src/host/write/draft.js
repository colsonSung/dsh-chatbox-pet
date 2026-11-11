/**
 * The "帮我写作" shortcut: one structured draft, written by the Host's model.
 *
 * The result goes into the composer, never straight into a send — the reader
 * edits the tone and the facts before anyone else sees it.
 */
import { aiError, complete } from '../llm.js';

/** The genres the panel offers. Keep in sync with src/client/quick-actions.js. */
export const GENRES = ['email', 'update', 'prd', 'copy'];

const SYSTEM = {
  zh: [
    '你是一位中文写作很好的产品负责人，写东西直接、具体，不用套话和形容词堆砌。',
    '输出可直接使用的正文，不要解释你做了什么，不要用 markdown 标题。',
  ].join('\n'),
  en: [
    'You are a product lead who writes plainly and concretely, without filler.',
    'Output the text itself — no explanation, no markdown headings.',
  ].join('\n'),
};

/**
 * Per-genre structure the model should follow.
 * @param {string} genre - one of GENRES.
 * @param {'zh'|'en'} locale - output language.
 * @returns {string} the instruction line.
 */
function guidance(genre, locale) {
  const zh = locale === 'zh';
  const zhMap = {
    email: '写一封商务邮件：称呼、来意、2-3 句事实或数据、明确的下一步与时间、署名占位。全文 200 字以内。',
    update: '写一段工作进展更新：先说结论和结果数字，再说风险与下一步，3-5 句。',
    prd: '写一小节 PRD 摘要：背景与问题、目标与非目标、关键流程、边界条件。用小标题分点，可直接贴进文档。',
    copy: '写一段产品文案：一句主张、两句支撑、一个行动号召。不要感叹号。',
  };
  const enMap = {
    email: 'Write a business email: greeting, purpose, 2-3 facts or numbers, a clear next step with a date, sign-off placeholder. Under 150 words.',
    update: 'Write a status update: lead with the result and its number, then risks and next step, 3-5 sentences.',
    prd: 'Write a short PRD summary section: problem, goals and non-goals, key flow, edge cases. Use sub-headings.',
    copy: 'Write short product copy: one claim, two supports, one call to action. No exclamation marks.',
  };
  return (zh ? zhMap : enMap)[genre] ?? (zh ? zhMap.update : enMap.update);
}

/**
 * Draft one piece of text.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.genre - one of GENRES.
 * @param {string} input.topic - what to write about.
 * @param {string} [input.tone] - free-form tone hint.
 * @param {string} [input.points] - facts that must appear.
 * @param {'zh'|'en'} [input.locale] - output language.
 * @param {string} [input.sessionId] - Session id.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<{text: string, genre: string}>} the draft.
 */
export async function draftText({ llm, provider, model, genre, topic, tone, points, locale = 'zh', sessionId, signal }) {
  const clean = typeof topic === 'string' ? topic.trim() : '';
  if (clean === '') throw aiError('先写一句主题，例如「Q2 欧洲本地支付方式上线」');
  const zh = locale === 'zh';
  const picked = GENRES.includes(genre) ? genre : 'update';
  const brief = [
    zh ? `主题：${clean}` : `Topic: ${clean}`,
    tone ? (zh ? `语气：${tone}` : `Tone: ${tone}`) : '',
    points ? (zh ? `必须包含的事实：${points}` : `Must include: ${points}`) : '',
    guidance(picked, locale),
  ]
    .filter((line) => line !== '')
    .join('\n');

  const text = await complete({
    llm,
    provider,
    model,
    system: zh ? SYSTEM.zh : SYSTEM.en,
    user: brief,
    maxTokens: 1200,
    sessionId,
    signal,
  });
  const clean2 = text.replace(/^\s*\n+/, '').trim();
  if (clean2 === '') throw aiError('AI 没有返回可用的文字，请重试');
  return { text: clean2, genre: picked };
}
