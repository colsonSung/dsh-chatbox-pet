/**
 * Component-level sound-toggle test: the real PetDock rendered into jsdom,
 * built on the fly with esbuild (resolved through chat-selection, like
 * build.mjs). Covers the toggle's aria-pressed flip, localStorage
 * persistence, and the test hooks.
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(new URL(import.meta.url).pathname);

/**
 * Resolve a peer dependency the same way build.mjs does: the plugin's own
 * node_modules first (a published checkout), then the sibling bundle this
 * workspace installs it into. A published clone has no sibling.
 * @param {string} id - the module id.
 * @returns {any} the module.
 */
function requireFrom(id) {
  const anchors = [join(here, '..', 'package.json'), join(here, '..', '..', 'chat-selection', 'package.json')];
  const errors = [];
  for (const anchor of anchors) {
    try {
      return createRequire(anchor)(id);
    } catch (error) {
      errors.push(`${anchor}: ${error?.code ?? error}`);
    }
  }
  throw new Error(`cannot resolve ${id}\n  ` + errors.join('\n  '));
}

const flush = () => new Promise((resolve) => setTimeout(resolve, 50));

test('sound toggle flips aria-pressed and persists to localStorage', async () => {
  // Build the real component for the jsdom realm. react resolves through
  // chat-selection's node_modules, same trick as build.mjs; the test entry
  // bundles react + react-dom in, so the component and the renderer share
  // one React copy.
  const { buildSync } = requireFrom('esbuild');
  const outfile = join(here, '.ui-test.pet.cjs');
  buildSync({
    entryPoints: [join(here, 'ui-entry.jsx')],
    bundle: true,
    format: 'cjs',
    jsx: 'automatic',
    platform: 'browser',
    logLevel: 'silent',
    nodePaths: [join(here, '..', '..', 'chat-selection', 'node_modules')],
    outfile,
  });

  const { JSDOM } = requireFrom('jsdom');
  const dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>', {
    url: 'http://localhost/',
    pretendToBeVisual: true,
  });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.localStorage = dom.window.localStorage;
  // jsdom does not implement media playback; the component guards undefined.
  dom.window.HTMLMediaElement.prototype.play = () => undefined;
  globalThis.fetch = () => new Promise(() => {});

  try {
    // The bundle carries its own React copies; use them, never a second pair.
    const { createRoot, PetDock, React } = requireFrom(outfile);
    const container = dom.window.document.getElementById('host');
    const root = createRoot(container);
    root.render(React.createElement(PetDock, { sessionId: 'ui-test', t: (key) => key }));
    await flush();

    const soundButton = container.querySelector('[data-cbp-sound]');
    assert.ok(soundButton, 'the toggle renders');
    assert.equal(soundButton.getAttribute('aria-pressed'), 'true', 'default is on');
    assert.equal(soundButton.getAttribute('aria-label'), 'sound.on');
    assert.equal(dom.window.localStorage.getItem('chatboxPet.sound'), null, 'nothing persisted yet');

    // The pet, bubble, and status hooks survived the rebuild.
    assert.ok(container.querySelector('[data-cbp-pet]'));
    const bubble = container.querySelector('[data-cbp-bubble]');
    assert.ok(bubble);
    assert.equal(bubble.getAttribute('role'), 'status');
    assert.equal(bubble.getAttribute('aria-live'), 'polite');

    // Toggle off: aria-pressed flips, the pref persists, the icon switches.
    soundButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    assert.equal(soundButton.getAttribute('aria-pressed'), 'false');
    assert.equal(soundButton.getAttribute('aria-label'), 'sound.off');
    assert.equal(dom.window.localStorage.getItem('chatboxPet.sound'), 'off');

    // Toggle back on.
    soundButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    assert.equal(soundButton.getAttribute('aria-pressed'), 'true');
    assert.equal(dom.window.localStorage.getItem('chatboxPet.sound'), 'on');

    root.unmount();
    // Let React's scheduler settle before the globals go away.
    await flush();
  } finally {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
  }
});
