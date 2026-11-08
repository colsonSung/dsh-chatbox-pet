/**
 * The four glyphs Prompt Boost draws.
 *
 * Inline SVG only — no emoji, no text glyph, no icon font. Every path is drawn
 * on a 16×16 grid with a 1px stroke, the same grid and stroke weight the Host
 * uses for its own composer tool icons, so the button reads as part of the
 * shell rather than a foreign widget. The sparkle and the close mark follow the
 * Host icon set's own geometry; the check and the warning triangle keep the
 * same corner radius and stroke caps.
 */
import { createElement as h } from 'react';

/**
 * Draw one icon SVG.
 * @param {object} options - the icon options.
 * @param {number} [options.size] - the square size in CSS px.
 * @param {object} options.children - the SVG children.
 * @returns {object} the svg element.
 */
function Icon({ size = 16, children }) {
  return h('svg', {
    width: size,
    height: size,
    viewBox: '0 0 16 16',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    strokeWidth: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
  }, children);
}

/**
 * The sparkle: three four-point stars on the Host's 16px grid.
 * @param {object} props - `{ size }`.
 * @returns {object} the svg element.
 */
export function IconSparkle({ size = 16 }) {
  return h(Icon, { size }, [
    h('path', {
      key: 'a',
      d: 'M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z',
      stroke: 'currentColor',
    }),
    h('path', {
      key: 'b',
      d: 'M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z',
      stroke: 'currentColor',
    }),
    h('path', {
      key: 'c',
      d: 'M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z',
      stroke: 'currentColor',
    }),
  ]);
}

/**
 * The confirmation tick, for the applied/undo row.
 * @param {object} props - `{ size }`.
 * @returns {object} the svg element.
 */
export function IconCheck({ size = 16 }) {
  return h(Icon, { size }, h('path', {
    d: 'M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4',
    stroke: 'currentColor',
  }));
}

/**
 * The close mark, for the panel footer.
 * @param {object} props - `{ size }`.
 * @returns {object} the svg element.
 */
export function IconClose({ size = 16 }) {
  return h(Icon, { size }, [
    h('path', { key: 'a', d: 'M2.5 2.5L13.5 13.5', stroke: 'currentColor' }),
    h('path', { key: 'b', d: 'M13.5 2.5L2.5 13.5', stroke: 'currentColor' }),
  ]);
}

/**
 * The warning mark, for the inline error row.
 * @param {object} props - `{ size }`.
 * @returns {object} the svg element.
 */
export function IconWarning({ size = 16 }) {
  return h(Icon, { size }, [
    h('path', { key: 'a', d: 'M8 2.4L14.4 13.6H1.6L8 2.4Z', stroke: 'currentColor' }),
    h('path', { key: 'b', d: 'M8 6.4V9.6', stroke: 'currentColor' }),
    h('path', { key: 'c', d: 'M8 12.1V12.15', stroke: 'currentColor', strokeWidth: 1.6 }),
  ]);
}

/**
 * The collapse chevron, pointing down toward the composer: the panel folds
 * back into the compact chip under it.
 * @param {object} props - `{ size }`.
 * @returns {object} the svg element.
 */
export function IconChevronDown({ size = 16 }) {
  return h(Icon, { size }, h('path', {
    d: 'M3 6L8 11L13 6',
    stroke: 'currentColor',
  }));
}
