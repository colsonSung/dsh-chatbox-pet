/**
 * The settings row, rendered for real: three independent switches, and the
 * pet one is an explicit display switch.
 *
 * This is the surface a reader uses when the pet itself is in the way, so the
 * test pins the two things that make it trustworthy: the switch says what it
 * does ("Show pet", not the character's name), and flipping it writes only
 * `pet` — boost and sound keep their state, which is what "off" has to mean
 * for the reader to use it without losing the other features.
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, join } from 'node:path';

const here = dirname(new URL(import.meta.url).pathname);

/**
 * Resolve a peer dependency the same way build.mjs does.
 * @param {string} id - the module id.
 * @returns {any} the module.
 */
function requireFrom(id) {
  const anchors = [
    join(here, '..', 'package.json'),
    join(here, '..', '..', 'chat-selection', 'package.json'),
    join(here, '..', '..', '..', 'chat-selection', 'package.json'),
  ];
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

test('the settings row offers an explicit pet display switch that leaves the other switches alone', async () => {
  const { buildSync } = requireFrom('esbuild');
  const outfile = join(here, '.ui-test.settings.cjs');
  buildSync({
    entryPoints: [join(here, 'ui-entry.jsx')],
    bundle: true,
    format: 'cjs',
    jsx: 'automatic',
    platform: 'browser',
    logLevel: 'silent',
    nodePaths: [
      join(here, '..', 'node_modules'),
      join(here, '..', '..', 'chat-selection', 'node_modules'),
      join(here, '..', '..', '..', 'chat-selection', 'node_modules'),
    ].filter((path) => existsSync(path)),
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

  // Record what the row asks the Host to persist, and answer as accepted.
  const writes = [];
  globalThis.fetch = async (url, init = {}) => {
    writes.push({ url, method: init.method ?? 'GET', body: init.body });
    if ((init.method ?? 'GET') === 'POST') {
      return { json: async () => ({ ok: true, result: { pet: false, boost: true, sound: true } }) };
    }
    return { json: async () => ({ ok: true, result: { pet: true, boost: true, sound: true } }) };
  };

  try {
    const { createRoot, SettingsRow, React, zh } = requireFrom(outfile);
    const t = (key) => (typeof zh[key] === 'string' ? zh[key] : key);
    const container = dom.window.document.getElementById('host');
    const root = createRoot(container);
    root.render(React.createElement(SettingsRow, { t }));
    await flush();

    const row = container.querySelector('[data-cbp-settings]');
    assert.ok(row, 'the settings row renders');
    assert.equal(row.querySelector('.cbp-set-title').textContent, zh['settings.title']);
    assert.match(row.querySelector('.cbp-set-desc').textContent, /显示宠物/);

    const switches = [...row.querySelectorAll('input[data-cbp-pref]')];
    assert.equal(switches.length, 3, 'pet, boost, sound');

    const byId = new Map(switches.map((input) => [input.id, input]));
    const pet = byId.get('chatbox-pet-feature-pet');
    const boost = byId.get('chatbox-pet-feature-boost');
    const sound = byId.get('chatbox-pet-feature-sound');
    assert.ok(pet && boost && sound);
    assert.equal(pet.checked, true);

    // The pet switch is named as a display control, not after the character.
    const labelOf = (input) => input.closest('label')?.textContent?.trim();
    assert.equal(labelOf(pet), zh['settings.pet']);
    assert.equal(zh['settings.pet'], '显示宠物');
    assert.equal(labelOf(boost), zh['settings.boost']);
    assert.equal(labelOf(sound), zh['settings.sound']);

    // Flip the pet switch: it asks the Host for `pet` only...
    pet.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
    await flush();
    const posts = writes.filter((call) => call.method === 'POST');
    assert.equal(posts.length, 1, 'one write for one flip');
    assert.deepEqual(JSON.parse(posts[0].body), { prefs: { pet: false } });

    // ...and the other two switches keep their state, so the feature they own
    // is untouched by hiding the pet.
    assert.equal(pet.checked, false);
    assert.equal(boost.checked, true);
    assert.equal(sound.checked, true);
    assert.equal(dom.window.localStorage.getItem('chatboxPet.sound'), null);

    root.unmount();
    await flush();
  } finally {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
    delete globalThis.fetch;
  }
});
