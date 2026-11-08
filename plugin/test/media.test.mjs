/**
 * Renderer → container negotiation (src/client/media.js) contract.
 *
 * Two rules, both from measured behaviour rather than preference:
 *   1. WebKit (macOS Safari, and every iOS browser — all of them are WebKit)
 *      decodes VP9-in-WebM but drops the alpha plane, painting the pet as a
 *      black box. It must get the HEVC-alpha mov.
 *   2. Chromium (including the Electron desktop shell) and Firefox keep the
 *      webm's alpha and cannot decode the HEVC mov, so they must get the webm.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { animationExt, prefersMov } from '../src/client/media.js';

const IOS_SAFARI =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1';
const IOS_CHROME =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/130.0.0.0 Mobile/15E148 Safari/604.1';
const IOS_FIREFOX =
  'Mozilla/5.0 (iPad; CPU OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/130.0 Mobile/15E148 Safari/605.1.15';
const MAC_SAFARI =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15';
const MAC_CHROME =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const MAC_ELECTRON =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) deepseek-harness/1.0.0 Chrome/130.0.0.0 Electron/33.0.0 Safari/537.36';
const WIN_CHROME =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const WIN_EDGE =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0';
const WIN_FIREFOX = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0';

test('every iOS browser gets the mov, even the Chromium/Firefox skins', () => {
  for (const [name, ua] of [
    ['iOS Safari', IOS_SAFARI],
    ['iOS Chrome (CriOS)', IOS_CHROME],
    ['iPad Firefox (FxiOS)', IOS_FIREFOX],
  ]) {
    assert.equal(prefersMov(ua, 'iPhone'), true, name);
    assert.equal(animationExt({ userAgent: ua, platform: 'iPhone' }), '.mov', name);
  }
});

test('macOS Safari gets the mov', () => {
  assert.equal(prefersMov(MAC_SAFARI, 'MacIntel'), true);
  assert.equal(animationExt({ userAgent: MAC_SAFARI, platform: 'MacIntel' }), '.mov');
});

test('Chromium, Electron and Firefox keep the webm (their alpha survives)', () => {
  for (const [name, ua, platform] of [
    ['macOS Chrome', MAC_CHROME, 'MacIntel'],
    ['macOS Electron shell', MAC_ELECTRON, 'MacIntel'],
    ['Windows Chrome', WIN_CHROME, 'Win32'],
    ['Windows Edge', WIN_EDGE, 'Win32'],
    ['Windows Firefox', WIN_FIREFOX, 'Win32'],
  ]) {
    assert.equal(prefersMov(ua, platform), false, name);
    assert.equal(animationExt({ userAgent: ua, platform }), '.webm', name);
  }
});

test('unknown non-Mac WebKit keeps the webm (only macOS WebKit is known to drop alpha)', () => {
  assert.equal(prefersMov('Mozilla/5.0 AppleWebKit/605.1.15', 'Win32'), false);
  assert.equal(animationExt({ userAgent: 'Mozilla/5.0 AppleWebKit/605.1.15', platform: 'Win32' }), '.webm');
});

test('the live extension is decided once per session', () => {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const install = (userAgent, platform) => {
    Object.defineProperty(globalThis, 'navigator', { value: { userAgent, platform }, configurable: true });
  };
  try {
    install(IOS_SAFARI, 'iPhone');
    assert.equal(animationExt(), '.mov', 'first call follows the live renderer');
    // Swapping the UA later must not flip the container mid-session: the pet
    // never mixes formats on one <video> element.
    install(WIN_CHROME, 'Win32');
    assert.equal(animationExt(), '.mov', 'the answer is cached');
  } finally {
    if (descriptor === undefined) delete globalThis.navigator;
    else Object.defineProperty(globalThis, 'navigator', descriptor);
  }
});
