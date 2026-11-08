/**
 * HTTP routes of the Chatbox Pet bundle.
 *
 * Two features, two sets of routes, independent switches:
 *
 *   pet   — config, one exact route per whitelisted asset, state, broadcast
 *   boost — the streaming prompt rewriter merged from the retired
 *           `@local/prompt-boost` bundle
 *   both  — GET/POST prefs
 *
 * Registered through `ctx.connection.fetch.register`, same auth as the rest of
 * the app. Asset routes are one exact registration per whitelisted file: the
 * router only ever sees known names, and anything else — including '..'
 * segments — falls to the Host's own 404 without touching the filesystem.
 * No handler ever throws.
 */
import { serveAssetConditional } from './assets.js';
import { ASSET_FILES, loadPack } from './pack.js';
import { activeBroadcast, computeState, setBroadcast } from './session.js';
import { STATUSES } from './state.js';
import { readPrefs, writePrefs } from './prefs.js';
import { clearSaid, readSaid, rememberLine } from './said.js';
import { createQuipEngine } from './quip.js';
import { collectContext } from './boost/sources/index.js';
import { resolveConfig, serviceOf } from './boost/config.js';
import { mergeQueuedPrompts, optimizePrompt } from './boost/optimize.js';

/** Route base. Never collides with the desktop pet's `/dsh-pet-7340`. */
export const ROUTE_BASE = '/api/chatbox-pet';
export const CONFIG_ROUTE = `${ROUTE_BASE}/config`;
export const STATE_ROUTE = `${ROUTE_BASE}/state`;
export const BROADCAST_ROUTE = `${ROUTE_BASE}/broadcast`;
export const ASSET_ROUTE_BASE = `${ROUTE_BASE}/asset`;
export const PREFS_ROUTE = `${ROUTE_BASE}/prefs`;
export const BOOST_ROUTE = `${ROUTE_BASE}/boost`;
export const MERGE_ROUTE = `${ROUTE_BASE}/merge`;
export const SAID_ROUTE = `${ROUTE_BASE}/said`;
export const QUIP_ROUTE = `${ROUTE_BASE}/quip`;

/**
 * Register every route. Returns a disposer.
 * @param {any} ctx - the Host plugin context.
 * @param {object} [config] - the plugin row config (defaults for prefs).
 * @returns {() => void} disposes all registrations.
 */
export function registerRoutes(ctx, config) {
  const disposers = [];
  // One engine per registration: a plugin reload starts a fresh rotation.
  const quips = createQuipEngine();
  ctx.inject(['connection'], (connectionCtx) => {
    connectionCtx.effect(() => {
      const register = connectionCtx?.connection?.fetch?.register;
      if (typeof register !== 'function') {
        console.warn('[chatbox-pet] connection.fetch unavailable; routes not registered');
        return () => {};
      }
      const add = (route) => {
        try {
          const dispose = register.call(connectionCtx.connection.fetch, route);
          disposers.push(dispose);
        } catch (error) {
          // A reload can apply this plugin twice; the route already exists then.
          console.warn('[chatbox-pet] route registration failed for ' + route.path + ': ' + String(error));
        }
      };

      /** Answer 403 for a feature the user switched off. @param {string} feature - pet|boost. */
      const disabled = (feature) =>
        Response.json(failure('chatbox-pet/disabled', `chatbox-pet: ${feature} is switched off`), { status: 403 });

      // ---------------------------------------------------------------- pet --
      add({
        path: CONFIG_ROUTE,
        methods: ['GET'],
        requestBody: 'buffered',
        fetch: async () => {
          try {
            const prefs = await readPrefs(ctx, config);
            if (!prefs.pet) return disabled('pet');
            const pack = await loadPack();
            return Response.json({ ok: true, result: { ...pack, prefs } });
          } catch (error) {
            return Response.json(failure('chatbox-pet/config-failed', messageOf(error)));
          }
        },
      });

      for (const name of ASSET_FILES.keys()) {
        add({
          path: `${ASSET_ROUTE_BASE}/${name}`,
          methods: ['GET'],
          requestBody: 'buffered',
          fetch: async (request) => {
            const prefs = await readPrefs(ctx, config);
            if (!prefs.pet) return disabled('pet');
            return serveAssetConditional(name, request.headers.get('if-none-match'));
          },
        });
      }

      add({
        path: STATE_ROUTE,
        methods: ['GET'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            const prefs = await readPrefs(ctx, config);
            if (!prefs.pet) {
              return Response.json({ ok: true, result: { status: 'idle', changedAt: Date.now(), superagent: null, disabled: true } });
            }
            const sessionId = new URL(request.url).searchParams.get('session') ?? '';
            if (sessionId === '') {
              return Response.json({ ok: true, result: { status: 'idle', changedAt: Date.now(), superagent: null } });
            }
            return Response.json({ ok: true, result: await computeState(ctx, sessionId) });
          } catch (error) {
            // Never throw: a broken session still gets a calm pet.
            return Response.json({ ok: true, result: { status: 'idle', changedAt: Date.now(), superagent: null } });
          }
        },
      });

      add({
        path: BROADCAST_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          const prefs = await readPrefs(ctx, config);
          if (!prefs.pet) return disabled('pet');
          let body;
          try {
            body = await request.json();
          } catch {
            return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
          }
          const text = typeof body?.text === 'string' ? body.text.trim() : '';
          if (text === '') {
            return Response.json(failure('chatbox-pet/bad-request', 'text is required'), { status: 400 });
          }
          const status = typeof body?.status === 'string' ? body.status : undefined;
          if (status !== undefined && !STATUSES.includes(status)) {
            return Response.json(
              failure('chatbox-pet/bad-request', `unsupported status: ${status}`),
              { status: 400 },
            );
          }
          try {
            const session = typeof body?.session === 'string' && body.session !== '' ? body.session : '*';
            const { expiresAt } = setBroadcast(session, {
              text,
              status,
              durationMs: body?.durationMs,
            });
            return Response.json({ ok: true, result: { session, expiresAt } });
          } catch (error) {
            return Response.json(failure('chatbox-pet/broadcast-failed', messageOf(error)));
          }
        },
      });

      // -------------------------------------------------------------- prefs --
      add({
        path: PREFS_ROUTE,
        methods: ['GET', 'POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            if (request.method === 'GET') {
              return Response.json({ ok: true, result: await readPrefs(ctx, config) });
            }
            let body;
            try {
              body = await request.json();
            } catch {
              return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
            }
            const patch = body?.prefs !== null && typeof body?.prefs === 'object' ? body.prefs : body;
            return Response.json({ ok: true, result: await writePrefs(ctx, patch ?? {}, config) });
          } catch (error) {
            return Response.json(failure('chatbox-pet/prefs-failed', messageOf(error)));
          }
        },
      });

      // --------------------------------------------------------------- said --
      // The lines the reader put in the pet's mouth, remembered on the Host so
      // they survive a reload and reach every session. Pet feature: off = 403,
      // the same rule the pet's other routes use.
      add({
        path: SAID_ROUTE,
        methods: ['GET', 'POST', 'DELETE'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            const prefs = await readPrefs(ctx, config);
            if (!prefs.pet) return disabled('pet');
            if (request.method === 'GET') {
              return Response.json({ ok: true, result: { lines: await readSaid(ctx) } });
            }
            if (request.method === 'DELETE') {
              return Response.json({ ok: true, result: { lines: await clearSaid(ctx) } });
            }
            let body;
            try {
              body = await request.json();
            } catch {
              return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
            }
            const text = typeof body?.text === 'string' ? body.text : '';
            if (text.trim() === '') {
              return Response.json(failure('chatbox-pet/bad-request', 'text is required'), { status: 400 });
            }
            return Response.json({ ok: true, result: { lines: await rememberLine(ctx, text) } });
          } catch (error) {
            return Response.json(failure('chatbox-pet/said-failed', messageOf(error)));
          }
        },
      });

      // --------------------------------------------------------------- quip --
      // One line built out of the reader's own stores. The collection reuses
      // the boost sources (memory / minutes / reader / moments) and keeps its
      // own budget; the wording is local and instant on purpose.
      add({
        path: QUIP_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            const prefs = await readPrefs(ctx, config);
            if (!prefs.pet) return disabled('pet');
            let body = {};
            try {
              body = await request.json();
            } catch {
              body = {};
            }
            const options = {
              kind: typeof body?.kind === 'string' ? body.kind : undefined,
              locale: body?.locale === 'en' ? 'en' : 'zh',
            };
            const collected = await collectContext({
              query: '',
              now: Date.now(),
              config: resolveConfig(ctx, config),
            });
            const quip = quips.next(collected.sources, options);
            return Response.json({
              ok: true,
              result: {
                ...quip,
                sources: collected.sources
                  .filter((source) => Array.isArray(source?.items) && source.items.length > 0)
                  .map((source) => ({ id: source.id, label: source.label, count: source.items.length })),
              },
            });
          } catch (error) {
            return Response.json(failure('chatbox-pet/quip-failed', messageOf(error)));
          }
        },
      });

      // -------------------------------------------------------------- merge --
      // Fold the reader's queued messages into one text. The QUEUE itself is
      // client state (the page calls session.updateQueue), so this route only
      // answers "what should the merged text be" — and answers it even when the
      // model is unavailable, by joining the originals untouched.
      add({
        path: MERGE_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            const prefs = await readPrefs(ctx, config);
            if (!prefs.boost) return disabled('boost');
            let body;
            try {
              body = await request.json();
            } catch {
              return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
            }
            const texts = Array.isArray(body?.texts) ? body.texts : [];
            const deps = {
              get llm() {
                return serviceOf(ctx, 'llm');
              },
              get agentDefaultModel() {
                return serviceOf(ctx, 'agentDefaultModel');
              },
              config: resolveConfig(ctx, config),
              signal: undefined,
            };
            const result = await mergeQueuedPrompts(
              {
                texts,
                locale: body?.locale === 'en' ? 'en' : 'zh',
                sessionId: typeof body?.session === 'string' ? body.session : undefined,
              },
              deps,
            );
            return Response.json({ ok: true, result });
          } catch (error) {
            return Response.json(failure('chatbox-pet/merge-failed', messageOf(error)));
          }
        },
      });

      // -------------------------------------------------------------- boost --
      add({
        path: BOOST_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          const prefs = await readPrefs(ctx, config);
          if (!prefs.boost) return disabled('boost');
          let body;
          try {
            body = await request.json();
          } catch {
            return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
          }
          const method = typeof body?.method === 'string' ? body.method : '';
          if (method !== 'optimize' && method !== 'debug') {
            return Response.json(failure('chatbox-pet/unknown-method', `unsupported method: ${method}`), { status: 400 });
          }
          const payload = body?.payload !== null && typeof body.payload === 'object' ? body.payload : {};
          const deps = {
            get llm() {
              return serviceOf(ctx, 'llm');
            },
            get agentDefaultModel() {
              return serviceOf(ctx, 'agentDefaultModel');
            },
            config: resolveConfig(ctx, config),
            signal: undefined,
            sessionId: typeof payload.sessionId === 'string' ? payload.sessionId : undefined,
          };

          if (method === 'debug') {
            const selection = deps.agentDefaultModel?.currentSelection?.() ?? null;
            try {
              const result = await optimizePrompt(payload, deps);
              return Response.json({ ok: true, selection, result });
            } catch (error) {
              return Response.json({
                ok: false,
                selection,
                message: messageOf(error),
                cause: error?.cause instanceof Error ? error.cause.message : String(error?.cause ?? ''),
              });
            }
          }

          if (payload.stream === true) {
            const { optimizePromptStream } = await import('./boost/optimize.js');
            return streamResponse(request, payload, deps, optimizePromptStream);
          }

          try {
            const result = await optimizePrompt(payload, deps);
            return Response.json({ ok: true, result });
          } catch (error) {
            if (error?.code !== 'prompt-boost/failed') {
              try {
                ctx.logger?.warn?.('[chatbox-pet/boost] ' + String(error));
              } catch {
                // Logging must never turn a handled failure into a crashed request.
              }
            }
            return Response.json(failure('prompt-boost/failed', messageOf(error)), { status: 200 });
          }
        },
      });

      return () => {
        for (const dispose of disposers.splice(0)) {
          try {
            void dispose?.();
          } catch {
            // Disposal must not take the plugin down.
          }
        }
      };
    }, 'chatbox-pet: routes');
  });
}

/**
 * Answer one rewrite as a Server-Sent-Events stream.
 * @param {Request} request - the incoming request.
 * @param {object} payload - the validated payload.
 * @param {object} deps - the injected dependencies.
 * @param {Function} optimize - the streaming entry point.
 * @returns {Response} the event stream.
 */
function streamResponse(request, payload, deps, optimize) {
  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      let closed = false;
      const send = (event) => {
        if (closed) return;
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
        } catch {
          closed = true;
        }
      };
      try {
        const result = await optimize(payload, deps, send);
        send({ type: 'done', result });
      } catch (error) {
        send({ type: 'error', message: messageOf(error) });
      } finally {
        if (!closed) {
          closed = true;
          try {
            controller.close();
          } catch {
            // already closed
          }
        }
      }
    },
  });
  return new Response(body, {
    headers: {
      'content-type': 'text/event-stream; charset=utf-8',
      'cache-control': 'no-cache, no-transform',
      'x-accel-buffering': 'no',
    },
  });
}

/**
 * Build the error body shape the rest of the app uses.
 * @param {string} code - the machine readable code.
 * @param {string} message - the message for the reader.
 * @returns {object} the error body.
 */
function failure(code, message) {
  return { ok: false, error: { code, message, details: {} } };
}

/**
 * @param {unknown} error
 * @returns {string}
 */
function messageOf(error) {
  return error instanceof Error ? error.message : String(error);
}

// Re-exported so tests can drive the store the routes use.
export { activeBroadcast, setBroadcast };
