/**
 * Read one Host service without assuming it is mounted.
 *
 * Copied from prompt-boost/src/host/config.js: the Host may mount or replace
 * services long after this plugin was applied, so every lookup goes through
 * this guard.
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
