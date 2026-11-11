/**
 * The eight text assistants on the translate page.
 *
 * Two kinds of work, two engines:
 *
 *   rewrite  polishing, expanding, de-duplicating, drafting. Quality depends on
 *            following an instruction, not on world knowledge, and the local
 *            hy-mt2 model does it in ~5 s. Used first.
 *   analyze  grammar checking, key points, reading help, word encyclopaedia.
 *            These need judgement and structure, so the Host model does them.
 *
 * Every task answers one string. The page renders it as a result card.
 */
import { aiError, complete } from '../llm.js';
import { chat, localSettings } from '../translate/local.js';

/** The task catalogue, in the order the page shows the chips. */
export const ASSIST_TASKS = {
  polish: {
    id: 'polish',
    zh: '句子润色',
    en: 'Polish',
    kind: 'rewrite',
    maxTokens: 700,
    system: '你是资深英文编辑。把用户给的句子改得更自然、更地道、更准确。只输出改写后的句子，不要解释，不要引号。',
  },
  grammar: {
    id: 'grammar',
    zh: '语法纠错',
    en: 'Grammar',
    kind: 'analyze',
    maxTokens: 900,
    system: [
      '你是英文语法检查器。检查用户给的文本，逐条列出错误。',
      '每条一行，格式：原文片段 → 修改 → 一句话原因。',
      '没有错误就只输出 OK。不要复述全文，不要客套。',
    ].join('\n'),
  },
  wiki: {
    id: 'wiki',
    zh: '单词百科',
    en: 'Word wiki',
    kind: 'analyze',
    maxTokens: 1000,
    system: [
      '你是英汉词典编辑，面向中文读者。用户会给一个词或短语。',
      '按下面结构输出纯文本（不要 markdown 标题符号）：',
      '释义：中文解释，一词多义用；分隔',
      '词形：常见变化形式，没有就写 无',
      '搭配：2-4 个常见搭配，格式 英文 = 中文',
      '辨析：与近义词的区别，一句话',
      '例句：2 句英文例句，每行一句',
    ].join('\n'),
  },
  dedupe: {
    id: 'dedupe',
    zh: '论文去重',
    en: 'De-duplicate',
    kind: 'rewrite',
    maxTokens: 900,
    system: [
      '你是学术写作编辑。把用户给的段落改写，降低与原文的字面重复率，同时保持原意、术语和事实不变。',
      '只输出改写后的段落，不要解释，不要列出改动。',
    ].join('\n'),
  },
  write: {
    id: 'write',
    zh: '帮我写作',
    en: 'Write',
    kind: 'rewrite',
    maxTokens: 1200,
    system: [
      '你是写作助手。用户给出主题或要点，写一段完整、可直接使用的内容。',
      '语言与用户输入一致；不要标题、不要解释写作思路，直接给正文。',
    ].join('\n'),
  },
  reading: {
    id: 'reading',
    zh: '阅读助手',
    en: 'Reading help',
    kind: 'analyze',
    maxTokens: 1000,
    system: [
      '你是阅读助手。用户给一段英文。用中文解释这段在说什么：',
      '先用一句话概括，再拆解难句（每句：难点 + 中文意思），最后列出 2-3 个关键词及释义。',
      '不要逐句翻译全文。',
    ].join('\n'),
  },
  summarize: {
    id: 'summarize',
    zh: '重点提炼',
    en: 'Key points',
    kind: 'analyze',
    maxTokens: 900,
    system: [
      '你是信息提炼助手。用中文输出这段内容的重点：',
      '3-6 条要点，每条一行、以「- 」开头；只保留事实与结论，不要评价。',
    ].join('\n'),
  },
  expand: {
    id: 'expand',
    zh: '内容扩写',
    en: 'Expand',
    kind: 'rewrite',
    maxTokens: 1200,
    system: [
      '你是写作助手。把用户给的短文本扩写成更完整的一段：补充必要的细节、过渡和例子，但不要编造具体数据或事实。',
      '语言与输入一致。只输出扩写后的文本。',
    ].join('\n'),
  },
};

/** Task ids, for validation. */
export const TASK_IDS = Object.keys(ASSIST_TASKS);

/** Rewrite tasks are cheap enough for the local model; analysis is not. */
function isRewrite(task) {
  return task.kind === 'rewrite';
}

/**
 * Run one assistant task.
 * @param {object} input - the request.
 * @param {any} input.llm - the Host llm service.
 * @param {string} input.provider - resolved provider id.
 * @param {string} input.model - resolved model id.
 * @param {string} input.task - one of TASK_IDS.
 * @param {string} input.text - the text to work on.
 * @param {object} [input.config] - plugin row config (local engine settings).
 * @param {string} [input.sessionId] - Session id.
 * @param {AbortSignal} [input.signal] - cancellation.
 * @returns {Promise<{text: string, task: string, engine: string, ms: number}>} the answer.
 */
export async function assist({ llm, provider, model, task, text, config, sessionId, signal }) {
  const definition = ASSIST_TASKS[task];
  if (definition === undefined) throw aiError('未知的助手任务：' + String(task));
  const value = typeof text === 'string' ? text.trim() : '';
  if (value === '') throw aiError('先在输入框里写点内容');
  if (value.length > 6000) throw aiError('一次最多处理 6000 个字符，请分段');

  const user = task === 'wiki' ? `词条：${value}` : value;

  // Rewriting is an instruction-following job the local model handles in seconds.
  if (isRewrite(definition)) {
    const settings = localSettings(config);
    if (settings.enabled) {
      const started = Date.now();
      try {
        const answer = await chat({
          baseUrl: settings.baseUrl,
          model: settings.model,
          messages: [
            { role: 'system', content: definition.system },
            { role: 'user', content: user },
          ],
          maxTokens: definition.maxTokens,
          signal,
        });
        const cleaned = String(answer ?? '').trim();
        if (cleaned !== '') return { text: cleaned, task, engine: 'local', ms: Date.now() - started };
      } catch {
        // fall through to the Host model
      }
    }
  }

  const started = Date.now();
  const answer = await complete({
    llm,
    provider,
    model,
    system: definition.system,
    user,
    maxTokens: definition.maxTokens,
    sessionId,
    signal,
  });
  const cleaned = String(answer ?? '').trim();
  if (cleaned === '') throw aiError('模型没有返回内容，请重试');
  return { text: cleaned, task, engine: 'host', ms: Date.now() - started };
}
