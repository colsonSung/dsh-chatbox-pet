/**
 * Host configuration of the Prompt Boost bundle.
 *
 * Everything the collectors need is resolved here, once per request: the
 * profile directory (which decides where the reader shelf and the Moments file
 * live) plus the optional per-store overrides from the plugin row. Nothing is
 * cached at module scope, because a Host can move or replace its services long
 * after this plugin was applied.
 */
import { homedir } from 'node:os';
import { join } from 'node:path';

/**
 * Read one Host service without assuming it is mounted.
 * @param {any} ctx - the Host plugin context.
 * @param {string} name - the service name.
 * @returns {any} the service, or undefined.
 */
export function serviceOf(ctx, name) {
  try {
    if (ctx !== null && ctx !== undefined && typeof ctx.get === 'function') {
      const found = ctx.get(name);
      if (found !== undefined && found !== null) return found;
    }
  } catch {
    // The context does not expose services this way; try the property below.
  }
  try {
    if (ctx !== null && ctx !== undefined) {
      const found = ctx[name];
      if (found !== undefined && found !== null) return found;
    }
  } catch {
    // The service is not reachable from this context.
  }
  return undefined;
}

/**
 * Resolve the collector configuration for one request.
 * @param {any} ctx - the Host plugin context.
 * @param {object} [pluginConfig] - the `config` of the plugin row.
 * @returns {object} the resolved configuration.
 */
export function resolveConfig(ctx, pluginConfig) {
  const profileContext = serviceOf(ctx, 'profileContext');
  const profileDir =
    typeof profileContext?.dir === 'string' && profileContext.dir !== ''
      ? profileContext.dir
      : process.env.DSH_PROFILE_DIR || join(homedir(), '.dsh');
  const config = pluginConfig !== null && typeof pluginConfig === 'object' ? pluginConfig : {};
  const memory = config.memory !== null && typeof config.memory === 'object' ? config.memory : {};
  return {
    profileDir,
    memory: {
      baseUrl: text(memory.baseUrl, 'http://127.0.0.1:6767'),
      namespace: text(memory.namespace, 'dh-memory'),
      apiKey: text(memory.apiKey, ''),
      keyFile: text(memory.keyFile, join(homedir(), '.supermemory', 'api-key')),
      limit: positive(memory.limit, 5),
      timeoutMs: positive(memory.timeoutMs, 1200),
    },
    minutes: config.minutes !== null && typeof config.minutes === 'object' ? config.minutes : {},
    reader: config.reader !== null && typeof config.reader === 'object' ? config.reader : {},
    moments: config.moments !== null && typeof config.moments === 'object' ? config.moments : {},
    llm: {
      // Left undefined unless the row sets it: several providers (Kimi among
      // them) reject any temperature but their own default, so the adapter's
      // resolved configuration is the safe source.
      temperature: Number.isFinite(Number(config?.llm?.temperature)) ? Number(config.llm.temperature) : undefined,
      provider: text(config?.llm?.provider, ''),
      model: text(config?.llm?.model, ''),
      maxTokens: positive(config?.llm?.maxTokens, 800),
      timeoutMs: positive(config?.llm?.timeoutMs, 30000),
    },
  };
}

/**
 * Read a non-empty string override.
 * @param {any} value - the raw value.
 * @param {string} fallback - the default.
 * @returns {string} the value.
 */
function text(value, fallback) {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : fallback;
}

/**
 * Read a positive number override.
 * @param {any} value - the raw value.
 * @param {number} fallback - the default.
 * @returns {number} the value.
 */
function positive(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}
