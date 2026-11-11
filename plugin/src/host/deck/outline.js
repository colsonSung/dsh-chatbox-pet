/**
 * Turn one sentence into a deck outline.
 *
 * The model writes the thinking (what to say, in what order); render.py owns
 * the layout. The contract between them is a small JSON object, validated here
 * so a chatty answer can never reach the renderer half-shaped.
 */
import { aiError, complete, parseJsonAnswer } from '../llm.js';

const SYSTEM_ZH = [
  '你是一位给管理层做汇报的资深产品负责人，擅长把一件事讲成结构清晰的短汇报。',
  '只输出 JSON，不要解释、不要 markdown 代码块以外的任何文字。',
].join('\n');

const SYSTEM_EN = [
  'You are a senior product lead who reports to executives and turns one topic into a tight, structured briefing.',
  'Output JSON only — no prose, no commentary outside the JSON.',
].join('\n');

/**
 * The JSON contract the renderer expects, spelled out for the model.
 * @param {number} sections - how many sections to aim for.
 * @param {'zh'|'en'} locale - output language.
 * @returns {string} the instruction block.
 */
function contract(sections, locale) {
  const zh = locale === 'zh';
  const shape = {
    title: zh ? '主标题，12-18 个字，一句话说清主题，不要用冒号堆砌' : 'deck title, 8-14 words, one idea, no colon-chains',
    subtitle: zh ? '副标题，写清受众与时间范围，不超过 30 个字' : 'subtitle with audience and period, at most 80 characters',
    footer: zh ? '页脚，例如：Onerway · 2026 年 4 月' : 'footer, e.g. "Onerway · April 2026"',
    sections: Array.from({ length: sections }, () => ({
      heading: zh ? '小节标题，不超过 14 个字' : 'section heading, at most 40 characters',
      summary: zh ? '一句话概括，不超过 20 个字' : 'one-line summary, at most 60 characters',
      bullets: zh ? ['要点，不超过 42 个字', '第二条要点', '第三条要点'] : ['point, at most 100 characters', 'second point', 'third point'],
      notes: zh ? '演讲者备注，1-2 句' : 'speaker notes, 1-2 sentences',
    })),
  };
  return [
    zh ? '输出下面这个结构的 JSON：' : 'Output JSON with exactly this structure:',
    JSON.stringify(shape, null, 2),
    zh
      ? `要求：sections 恰好 ${sections} 个；每个 section 2-4 条 bullets；每条 bullet 是一个完整判断或数据，不要空话；数字、专有名词保留原样。`
      : `Exactly ${sections} sections; 2-4 bullets each; every bullet is a concrete claim or number, never filler.`,
  ].join('\n\n');
}

/**
 * Normalise one string field.
 * @param {any} value - raw value.
 * @param {number} limit - max characters.
 * @param {string} fallback - value when unusable.
 * @returns {string} the trimmed string.
 */
function text(value, limit, fallback = '') {
  const raw = typeof value === 'string' ? value.trim() : '';
  const picked = raw === '' ? fallback : raw;
  return picked.slice(0, limit);
}

/**
 * Validate and repair what the model returned.
 * @param {any} raw - parsed JSON.
 * @param {'zh'|'en'} locale - output language.
 * @returns {object} the outline the renderer accepts.
 * @throws {Error} when there is nothing usable.
 */
export function normalizeOutline(raw, locale = 'zh') {
  const source = raw !== null && typeof raw === 'object' ? raw : {};
  const sections = [];
  for (const section of Array.isArray(source.sections) ? source.sections : []) {
    if (section === null || typeof section !== 'object') continue;
    const heading = text(section.heading, 40);
    if (heading === '') continue;
    const bullets = (Array.isArray(section.bullets) ? section.bullets : [])
      .map((bullet) => text(bullet, locale === 'zh' ? 60 : 140))
      .filter((bullet) => bullet !== '')
      .slice(0, 4);
    if (bullets.length === 0) continue;
    sections.push({
      heading,
      summary: text(section.summary, locale === 'zh' ? 28 : 80),
      bullets,
      notes: text(section.notes, 400),
    });
    if (sections.length >= 6) break;
  }
  if (sections.length === 0) throw aiError('AI 没有给出可用的大纲，请重试');
  return {
    title: text(source.title, locale === 'zh' ? 24 : 80, locale === 'zh' ? '未命名' : 'Untitled'),
    subtitle: text(source.subtitle, locale === 'zh' ? 40 : 120),
    footer: text(source.footer, 80),
    sections,
  };
}

/**
 * Ask the model for a deck outline.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.topic - one sentence describing the deck.
 * @param {string} [input.audience] - who the deck is for.
 * @param {number} [input.sections] - desired section count (2-6).
 * @param {string} [input.points] - extra constraints, already written by the user.
 * @param {'zh'|'en'} [input.locale] - output language.
 * @param {string} [input.sessionId] - Session id for providers that route by it.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<object>} the normalised outline.
 */
export async function draftOutline({ llm, provider, model, topic, audience, sections = 3, points, locale = 'zh', sessionId, signal }) {
  const count = Math.min(6, Math.max(2, Number.isFinite(sections) ? Math.round(sections) : 3));
  const zh = locale === 'zh';
  const brief = [
    zh ? `主题：${topic}` : `Topic: ${topic}`,
    audience ? (zh ? `受众：${audience}` : `Audience: ${audience}`) : '',
    points ? (zh ? `必须覆盖的内容：${points}` : `Must cover: ${points}`) : '',
    zh ? `请按 ${count} 个小节组织。` : `Organise it into ${count} sections.`,
  ]
    .filter((line) => line !== '')
    .join('\n');

  const raw = await complete({
    llm,
    provider,
    model,
    system: zh ? SYSTEM_ZH : SYSTEM_EN,
    user: `${brief}\n\n${contract(count, locale)}`,
    maxTokens: 2200,
    sessionId,
    signal,
  });

  let parsed;
  try {
    parsed = parseJsonAnswer(raw);
  } catch {
    // One retry with the strictest possible instruction: models sometimes
    // prepend "好的，这是大纲：".
    const retry = await complete({
      llm,
      provider,
      model,
      system: zh ? '只输出 JSON 对象本身，第一个字符必须是 {，最后一个必须是 }。' : 'Output the JSON object only. First character {, last character }.',
      user: `${brief}\n\n${contract(count, locale)}`,
      maxTokens: 2200,
      sessionId,
      signal,
    });
    parsed = parseJsonAnswer(retry);
  }
  return normalizeOutline(parsed, locale);
}
