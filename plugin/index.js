/**
 * Host half of the Chatbox Pet bundle.
 *
 * One bundle, two independently switchable features: the composer Pikachu and
 * the prompt rewriter. All behaviour lives in `src/host/`; this file is only
 * wiring, so the bundle stays loadable even when a Host service is missing.
 */
import { registerRoutes } from './src/host/routes.js';

export const inject = ['connection'];

/**
 * Apply the plugin.
 * @param {any} ctx - the Host plugin context.
 * @param {object} [config] - the plugin row config (initial prefs defaults).
 * @returns {void}
 */
export function apply(ctx, config) {
  try {
    registerRoutes(ctx, config);
  } catch (error) {
    console.warn('[chatbox-pet] apply failed: ' + String(error));
  }
}
