/**
 * The prompts the rewriter is asked with.
 *
 * The contract with the model is deliberately narrow: one prompt out, no
 * commentary in it, and no invented facts. Everything the model is allowed to
 * use arrives in the user message — the draft, the personal context the
 * collectors found, and nothing else.
 */

/** Label shown for each collector in the context block. */
const SOURCE_TITLES = {
  memory: '长期记忆',
  minutes: '听记',
  reader: '读书笔记',
  moments: '瞬间',
};

/**
 * The system prompt for one mode.
 * @param {'improve'|'compose'} mode - the mode.
 * @param {'zh'|'en'} locale - the output language.
 * @returns {string} the system prompt.
 */
export function buildSystemPrompt(mode, locale) {
  if (locale === 'en') return mode === 'compose' ? COMPOSE_SYSTEM_EN : IMPROVE_SYSTEM_EN;
  return mode === 'compose' ? COMPOSE_SYSTEM_ZH : IMPROVE_SYSTEM_ZH;
}

const IMPROVE_SYSTEM_ZH = [
  '你是 Ethan 的提示词编辑器。把用户的草稿改写成一条可以直接发给 AI 助手的提示词。',
  '',
  '规则：',
  '1. 保留原意、范围与语气，不新增用户没有要的需求。',
  '2. 按需补齐让回答真正可执行的信息：目标与产出物、必要的背景、约束（范围 / 格式 / 长度 / 语言 / 时间）、验收标准。',
  '3. 不要编造事实、数据或引用。确实缺少的信息最多列 3 条「待确认：」，放在提示词末尾；能合理默认的不要问。',
  '4. 提供的个人上下文只在和草稿直接相关时使用；不相关的一律忽略，也不要在提示词里提「根据记忆 / 笔记」。',
  '5. 只输出提示词正文：不要解释、不要前言后语、不要代码围栏、不要标题、不要整体加引号。',
  '6. 中文草稿输出中文，英文草稿输出英文。',
  '7. 长度：草稿不足 200 字时写到 120–320 字；长草稿保持相近长度并删掉冗余。',
].join('\n');

const IMPROVE_SYSTEM_EN = [
  'You edit prompts for an AI assistant. Rewrite the draft into a prompt that can be sent as-is.',
  '',
  'Rules:',
  '1. Keep the intent, scope and tone; add no requirement the user did not ask for.',
  '2. Add only what makes the answer executable: goal and deliverable, necessary background, constraints (scope / format / length / language / time), acceptance criteria.',
  '3. Never invent facts, numbers or citations. Put at most 3 "To confirm:" items at the end when information is genuinely missing; do not ask for what can be defaulted.',
  '4. Use the personal context only where it is directly relevant; ignore the rest and never mention "according to my memory / notes".',
  '5. Output only the prompt body: no explanation, no preamble, no code fences, no headings, no surrounding quotes.',
  '6. Reply in the language of the draft.',
  '7. Length: for drafts under 200 words, produce 120–320 words; for longer drafts keep a similar length and remove redundancy.',
].join('\n');

const COMPOSE_SYSTEM_ZH = [
  '你是 Ethan 的提示词编辑器。输入框现在是空的：请从给出的个人上下文里挑一个最值得现在推进的主题，起草一条他可以直接发送的提示词。',
  '',
  '规则：',
  '1. 主题必须来自上下文，不要发明项目或事实；线索冲突时选最近的那条。',
  '2. 写给 AI 助手，具体可执行：写清目标与产出物、做这件事需要的上下文、约束、验收标准。',
  '3. 只输出提示词正文：不要解释、不要代码围栏、不要标题。',
  '4. 80–200 字；如果上下文里没有任何值得推进的主题，只输出 NO_CONTEXT。',
].join('\n');

const COMPOSE_SYSTEM_EN = [
  'You edit prompts for an AI assistant. The composer is empty: pick the one topic from the personal context most worth advancing now and draft a prompt that can be sent as-is.',
  '',
  'Rules:',
  '1. The topic must come from the context; invent no project or fact. When items conflict, take the most recent one.',
  '2. Write for an AI assistant and be executable: goal and deliverable, the context needed to do it, constraints, acceptance criteria.',
  '3. Output only the prompt body: no explanation, no code fences, no headings.',
  '4. 60–160 words; if nothing in the context is worth advancing, output only NO_CONTEXT.',
].join('\n');

/**
 * Format one collector's items as a bullet list.
 * @param {object} source - the collector result.
 * @returns {string} the block, or ''.
 */
function block(source) {
  if (!Array.isArray(source?.items) || source.items.length === 0) return '';
  const title = SOURCE_TITLES[source.id] ?? source.label ?? source.id;
  const lines = source.items.map((item) => `- ${item.text}`);
  return `【${title}】\n${lines.join('\n')}`;
}

/**
 * The user message of one rewrite.
 *
 * The order is the order the model should read it in: the draft first (or the
 * absence of one), then the context, then the recent-conversation hint last so
 * it cannot be mistaken for the deliverable.
 * @param {object} request - the prepared request.
 * @returns {string} the user message.
 */
export function buildUserPrompt(request) {
  const lines = [];
  lines.push('草稿：');
  lines.push(request.draft === '' ? '（空）' : request.draft);
  lines.push('');

  const contextBlocks = (request.context?.sources ?? []).map(block).filter((value) => value !== '');
  if (contextBlocks.length > 0) {
    lines.push('个人上下文：');
    lines.push(contextBlocks.join('\n\n'));
  } else {
    lines.push('个人上下文：（没有检索到相关内容）');
  }

  const hint = typeof request.contextHint === 'string' ? request.contextHint.trim() : '';
  if (hint !== '') {
    lines.push('');
    lines.push('最近一轮对话（只用来理解意图，不要复述）：');
    lines.push(hint.slice(0, 400));
  }

  lines.push('');
  lines.push(
    request.mode === 'compose'
      ? '请输出一条可以直接发送的提示词。'
      : '请输出改写后的提示词。',
  );
  return lines.join('\n');
}
