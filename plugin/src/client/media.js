/**
 * Which container format this renderer can play *with its alpha channel*.
 *
 * The pack ships every clip twice: `.webm` (VP9-alpha) and `.mov`
 * (HEVC-with-Alpha, QuickTime). Both codecs play in both engines — what
 * differs is the transparency. WebKit decodes VP9-in-WebM but drops the alpha
 * plane, so the webm paints an opaque black rectangle in Safari and on every
 * iPhone/iPad browser (all of them WebKit). Only the HEVC mov stays
 * transparent there (Apple: iOS 13 / macOS Catalina and later). Chromium and
 * Firefox are the mirror image: webm keeps alpha, and they cannot decode the
 * HEVC mov at all.
 *
 * `canPlayType` cannot make this call — Safari answers "probably" for the
 * webm, because "can decode" and "alpha survived" are two different
 * questions. So the decision is made from the renderer, once per session.
 */

/** The extension this session settled on, `null` = not decided yet. */
let resolvedExt = null;

/**
 * Does this renderer need the HEVC-alpha mov?
 *
 * @param {string} userAgent - navigator.userAgent.
 * @param {string} [platform] - navigator.platform (the macOS fallback signal).
 * @returns {boolean} true when the webm would lose its alpha.
 */
export function prefersMov(userAgent, platform) {
  const ua = typeof userAgent === 'string' ? userAgent : '';
  // iOS/iPadOS first: CriOS / FxiOS / EdgiOS are WebKit too and all of them
  // drop the alpha, so the Chromium/Firefox exclusion below must not see them.
  if (/iPhone|iPad|iPod/i.test(ua)) return true;
  // Chromium (including the Electron desktop shell) and Firefox keep VP9-alpha.
  if (/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(ua)) return false;
  // What is left is WebKit: transparent webm only on macOS, so gate on that.
  return /Mac/i.test(typeof platform === 'string' ? platform : ua);
}

/**
 * The clip extension (with dot) to request from the Host.
 *
 * @param {{userAgent?: string, platform?: string}} [nav] - overridable for
 * tests; the live call reads `navigator` once and caches the answer.
 * @returns {'.mov'|'.webm'} the extension to append to an animation name.
 */
export function animationExt(nav) {
  if (nav !== undefined) {
    return prefersMov(nav.userAgent, nav.platform) ? '.mov' : '.webm';
  }
  if (resolvedExt === null) {
    const live = typeof navigator === 'undefined' ? undefined : navigator;
    resolvedExt = prefersMov(live?.userAgent, live?.platform) ? '.mov' : '.webm';
  }
  return resolvedExt;
}
