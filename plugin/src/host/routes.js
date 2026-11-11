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
import { readFile } from 'node:fs/promises';

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
import { transcribeAudio } from './audio/transcribe.js';
import { resolveModel } from './llm.js';
import { expandWord, extractDocument, lookupWord, translateText } from './translate/index.js';
import { speak } from './translate/speak.js';
import { addFavorite, exportFavorites, listFavorites, removeFavorite } from './translate/favorites.js';
import { localSettings, probeLocal } from './translate/local.js';
import { buildDeck } from './deck/generate.js';
import { draftText } from './write/draft.js';

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
/** Quick actions: local transcription, deck generation, writing. */
export const TRANSCRIBE_ROUTE = `${ROUTE_BASE}/transcribe`;
export const DECK_ROUTE = `${ROUTE_BASE}/deck`;
export const WRITE_ROUTE = `${ROUTE_BASE}/write`;
/** The translation page: text, documents and the favourite book. */
export const TRANSLATE_ROUTE = `${ROUTE_BASE}/translate`;
export const TRANSLATE_FILE_ROUTE = `${ROUTE_BASE}/translate/file`;
export const FAVORITES_ROUTE = `${ROUTE_BASE}/favorites`;
export const TRANSLATE_ENGINE_ROUTE = `${ROUTE_BASE}/translate/engine`;
/** Word pronunciation (local synth, cached on disk). */
export const SPEAK_ROUTE = `${ROUTE_BASE}/speak`;
export const FAVORITES_EXPORT_ROUTE = `${ROUTE_BASE}/favorites/export`;

/**
 * Resolve the Session id a model call should ride on.
 *
 * The main-panel pages (translation) are not bound to a Session, while several
 * providers route model calls per conversation — so a missing id falls back to
 * the most recent live Session instead of failing the call.
 * @param {any} ctx - the Host plugin context.
 * @param {any} body - the request body.
 * @returns {string|undefined} the Session id.
 */
function sessionIdFor(ctx, body) {
  const explicit = typeof body?.session === 'string' ? body.session.trim() : '';
  if (explicit !== '') return explicit;
  try {
    const sessions = serviceOf(ctx, 'sessions');
    const list = typeof sessions?.list === 'function' ? sessions.list() : [];
    const first = Array.isArray(list) ? list[0] : undefined;
    const id = first?.id ?? first?.sessionId;
    return typeof id === 'string' && id !== '' ? id : undefined;
  } catch {
    return undefined;
  }
}

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

      // ------------------------------------------------------- quick actions --
      // Three routes behind the "更多" panel. They are deliberately independent
      // of the pet/boost switches: the panel works even with the pet hidden.
      add({
        path: TRANSCRIBE_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            const bytes = Buffer.from(await request.arrayBuffer());
            const name = new URL(request.url).searchParams.get('name') ?? '';
            const language = new URL(request.url).searchParams.get('language') ?? '';
            const result = await transcribeAudio({ bytes, name, language });
            return Response.json({ ok: true, result });
          } catch (error) {
            return Response.json(failure('chatbox-pet/transcribe-failed', messageOf(error)), { status: 200 });
          }
        },
      });

      add({
        path: DECK_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          let body;
          try {
            body = await request.json();
          } catch {
            return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
          }
          try {
            const { provider, model } = resolveModel(ctx, config);
            const result = await buildDeck({
              llm: serviceOf(ctx, 'llm'),
              provider,
              model,
              topic: body?.topic,
              audience: body?.audience,
              pages: body?.pages,
              points: body?.points,
              locale: body?.locale === 'en' ? 'en' : 'zh',
              sessionId: sessionIdFor(ctx, body),
            });
            let base64 = '';
            try {
              base64 = (await readFile(result.path)).toString('base64');
            } catch {
              // The file is the deliverable; the preview copy is a convenience.
            }
            return Response.json({
              ok: true,
              result: {
                path: result.path,
                name: result.name,
                slides: result.slides,
                title: result.outline?.title ?? '',
                base64,
              },
            });
          } catch (error) {
            return Response.json(failure('chatbox-pet/deck-failed', messageOf(error)), { status: 200 });
          }
        },
      });

      add({
        path: WRITE_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          let body;
          try {
            body = await request.json();
          } catch {
            return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
          }
          try {
            const { provider, model } = resolveModel(ctx, config);
            const result = await draftText({
              llm: serviceOf(ctx, 'llm'),
              provider,
              model,
              genre: body?.genre,
              topic: body?.topic,
              tone: body?.tone,
              points: body?.points,
              locale: body?.locale === 'en' ? 'en' : 'zh',
              sessionId: sessionIdFor(ctx, body),
            });
            return Response.json({ ok: true, result });
          } catch (error) {
            return Response.json(failure('chatbox-pet/write-failed', messageOf(error)), { status: 200 });
          }
        },
      });

      // ---------------------------------------------------------- translate --
      add({
        path: TRANSLATE_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          let body;
          try {
            body = await request.json();
          } catch {
            return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
          }
          try {
            const { provider, model } = resolveModel(ctx, config);
            // A headword gets the dictionary shape; a sentence gets a translation.
            if (body?.mode === 'expand') {
              const result = await expandWord({
                llm: serviceOf(ctx, 'llm'),
                provider,
                model,
                word: body?.text,
                config,
                sessionId: sessionIdFor(ctx, body),
              });
              return Response.json({ ok: true, result });
            }
            if (body?.mode === 'dict') {
              const result = await lookupWord({
                llm: serviceOf(ctx, 'llm'),
                provider,
                model,
                word: body?.text,
                locale: body?.locale === 'en' ? 'en' : 'zh',
                config,
                sessionId: sessionIdFor(ctx, body),
              });
              return Response.json({ ok: true, result });
            }
            const result = await translateText({
              llm: serviceOf(ctx, 'llm'),
              provider,
              model,
              text: body?.text,
              from: body?.from,
              to: body?.to,
              config,
              sessionId: sessionIdFor(ctx, body),
            });
            return Response.json({ ok: true, result });
          } catch (error) {
            return Response.json(failure('chatbox-pet/translate-failed', messageOf(error)), { status: 200 });
          }
        },
      });

      add({
        path: TRANSLATE_FILE_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            const bytes = Buffer.from(await request.arrayBuffer());
            const name = new URL(request.url).searchParams.get('name') ?? '';
            const result = await extractDocument({ bytes, name });
            return Response.json({ ok: true, result });
          } catch (error) {
            return Response.json(failure('chatbox-pet/extract-failed', messageOf(error)), { status: 200 });
          }
        },
      });

      add({
        path: TRANSLATE_ENGINE_ROUTE,
        methods: ['GET'],
        requestBody: 'buffered',
        fetch: async () => {
          try {
            const settings = localSettings(config);
            const probe = await probeLocal(settings);
            return Response.json({
              ok: true,
              result: { local: probe.ok, baseUrl: probe.baseUrl, model: probe.model, models: probe.models },
            });
          } catch {
            return Response.json({ ok: true, result: { local: false, baseUrl: '', model: '', models: [] } });
          }
        },
      });

      add({
        path: SPEAK_ROUTE,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          let body;
          try {
            body = await request.json();
          } catch {
            return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
          }
          try {
            const clip = await speak({
              text: body?.text,
              accent: typeof body?.accent === 'string' ? body.accent : 'en-US',
            });
            const bytes = await readFile(clip.path);
            return Response.json({
              ok: true,
              result: {
                accent: clip.accent,
                voice: clip.voice,
                cached: clip.cached,
                mime: 'audio/mp4',
                base64: bytes.toString('base64'),
              },
            });
          } catch (error) {
            return Response.json(failure('chatbox-pet/speak-failed', messageOf(error)), { status: 200 });
          }
        },
      });

      add({
        path: FAVORITES_ROUTE,
        methods: ['GET', 'POST'],
        requestBody: 'buffered',
        fetch: async (request) => {
          try {
            if (request.method === 'GET') {
              const url = new URL(request.url);
              const items = await listFavorites({
                kind: url.searchParams.get('kind') ?? '',
                search: url.searchParams.get('search') ?? '',
              });
              return Response.json({ ok: true, result: { items } });
            }
            let body;
            try {
              body = await request.json();
            } catch {
              return Response.json(failure('chatbox-pet/bad-request', 'body is not JSON'), { status: 400 });
            }
            if (body?.action === 'remove') {
              const removed = await removeFavorite(String(body?.id ?? ''));
              return Response.json({ ok: true, result: { removed } });
            }
            const item = await addFavorite({
              kind: body?.kind,
              source: body?.source,
              target: body?.target,
              from: body?.from,
              to: body?.to,
            });
            return Response.json({ ok: true, result: { item } });
          } catch (error) {
            return Response.json(failure('chatbox-pet/favorites-failed', messageOf(error)), { status: 200 });
          }
        },
      });

      add({
        path: FAVORITES_EXPORT_ROUTE,
        methods: ['GET'],
        requestBody: 'buffered',
        fetch: async () => {
          try {
            const markdown = await exportFavorites();
            return new Response(markdown, {
              headers: { 'content-type': 'text/markdown; charset=utf-8', 'content-disposition': 'inline; filename="favorites.md"' },
            });
          } catch (error) {
            return Response.json(failure('chatbox-pet/favorites-failed', messageOf(error)), { status: 200 });
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
