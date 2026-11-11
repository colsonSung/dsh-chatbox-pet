/**
 * The one place this bundle talks to the Host's model.
 *
 * Both features that need text generation (prompt boost, deck outline, writing)
 * go through here, so the reasoning-effort guard, the provider/model
 * normalisation and the failure wording exist once.
 */
import { serviceOf } from './service.js';

/** Chinese, user-facing message for a failed call. */
const FAILED = 'AI 生成失败，请重试';
const NO_MODEL = '宿主未配置可用模型，这个功能暂时不可用';

/**
 * Build an error with a Chinese, user-facing message.
 * @param {string} message - the Chinese message.
 * @param {any} [cause] - the underlying failure, kept for diagnosis only.
 * @returns {Error} the error to throw.
 */
export function aiError(message, cause) {
  const error = new Error(message);
  error.code = 'chatbox-pet/ai-failed';
  if (cause !== undefined) error.cause = cause;
  return error;
}

/**
 * Resolve which provider/model a feature call should use.
 *
 * A row may pin a model in the plugin config; otherwise the reader's default
 * selection wins. Both ids are strings in the Host's ModelSelection — passing
 * undefined here is what makes the adapter answer "no adapter registered for
 * provider \"undefined\"".
 * @param {any} ctx - the Host plugin context.
 * @param {object} [config] - the plugin row config.
 * @returns {{provider: string, model: string}} the resolved ids.
 * @throws {Error} when no model is configured.
 */
export function resolveModel(ctx, config) {
  const pinned = config !== null && typeof config === 'object' && config.llm !== null && typeof config.llm === 'object' ? config.llm : {};
  let selection;
  try {
    selection = serviceOf(ctx, 'agentDefaultModel')?.currentSelection?.() ?? null;
  } catch {
    selection = null;
  }
  const provider = text(pinned.provider) || text(selection?.provider);
  const model = text(pinned.model) || text(selection?.model);
  if (provider === '' || model === '') throw aiError(NO_MODEL);
  return { provider, model };
}

/**
 * Read a non-empty string.
 * @param {any} value - the raw value.
 * @returns {string} the trimmed string, or ''.
 */
function text(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * Read the Host LLM service, or throw the reader-facing message.
 * @param {any} ctx - the Host plugin context.
 * @returns {any} the llm service.
 */
export function requireLlm(ctx) {
  const llm = serviceOf(ctx, 'llm');
  if (!llm || typeof llm.prepareCall !== 'function') throw aiError(NO_MODEL);
  return llm;
}

/**
 * Ask the model for one completion.
 *
 * A reasoning model left on its default effort can spend the whole token budget
 * thinking and return no text (measured 2026-11-07), so the lowest effort the
 * model actually offers is requested when the picker exposes reasoning metadata.
 * @param {object} options - the call parameters.
 * @param {any} options.llm - the Host llm service.
 * @param {string} [options.provider] - provider id.
 * @param {string} [options.model] - model id.
 * @param {string} options.system - system prompt.
 * @param {string} options.user - user prompt.
 * @param {number} [options.temperature] - omitted when not a number.
 * @param {number} [options.maxTokens] - output budget.
 * @param {AbortSignal} [options.signal] - cancellation.
 * @param {Function} [options.onDelta] - streaming callback.
 * @param {string} [options.sessionId] - Session id for providers that route by it.
 * @returns {Promise<string>} the model's answer.
 */
export async function complete({ llm, provider, model, system, user, temperature, maxTokens, signal, onDelta, sessionId }) {
  const asked = { provider, model, maxTokens };
  if (Number.isFinite(temperature)) asked.temperature = temperature;
  if (typeof sessionId === 'string' && sessionId !== '') asked.sessionId = sessionId;
  const preferLow = (controls, info) => {
    const efforts = Array.isArray(info?.reasoning?.efforts) ? info.reasoning.efforts.map((effort) => effort?.id) : [];
    const pick = ['off', 'minimal', 'low', 'medium', 'high', 'max'].find((id) => efforts.includes(id));
    return pick === undefined ? controls : { ...controls, reasoningEffort: pick };
  };
  const prepared = await llm.prepareCall(asked, signal, preferLow);
  const config = prepared?.config ?? asked;
  const request = {
    ...config,
    messages: [{ role: 'user', content: [{ type: 'text', text: user }] }],
    system,
    signal,
  };
  const stream = prepared.stream(request);
  let answer = '';
  let failure;
  for await (const chunk of stream) {
    if (chunk === null || typeof chunk !== 'object') continue;
    if (chunk.type === 'text-delta' && typeof chunk.text === 'string') {
      answer += chunk.text;
      if (typeof onDelta === 'function') onDelta(chunk.text);
      continue;
    }
    if (chunk.type === 'finish') {
      const reason = chunk.reason;
      if (reason !== null && typeof reason === 'object' && (reason.kind === 'error' || reason.kind === 'aborted')) {
        failure = reason;
      }
    }
  }
  if (failure !== undefined) throw aiError(FAILED, new Error(JSON.stringify(failure).slice(0, 400)));
  return answer.trim();
}

/**
 * Parse JSON the model returned, tolerating fences and a leading sentence.
 * @param {string} raw - the model's answer.
 * @returns {any} the parsed value.
 * @throws {Error} when no JSON object can be recovered.
 */
export function parseJsonAnswer(raw) {
  let text = String(raw ?? '').trim();
  if (text === '') throw aiError('AI 返回了空内容，请重试');
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) text = fence[1].trim();
  const start = text.search(/[\[{]/);
  const end = Math.max(text.lastIndexOf('}'), text.lastIndexOf(']'));
  if (start >= 0 && end > start) text = text.slice(start, end + 1);
  try {
    return JSON.parse(text);
  } catch (error) {
    throw aiError('AI 返回的结构无法解析，请重试', error);
  }
}
