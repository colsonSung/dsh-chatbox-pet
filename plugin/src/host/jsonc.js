/**
 * Tolerant JSONC reading for the pet pack config.
 *
 * The pack's pokemon-config.jsonc is hand-edited JSONC: `//` and block
 * comments plus the occasional trailing comma. This parser strips both
 * without touching string contents, then parses. It never rewrites the file
 * and never throws: an unreadable source returns undefined and the caller
 * falls back to defaults.
 */

/**
 * Remove JSONC comments and trailing commas outside string literals.
 * @param {string} src - the raw file text.
 * @returns {string} text JSON.parse accepts when the input is sound JSONC.
 */
export function stripJsonc(src) {
  let out = '';
  let inString = false;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (inString) {
      out += ch;
      if (ch === '\\' && i + 1 < src.length) {
        out += src[++i];
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }
    if (ch === '"') {
      inString = true;
      out += ch;
      continue;
    }
    if (ch === '/' && src[i + 1] === '/') {
      out += ' ';
      while (i + 1 < src.length && src[i + 1] !== '\r' && src[i + 1] !== '\n') i++;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      if (end === -1) {
        // Unterminated block comment: drop the rest, the parse below fails.
        out += ' ';
        break;
      }
      out += src.slice(i, end + 2).replace(/[^\r\n]/g, ' ');
      i = end + 1;
      continue;
    }
    if (ch === ',') {
      // Trailing comma: a comma whose next meaningful character closes a
      // container. Look ahead past whitespace without emitting the comma.
      let j = i + 1;
      while (j < src.length && /\s/.test(src[j])) j++;
      if (src[j] === '}' || src[j] === ']') continue;
    }
    out += ch;
  }
  return out;
}

/**
 * Parse JSONC text into a value.
 * @param {string} src - the raw file text.
 * @returns {any} the parsed value, or undefined when unparsable.
 */
export function parseJsonc(src) {
  if (typeof src !== 'string' || src.trim() === '') return undefined;
  try {
    return JSON.parse(stripJsonc(src));
  } catch {
    return undefined;
  }
}
