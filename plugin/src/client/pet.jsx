/**
 * The pet itself.
 *
 * One button holding one video element, pinned to the composer's top-right
 * through a zero-height dock row. The pet is calm by default: idle-breathe
 * loops, nothing else moves. A state poll every 6s (only while the tab is
 * visible) drives transitions: each status change plays its clip once, shows
 * a one-line bubble, and the video returns to idle-breathe when it ends.
 */
import * as React from 'react';
import {
  petSound,
  readSoundPref,
  safeStorage,
  toggleSoundPref,
} from './sound.js';
import { createChatEngine, draftLocale, wakeLine } from './pet-chat.js';
import { PetMenu } from './pet-menu.jsx';
import { sanitizeSay } from './pet-menu.js';
import { saidStore } from './said.js';
import { animationExt } from './media.js';
import { fetchQuip, QUIP_BUBBLE_MS, QUIP_CHANCE, reactionFor, shouldBringUp } from './pet-quip.js';
import { resolveTransition } from './pet-status.js';

/** Poll cadence while the tab is visible. */
const POLL_MS = 6000;

/** How long a bubble stays before fading; waiting bubbles are sticky. */
const BUBBLE_MS = 5000;

/** Status → one-shot clip. `result` is client-derived (working → thinking). */
/** workStatusTexts bucket order, matching the host's pack module. */
const BUCKET_INDEX = {
  thinking: 0,
  working: 1,
  result: 2,
  waiting: 3,
  success: 4,
  error: 5,
};

// The derived seamless loop: the pack's idle clips all have a first/last
// frame seam; this one loops clean. The host falls back to idle-breathe when
// the derived file is absent.
const IDLE_CLIP = 'idle-breathe-loop';
const CLICK_CLIP = 'click-wave';

/**
 * Ambient embellishments the pet plays once in a while when nothing else is
 * happening — a cruise on the motorcycle, a holiday on the beach. They are
 * one-shots that return to the idle loop, and they are rare enough that the
 * pet still reads as calm.
 */
const AMBIENT_CLIPS = ['act-harley', 'act-beach'];

/** How long a chat line stays on screen before it fades back to the loop. */
const CHAT_BUBBLE_MS = 6000;

/** How long the pet must be idle before an embellishment may fire. */
const AMBIENT_AFTER_MS = 90_000;

/** The chance an eligible idle tick plays an embellishment. */
const AMBIENT_CHANCE = 0.12;

/**
 * The dock-row component.
 * @param {{sessionId: string, t: (key: string) => string}} props
 */
export function PetDock({ sessionId, t, useInput, locale }) {
  const videoRef = React.useRef(null);
  const configRef = React.useRef(null);
  const lastStatusRef = React.useRef('idle');
  // Why the last turn ended ('completed' | 'failed' | 'cancelled'): the status
  // alone cannot tell a stopped task from a broken one.
  const lastDetailRef = React.useRef(null);
  const idleSinceRef = React.useRef(Date.now());
  // Conversation mode: the heard wake word and the line the pet last said.
  const chatEngineRef = React.useRef(null);
  const chatTimerRef = React.useRef(0);
  const chatHoldRef = React.useRef(0);
  const [chat, setChat] = React.useState(null);
  // The context menu: null while closed, else the pet's rect at open time.
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const said = React.useSyncExternalStore(
    saidStore.subscribe,
    saidStore.getSnapshot,
    saidStore.getSnapshot,
  );
  const recentLines = said.lines;
  const bubbleTimerRef = React.useRef(0);
  const [bubble, setBubble] = React.useState(null);
  const [status, setStatus] = React.useState('idle');
  const [videoOk, setVideoOk] = React.useState(true);
  // One clip may fail (a pack without the mov, a damaged file) without the pet
  // giving up video entirely: the idle loop gets one attempt first.
  const clipFallbackRef = React.useRef(false);

  /**
   * Swap the single video's clip. Never stack videos.
   * @param {string} name - a whitelisted clip name.
   * @param {boolean} looping - true only for the idle loop.
   */
  const playClip = React.useCallback((name, looping) => {
    const video = videoRef.current;
    if (video === null) return;
    if (video.dataset.clip === name && video.loop === looping && !video.ended) return;
    video.dataset.clip = name;
    video.loop = looping;
    // The container follows the renderer: webm keeps its alpha on
    // Chromium/Firefox, HEVC mov on WebKit — where the webm's alpha plane is
    // dropped and the pet paints as a black box.
    video.src = `/api/chatbox-pet/asset/${name}${animationExt()}`;
    const played = video.play();
    if (played !== undefined && typeof played.catch === 'function') played.catch(() => {});
  }, []);

  /**
   * Playback failed. Try the idle loop once, then give up on video: the still
   * avatar is transparent everywhere, so no failure path can paint the black
   * rectangle this two-format split exists to remove.
   * @returns {void}
   */
  const handleVideoError = React.useCallback(() => {
    const video = videoRef.current;
    if (video === null) return;
    if (!clipFallbackRef.current && video.dataset.clip !== IDLE_CLIP) {
      clipFallbackRef.current = true;
      playClip(IDLE_CLIP, true);
      return;
    }
    setVideoOk(false);
  }, [playClip]);

  /** Hide the bubble and stop its fade timer. */
  const hideBubble = React.useCallback(() => {
    window.clearTimeout(bubbleTimerRef.current);
    setBubble(null);
  }, []);

  /**
   * Show a bubble; sticky bubbles (waiting) stay until the wait resolves.
   * @param {string} text - the one line, ≤20 chars from the pack.
   * @param {boolean} sticky - keep until replaced.
   * @param {string} kind - the status that produced it (drives the error tint).
   */
  const showBubble = React.useCallback(
    (text, sticky, kind, durationMs = BUBBLE_MS, source = null) => {
      window.clearTimeout(bubbleTimerRef.current);
      setBubble({ text, kind, source });
      if (!sticky) {
        bubbleTimerRef.current = window.setTimeout(() => setBubble(null), durationMs);
      }
    },
    [],
  );

  /**
   * Pick a line from the pack's buckets client-side. Only used for the
   * client-derived `result` transition and as a fallback when the state route
   * returned no bubble.
   * @param {string} bucketStatus - the bucket to pick from.
   * @returns {string|undefined}
   */
  const pickLine = React.useCallback((bucketStatus) => {
    const buckets = configRef.current?.workStatusTexts;
    const index = BUCKET_INDEX[bucketStatus];
    const bucket = index === undefined || !Array.isArray(buckets) ? undefined : buckets[index];
    if (!Array.isArray(bucket) || bucket.length === 0) return undefined;
    return bucket[Math.floor(Math.random() * bucket.length)];
  }, []);

  /**
   * Apply one polled state. The pet speaks only on transitions; repeated
   * polls of the same status change nothing (except a waiting text update).
   * @param {any} next - the state route's result.
   */
  const handleStatus = React.useCallback(
    (next) => {
      const nextStatus = typeof next?.status === 'string' ? next.status : 'idle';
      const previous = lastStatusRef.current;
      const nextDetail = typeof next?.detail === 'string' ? next.detail : null;
      const transition = resolveTransition({
        previous: { status: previous, detail: lastDetailRef.current },
        next: { status: nextStatus, detail: nextDetail },
        idleClip: IDLE_CLIP,
      });
      if (!transition.changed) {
        if (nextStatus === 'waiting' && typeof next?.bubble === 'string' && next.bubble !== '') {
          showBubble(next.bubble, true, 'waiting');
        }
        return;
      }
      lastStatusRef.current = nextStatus;
      lastDetailRef.current = nextDetail;
      setStatus(nextStatus);
      // While the reader is talking to the pet, the work-status clips and
      // bubbles stay quiet: the conversation owns the pet's attention.
      if (chatEngineRef.current !== null && chatEngineRef.current.isActive()) {
        idleSinceRef.current = Date.now();
        return;
      }
      if (nextStatus === 'idle') {
        playClip(IDLE_CLIP, true);
        hideBubble();
        idleSinceRef.current = Date.now();
        return;
      }
      idleSinceRef.current = Date.now();
      // Why the turn ended, when it just did: a stopped task and a broken one
      // must not look or sound the same.
      const transitionStatus = transition.status;
      const detail = transition.detail;
      playClip(transition.clip ?? IDLE_CLIP, false);
      const text =
        typeof next?.bubble === 'string' && next.bubble !== ''
          ? next.bubble
          : pickLine(transitionStatus);
      // The prompt chooses the variant inside the status's timbre family: the
      // same line always sounds the same, a different line sounds different.
      // The super agent's own voice has its own bell.
      const soundName = next?.source === 'broadcast' ? 'notify' : transition.sound;
      petSound.play(soundName, text);
      if (text !== undefined) showBubble(text, nextStatus === 'waiting', transitionStatus);
      else hideBubble();
    },
    [hideBubble, pickLine, playClip, showBubble],
  );

  /**
   * Bring up one line from the reader's own stores and say it.
   * @param {string|null} kind - the kind asked for, or null for the Host's pick.
   * @returns {Promise<void>}
   */
  const sayQuip = React.useCallback(
    async (kind) => {
      const quip = await fetchQuip({ kind, locale: typeof locale === 'function' ? locale() : 'zh' });
      if (quip === null) return;
      const reaction = reactionFor(quip.kind);
      playClip(reaction.clip, false);
      petSound.play(reaction.sound, quip.text);
      showBubble(quip.text, false, 'quip', QUIP_BUBBLE_MS, quip.source?.label ?? null);
    },
    [locale, playClip, showBubble],
  );

  /**
   * Play an ambient embellishment when the pet has been idle long enough.
   * Rare by design: the pet is a companion, not a screensaver.
   * @returns {void}
   */
  const maybeEmbellish = React.useCallback(() => {
    const status = lastStatusRef.current;
    if (status !== 'idle') return;
    if (chatEngineRef.current !== null && chatEngineRef.current.isActive()) return;
    const idleFor = Date.now() - idleSinceRef.current;
    if (idleFor < AMBIENT_AFTER_MS) return;

    // Long enough idle, and rarely enough: the pet brings up something the
    // reader wrote down earlier. It is the one thing the pet knows that the
    // reader does not, so it must stay rare enough to feel like a thought.
    if (shouldBringUp({ idleForMs: idleFor, chance: QUIP_CHANCE })) {
      idleSinceRef.current = Date.now();
      void sayQuip(null);
      return;
    }

    if (Math.random() > AMBIENT_CHANCE) return;
    const clip = AMBIENT_CLIPS[Math.floor(Math.random() * AMBIENT_CLIPS.length)];
    playClip(clip, false);
    idleSinceRef.current = Date.now();
  }, [playClip, sayQuip]);

  /**
   * Say one line: play its clip and sound, show it in the bubble.
   * @param {{clip?: string, sound?: string, line?: string}} action - the decision.
   * @param {boolean} sticky - keep the line until replaced.
   * @param {number} [durationMs] - how long a non-sticky line lives.
   * @returns {void}
   */
  const speakLine = React.useCallback(
    (action, sticky, durationMs) => {
      if (typeof action.clip === 'string' && action.clip !== '') playClip(action.clip, false);
      if (typeof action.sound === 'string' && action.sound !== '') petSound.play(action.sound, action.line);
      if (typeof action.line === 'string' && action.line !== '') {
        showBubble(action.line, sticky, 'chat', durationMs);
      }
    },
    [playClip, showBubble],
  );

  /** Leave conversation mode: back to the idle loop, bubble gone. */
  const endChat = React.useCallback(() => {
    window.clearTimeout(chatHoldRef.current);
    setChat(null);
    playClip(IDLE_CLIP, true);
    hideBubble();
  }, [hideBubble, playClip]);

  // The draft drives conversation mode. `useInput` is the composer's own
  // selector hook, so this reacts as the reader types — no send, no request,
  // no polling. The wake word is answered at once; the content is answered
  // only after the typing pauses (engine.debounceMs).
  const draft =
    typeof useInput === 'function'
      ? useInput((value) => (typeof value?.draft === 'string' ? value.draft : ''))
      : '';

  React.useEffect(() => {
    if (chatEngineRef.current === null) chatEngineRef.current = createChatEngine();
    const engine = chatEngineRef.current;
    // Answer in the language the reader used; the UI locale is only the
    // fallback for a draft with no letters at all.
    const language = draftLocale(draft, typeof locale === 'function' ? locale() : 'zh');

    const heard = engine.observe(draft);
    if (heard !== null && heard.kind === 'wake') {
      setChat({ phase: 'awake' });
      // Ears up: the pet looks straight at the reader the moment it is called.
      speakLine({ clip: 'click-surprise', sound: 'wake', line: wakeLine({ locale: language, seed: draft }) }, true);
    }
    if (heard !== null && heard.kind === 'off') {
      endChat();
      return undefined;
    }

    window.clearTimeout(chatTimerRef.current);
    if (!engine.isActive()) return undefined;

    /**
     * Ask the engine for the content answer, retrying once the cooldown that
     * protects against answering every keystroke has expired.
     * @param {number} delayMs - how long to wait first.
     * @returns {void}
     */
    const ask = (delayMs) => {
      chatTimerRef.current = window.setTimeout(() => {
        const answer = engine.settle(draft, { locale: language });
        if (answer !== null && answer.kind === 'cooldown') {
          ask(Math.max(120, answer.retryInMs));
          return;
        }
        if (answer === null || answer.kind !== 'reply') return;
        speakLine(answer, false, CHAT_BUBBLE_MS);
        // A quiet spell ends the conversation and hands the pet back to work.
        window.clearTimeout(chatHoldRef.current);
        chatHoldRef.current = window.setTimeout(() => endChat(), engine.holdMs);
      }, delayMs);
    };
    ask(engine.debounceMs);
    return () => window.clearTimeout(chatTimerRef.current);
  }, [draft, locale, speakLine, endChat]);

  // The remembered lines load once when the composer appears; the menu opens
  // instantly from this snapshot and the next say updates it.
  React.useEffect(() => {
    void saidStore.refresh();
  }, []);

  // The pack config, fetched once: bucket lines for result + fallbacks.
  React.useEffect(() => {
    let cancelled = false;
    fetch('/api/chatbox-pet/config')
      .then((response) => (response.ok ? response.json() : null))
      .then((body) => {
        if (!cancelled && body?.ok === true) configRef.current = body.result;
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // The poll: every 6s while visible, paused when hidden, kicked on return.
  // Polling starts with this component's first render, which only happens
  // when a session-scoped composer exists.
  React.useEffect(() => {
    if (typeof sessionId !== 'string' || sessionId === '') return undefined;
    let stopped = false;
    let timer = 0;
    const tick = async () => {
      if (document.visibilityState !== 'visible') return;
      try {
        const response = await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(sessionId)}`);
        const body = response.ok ? await response.json() : null;
        if (!stopped && body?.ok === true) handleStatus(body.result);
      } catch {
        // A failed poll is a calm poll: the pet stays as it is.
      }
      if (!stopped) maybeEmbellish();
    };
    const schedule = () => {
      timer = window.setTimeout(async () => {
        await tick();
        if (!stopped) schedule();
      }, POLL_MS);
    };
    const onVisible = () => {
      if (document.visibilityState === 'visible') void tick();
    };
    document.addEventListener('visibilitychange', onVisible);
    void tick();
    schedule();
    return () => {
      stopped = true;
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [sessionId, handleStatus]);

  // The idle loop starts with the pet; the bubble timer dies with the dock.
  React.useEffect(() => {
    playClip(IDLE_CLIP, true);
    return () => window.clearTimeout(bubbleTimerRef.current);
  }, [playClip]);

  const [soundOn, setSoundOn] = React.useState(() => readSoundPref(safeStorage()) === 'on');

  /**
   * Put a line in the pet's mouth: a wave, the line, and a small pop.
   * @param {string} raw - what the reader typed.
   * @returns {void}
   */
  const sayLine = React.useCallback(
    (raw) => {
      const line = sanitizeSay(raw);
      if (line === '') return;
      playClip(CLICK_CLIP, false);
      petSound.play('click', line);
      showBubble(line, false, 'chat', CHAT_BUBBLE_MS);
      // Remembered on the Host, so the line survives a reload and can be asked
      // for again from the menu.
      void saidStore.remember(line);
    },
    [playClip, showBubble],
  );

  /**
   * Play one clip on demand, exactly once.
   * @param {string} clip - a whitelisted animation name.
   * @returns {void}
   */
  const playAction = React.useCallback(
    (clip) => {
      if (typeof clip !== 'string' || clip === '') return;
      playClip(clip, false);
      petSound.play('click', clip);
    },
    [playClip],
  );

  /**
   * Open the context menu anchored to the pet.
   * @param {{x: number, y: number}} [point] - the pointer, when it is a mouse.
   * @returns {void}
   */
  const openMenu = React.useCallback(() => {
    const node = document.querySelector('[data-cbp-pet]');
    const rect = node instanceof Element ? node.getBoundingClientRect() : null;
    if (rect === null) return;
    // Anchor to the whole pet, not to the pointer: the pointer sits inside the
    // pet, so a pointer anchor would put the menu on top of its upper half.
    setMenuAnchor({
      left: rect.left,
      right: rect.right,
      top: rect.top,
      bottom: rect.bottom,
    });
  }, []);

  return (
    <div className="cbp-root" data-cbp-root>
      <div className="cbp-stage">
        <div
          className={
            (bubble === null ? 'cbp-bubble' : 'cbp-bubble cbp-bubble--visible') +
            (bubble?.kind === 'error' ? ' cbp-bubble--error' : '') +
            // A small-talk line is a sentence, not a status hint: it wraps.
            (bubble?.kind === 'quip' ? ' cbp-bubble--quip' : '')
          }
          data-cbp-bubble
          role="status"
          aria-live="polite"
          aria-label={t('aria.bubble')}
        >
          {bubble?.source ? (
            <span className="cbp-bubble-source" data-cbp-bubble-source={bubble.source}>
              {bubble.source}
            </span>
          ) : null}
          <span className="cbp-bubble-text">{bubble?.text ?? ''}</span>
        </div>
        <button
          type="button"
          className="cbp-sound"
          data-cbp-sound
          aria-label={soundOn ? t('sound.on') : t('sound.off')}
          aria-pressed={soundOn}
          onClick={(event) => {
            event.stopPropagation();
            const next = toggleSoundPref(safeStorage()) === 'on';
            setSoundOn(next);
            // Keep the Host's copy in step, so the Settings switch and the
            // speaker never disagree.
            void prefsStore.update({ sound: next });
          }}
        >
          {soundOn ? <SpeakerIcon /> : <SpeakerSlashIcon />}
        </button>
        <button
          type="button"
          className="cbp-pet"
          data-cbp-pet
          data-cbp-status={chat === null ? status : 'awake'}
          data-cbp-chat={chat === null ? 'false' : 'true'}
          aria-label={t('aria.pet')}
          onClick={() => {
            petSound.play('click');
            playClip(CLICK_CLIP, false);
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            event.stopPropagation();
            openMenu();
          }}
          onKeyDown={(event) => {
            // Keyboard parity for the context menu: Shift+F10 or the dedicated
            // Menu key opens it anchored to the pet.
            const wantsMenu = event.key === 'ContextMenu' || (event.shiftKey && event.key === 'F10');
            if (!wantsMenu) return;
            event.preventDefault();
            openMenu();
          }}
          aria-haspopup="menu"
          aria-expanded={menuAnchor === null ? 'false' : 'true'}
        >
          {videoOk ? (
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              onEnded={(event) => {
                if (!event.currentTarget.loop) playClip(IDLE_CLIP, true);
              }}
              onError={handleVideoError}
            />
          ) : (
            <img src="/api/chatbox-pet/asset/pokemon-avatar.png" alt="" draggable={false} />
          )}
        </button>
      </div>
      {menuAnchor === null ? null : (
        <PetMenu
          anchor={menuAnchor}
          locale={typeof locale === 'function' ? locale() : 'zh'}
          onSay={sayLine}
          onAction={playAction}
          onQuip={(kind) => {
            void sayQuip(kind);
          }}
          recent={recentLines}
          onForget={() => {
            void saidStore.clear();
          }}
          onClose={() => setMenuAnchor(null)}
          t={t}
        />
      )}
    </div>
  );
}

/** Speaker icon, 16px grid, outline style, currentColor. */
function SpeakerIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z" />
      <path d="M10.1 6.3a2.6 2.6 0 0 1 0 3.4" />
      <path d="M11.9 4.7a4.9 4.9 0 0 1 0 6.6" />
    </svg>
  );
}

/** Muted speaker: the same body, waves replaced by a strike. */
function SpeakerSlashIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z" />
      <path d="M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2" />
    </svg>
  );
}
