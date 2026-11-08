/**
 * Unit-level route smoke: registers the real routes against a fake connection
 * service and drives the handlers with real Request objects. This proves the
 * route shapes without installing the bundle into a profile.
 *
 * Run: node chatbox-pet/tools/smoke.mjs
 */
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { apply } from '../index.js';

const routes = new Map();

const fakeConnectionCtx = {
  connection: {
    fetch: {
      register(route) {
        if (routes.has(route.path)) throw new Error('duplicate route: ' + route.path);
        routes.set(route.path, route);
        return async () => {
          routes.delete(route.path);
        };
      },
    },
  },
  effect(fn) {
    return fn();
  },
};

const fakeCtx = {
  // A scratch profile keeps the prefs file out of the real one while the
  // routes are exercised.
  profileContext: { dir: mkdtempSync(join(tmpdir(), 'cbp-smoke-')) },
  inject(_names, fn) {
    fn(fakeConnectionCtx);
  },
};

function check(label, condition, detail = '') {
  if (!condition) {
    console.error(`FAIL ${label} ${detail}`);
    process.exitCode = 1;
    return;
  }
  console.log(`PASS ${label}${detail === '' ? '' : ' — ' + detail}`);
}

apply(fakeCtx);

check(
  '46 routes registered (config, state, broadcast, prefs, said, quip, boost, 39 assets)',
  routes.size === 46,
  `got ${routes.size}`,
);

// config
{
  const response = await routes.get('/api/chatbox-pet/config').fetch(new Request('http://x/api/chatbox-pet/config'));
  const body = await response.json();
  check('config 200 + ok', response.status === 200 && body.ok === true);
  check('config pack name', body.result.name === '皮卡丘');
  check('config whitelist of 19', body.result.animations.length === 19);
  check('config bubble buckets', Array.isArray(body.result.workStatusTexts) && body.result.workStatusTexts.length === 5);
}

// asset: whitelisted
{
  const response = await routes.get('/api/chatbox-pet/asset/idle-breathe.webm').fetch(new Request('http://x/'));
  const bytes = await response.arrayBuffer();
  check(
    'asset 200 video/webm',
    response.status === 200 && response.headers.get('content-type') === 'video/webm' && bytes.byteLength > 1000,
    `${bytes.byteLength} bytes`,
  );
}

// asset: the WebKit container of the same clip.
{
  const response = await routes.get('/api/chatbox-pet/asset/idle-breathe.mov').fetch(new Request('http://x/'));
  const bytes = await response.arrayBuffer();
  check(
    'asset 200 video/quicktime (the WebKit form)',
    response.status === 200 && response.headers.get('content-type') === 'video/quicktime' && bytes.byteLength > 1000,
    `${bytes.byteLength} bytes`,
  );
  const loop = await routes.get('/api/chatbox-pet/asset/idle-breathe-loop.mov').fetch(new Request('http://x/'));
  check('derived idle loop serves its mov', loop.status === 200 && loop.headers.get('content-type') === 'video/quicktime');
}

// asset: unknown names never reach a handler (no route exists).
check('no route for unknown asset', !routes.has('/api/chatbox-pet/asset/nope.webm'));
check('no route for an unknown mov', !routes.has('/api/chatbox-pet/asset/nope.mov'));
check('the mov lives in a subdirectory, not in the route namespace', !routes.has('/api/chatbox-pet/asset/mov/idle-breathe.mov'));
check('no route for traversal', !routes.has('/api/chatbox-pet/asset/../pokemon-config.jsonc'));

// said: remember a line, read it back, then clear it.
{
  const route = routes.get('/api/chatbox-pet/said');
  check('said route registered', route !== undefined && route !== null);

  const posted = await route.fetch(
    new Request('http://x/api/chatbox-pet/said', { method: 'POST', body: JSON.stringify({ text: '  记得这句话  ' }) }),
  );
  const postedBody = await posted.json();
  check(
    'said 200 remembers the line, cleaned',
    postedBody.ok === true && postedBody.result.lines[0].text === '记得这句话',
    JSON.stringify(postedBody.result?.lines?.[0] ?? null),
  );

  const listed = await route.fetch(new Request('http://x/api/chatbox-pet/said'));
  const listedBody = await listed.json();
  check('said GET returns the remembered line', listedBody.ok === true && listedBody.result.lines.some((line) => line.text === '记得这句话'));

  const empty = await route.fetch(
    new Request('http://x/api/chatbox-pet/said', { method: 'POST', body: JSON.stringify({ text: '   ' }) }),
  );
  check('said 400 for an empty line', empty.status === 400);

  const cleared = await route.fetch(new Request('http://x/api/chatbox-pet/said', { method: 'DELETE' }));
  const clearedBody = await cleared.json();
  check('said DELETE forgets everything', clearedBody.ok === true && clearedBody.result.lines.length === 0);
}

// quip: one line built out of the stores (the stores may be empty here, the
// generic pool still answers).
{
  const response = await routes
    .get('/api/chatbox-pet/quip')
    .fetch(new Request('http://x/api/chatbox-pet/quip', { method: 'POST', body: JSON.stringify({ kind: 'topic', locale: 'zh' }) }));
  const body = await response.json();
  check(
    'quip 200 with a line and a kind',
    response.status === 200 && body.ok === true && typeof body.result.text === 'string' && body.result.text !== '',
    JSON.stringify(body.result?.text ?? null),
  );
  check('quip honours the requested kind', body.result.kind === 'topic', String(body.result.kind));
}

// state: unknown session → idle, never throws.
{
  const response = await routes
    .get('/api/chatbox-pet/state')
    .fetch(new Request('http://x/api/chatbox-pet/state?session=smoke-missing'));
  const body = await response.json();
  check('state 200 idle for missing session', response.status === 200 && body.ok === true && body.result.status === 'idle');
}

// state: missing query param → idle.
{
  const response = await routes.get('/api/chatbox-pet/state').fetch(new Request('http://x/api/chatbox-pet/state'));
  const body = await response.json();
  check('state 200 idle without session param', body.ok === true && body.result.status === 'idle');
}

// broadcast: validation, then the merge shows up in state.
{
  const bad = await routes
    .get('/api/chatbox-pet/broadcast')
    .fetch(new Request('http://x/api/chatbox-pet/broadcast', { method: 'POST', body: 'not json' }));
  check('broadcast 400 for non-JSON', bad.status === 400);

  const empty = await routes
    .get('/api/chatbox-pet/broadcast')
    .fetch(new Request('http://x/api/chatbox-pet/broadcast', { method: 'POST', body: '{}' }));
  check('broadcast 400 without text', empty.status === 400);

  const invalid = await routes
    .get('/api/chatbox-pet/broadcast')
    .fetch(new Request('http://x/api/chatbox-pet/broadcast', { method: 'POST', body: '{"text":"hi","status":"bogus"}' }));
  check('broadcast 400 for unknown status', invalid.status === 400);

  const ok = await routes
    .get('/api/chatbox-pet/broadcast')
    .fetch(
      new Request('http://x/api/chatbox-pet/broadcast', {
        method: 'POST',
        body: JSON.stringify({ text: '皮卡！冒烟通过', status: 'success', durationMs: 5000, session: 'smoke-1' }),
      }),
    );
  const okBody = await ok.json();
  check('broadcast 200 + expiry', ok.status === 200 && okBody.ok === true && okBody.result.expiresAt > Date.now());

  const state = await routes
    .get('/api/chatbox-pet/state')
    .fetch(new Request('http://x/api/chatbox-pet/state?session=smoke-1'));
  const stateBody = await state.json();
  check(
    'state merges the broadcast',
    stateBody.result.status === 'success' && stateBody.result.bubble === '皮卡！冒烟通过',
  );
}

console.log(process.exitCode === 1 ? 'smoke: FAILURES above' : 'smoke: all checks passed');
