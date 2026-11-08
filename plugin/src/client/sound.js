/**
 * Pet and boost sounds: WebAudio synthesis, no asset files.
 *
 * The design has two layers, because "a different sound for every state and
 * every prompt" has two different requirements:
 *
 *   1. STATE → TIMBRE FAMILY. Each work status owns a distinct instrument
 *      character (thinking = a soft high pup, working = mid double-tap,
 *      result = bright two-note bell, success = rising arpeggio, waiting =
 *      low questioning pulses, error = detuned low growl). You learn the
 *      sound before you look at the pet.
 *   2. PROMPT → VARIANT. Inside a family, the bubble text picks a variant
 *      deterministically (hash of the text), so the same line always sounds
 *      the same way — learnable, repeatable — while two different lines of
 *      the same state sound different. With no text (a bare status change) the
 *      variants rotate, so repeated states never feel mechanical.
 *
 * A third, invisible layer keeps repeats from sounding machine-made: every
 * note is detuned by a few cents, different each time.
 *
 * Autoplay discipline: the AudioContext is created lazily on the first user
 * gesture anywhere (unlock()); until then every play() is a silent no-op.
 * All failures are silent, the same contract as dsh-pet's click sound. The
 * kit is a factory so tests can drive it with a fake context; the browser
 * singleton is `petSound`.
 */

/** localStorage key for the toggle ('on' | 'off'; default 'on'). */
export const SOUND_PREF_KEY = 'chatboxPet.sound';

/** The Host's copy of the switch, read when the page has no local answer. */
let hostSoundDefault = true;

/** Master volume — present, never competing with speech or content. */
const MASTER_LEVEL = 0.3;

/** Repeats of the same sound inside this window collapse into one. */
export const SOUND_THROTTLE_MS = 1000;

/** How far a note may be detuned from its nominal pitch, in cents. */
const DETUNE_RANGE = 7;

/**
 * The recipes.
 *
 * A recipe is a list of variants; a variant is a list of notes. `level` is
 * relative to the master gain, `slideTo` bends the pitch across the note's
 * life, `detune` offsets it by cents.
 */
const RECIPES = {
  // thinking: a soft high pup — curious, not urgent.
  thinking: {
    variants: [
      { notes: [{ freq: 880, type: 'sine', at: 0, dur: 0.06, level: 0.9 }] },
      { notes: [{ freq: 987.77, type: 'sine', at: 0, dur: 0.055, level: 0.9 }] },
      { notes: [{ freq: 783.99, type: 'sine', at: 0, dur: 0.07, level: 0.85 }] },
    ],
  },
  // working: mid double-tap — busy, mechanical, two beats.
  working: {
    variants: [
      {
        notes: [
          { freq: 523.25, type: 'triangle', at: 0, dur: 0.05, level: 0.8 },
          { freq: 392, type: 'triangle', at: 0.09, dur: 0.05, level: 0.7 },
        ],
      },
      {
        notes: [
          { freq: 587.33, type: 'triangle', at: 0, dur: 0.045, level: 0.8 },
          { freq: 440, type: 'triangle', at: 0.08, dur: 0.045, level: 0.7 },
        ],
      },
    ],
  },
  // result: one step finished — a bright two-note bell.
  result: {
    variants: [
      {
        notes: [
          { freq: 659.25, type: 'sine', at: 0, dur: 0.09, level: 0.95 },
          { freq: 880, type: 'sine', at: 0.09, dur: 0.11, level: 0.85 },
        ],
      },
      {
        notes: [
          { freq: 698.46, type: 'sine', at: 0, dur: 0.08, level: 0.9 },
          { freq: 932.33, type: 'sine', at: 0.08, dur: 0.11, level: 0.82 },
        ],
      },
    ],
  },
  // success: everything finished — a rising arpeggio.
  success: {
    variants: [
      {
        notes: [
          { freq: 523.25, type: 'triangle', at: 0, dur: 0.08, level: 0.9 },
          { freq: 659.25, type: 'triangle', at: 0.07, dur: 0.08, level: 0.9 },
          { freq: 783.99, type: 'sine', at: 0.14, dur: 0.16, level: 0.95 },
        ],
      },
      {
        notes: [
          { freq: 587.33, type: 'triangle', at: 0, dur: 0.08, level: 0.9 },
          { freq: 739.99, type: 'triangle', at: 0.07, dur: 0.08, level: 0.9 },
          { freq: 880, type: 'sine', at: 0.14, dur: 0.16, level: 0.95 },
        ],
      },
    ],
  },
  // waiting: it needs the reader — two low pulses that lean down.
  waiting: {
    variants: [
      {
        notes: [
          { freq: 440, slideTo: 392, type: 'triangle', at: 0, dur: 0.1, level: 0.8 },
          { freq: 440, slideTo: 392, type: 'triangle', at: 0.18, dur: 0.1, level: 0.7 },
        ],
      },
      {
        notes: [
          { freq: 392, slideTo: 349.23, type: 'triangle', at: 0, dur: 0.11, level: 0.8 },
          { freq: 392, slideTo: 349.23, type: 'triangle', at: 0.2, dur: 0.11, level: 0.7 },
        ],
      },
    ],
  },
  // error: it failed — a low detuned growl, deliberately unpleasant.
  error: {
    variants: [
      {
        notes: [
          { freq: 164.81, type: 'sawtooth', at: 0, dur: 0.22, level: 0.32 },
          { freq: 155.56, type: 'sawtooth', at: 0.02, dur: 0.2, level: 0.26 },
        ],
      },
      {
        notes: [{ freq: 146.83, type: 'square', at: 0, dur: 0.18, level: 0.24 }],
      },
    ],
  },
  // cancelled: the task was stopped, not completed and not broken — a soft
  // descending "hmm", the sound of something put down rather than of failure.
  cancelled: {
    variants: [
      {
        notes: [
          { freq: 523.25, slideTo: 415.3, type: 'triangle', at: 0, dur: 0.16, level: 0.62 },
          { freq: 329.63, type: 'sine', at: 0.12, dur: 0.2, level: 0.45 },
        ],
      },
      {
        notes: [
          { freq: 466.16, slideTo: 349.23, type: 'triangle', at: 0, dur: 0.15, level: 0.58 },
          { freq: 293.66, type: 'sine', at: 0.11, dur: 0.2, level: 0.42 },
        ],
      },
    ],
  },
  // click: the pet was tapped — a pop with a quick pitch drop.
  click: {
    variants: [
      { notes: [{ freq: 950, slideTo: 320, type: 'triangle', at: 0, dur: 0.055, level: 0.9 }] },
      { notes: [{ freq: 1100, slideTo: 360, type: 'triangle', at: 0, dur: 0.05, level: 0.85 }] },
    ],
  },
  // notify: the super agent pushed a finding — a struck bell pair.
  notify: {
    variants: [
      {
        notes: [
          { freq: 1046.5, type: 'sine', at: 0, dur: 0.12, level: 0.9 },
          { freq: 1567.98, type: 'sine', at: 0.1, dur: 0.22, level: 0.85 },
        ],
      },
      {
        notes: [
          { freq: 1174.66, type: 'sine', at: 0, dur: 0.12, level: 0.9 },
          { freq: 1567.98, type: 'sine', at: 0.1, dur: 0.22, level: 0.85 },
        ],
      },
    ],
  },
  // sleep: the pet dozed off — a slow breath.
  sleep: {
    variants: [
      {
        notes: [
          { freq: 196, type: 'sine', at: 0, dur: 0.5, level: 0.35 },
          { freq: 203, type: 'sine', at: 0.05, dur: 0.45, level: 0.3 },
        ],
      },
    ],
  },
  // wake: the pet woke up — one rising blip.
  wake: {
    variants: [
      { notes: [{ freq: 440, slideTo: 880, type: 'sine', at: 0, dur: 0.14, level: 0.75 }] },
    ],
  },
  // cheer: the pet is happy — a quick triplet.
  cheer: {
    variants: [
      {
        notes: [
          { freq: 783.99, type: 'triangle', at: 0, dur: 0.05, level: 0.85 },
          { freq: 987.77, type: 'triangle', at: 0.06, dur: 0.05, level: 0.85 },
          { freq: 1318.51, type: 'sine', at: 0.12, dur: 0.14, level: 0.9 },
        ],
      },
    ],
  },
  // pout: the pet was scolded — a soft descending sigh, not an alarm.
  pout: {
    variants: [
      {
        notes: [
          { freq: 392, slideTo: 293.66, type: 'triangle', at: 0, dur: 0.18, level: 0.55 },
          { freq: 261.63, type: 'sine', at: 0.16, dur: 0.22, level: 0.4 },
        ],
      },
    ],
  },
  // boostStart: the rewrite begins — one tiny tick, barely there.
  boostStart: {
    variants: [
      { notes: [{ freq: 1567.98, type: 'sine', at: 0, dur: 0.03, level: 0.35 }] },
    ],
  },
  // boostDone: the rewrite landed — a glassy pair, softer than success.
  boostDone: {
    variants: [
      {
        notes: [
          { freq: 783.99, type: 'sine', at: 0, dur: 0.08, level: 0.55 },
          { freq: 1174.66, type: 'sine', at: 0.07, dur: 0.14, level: 0.5 },
        ],
      },
      {
        notes: [
          { freq: 659.25, type: 'sine', at: 0, dur: 0.08, level: 0.55 },
          { freq: 987.77, type: 'sine', at: 0.07, dur: 0.14, level: 0.5 },
        ],
      },
    ],
  },
  // boostFail: the rewrite failed — a muted thud, never an alarm.
  boostFail: {
    variants: [
      { notes: [{ freq: 233.08, type: 'sine', at: 0, dur: 0.14, level: 0.32 }] },
    ],
  },
};

/**
 * Every sound the kit can play.
 *
 * Exported so a test can prove that the three end-sounds (success, error,
 * cancelled) are three different recipes and not three names for one sound.
 */
export const SOUND_NAMES = Object.freeze(Object.keys(RECIPES));

/** Status → sound name. Idle is deliberately absent: the loop stays silent. */
export const SOUND_FOR_STATUS = {
  thinking: 'thinking',
  working: 'working',
  result: 'result',
  success: 'success',
  waiting: 'waiting',
  error: 'error',
};

/**
 * The sound for one transition.
 *
 * A cancelled task and a failed task share the `error` status but must not
 * share a sound: one is something put down, the other is something broken.
 * @param {string} status - the status the pet moved to.
 * @param {string} [detail] - the turn outcome ('completed' | 'failed' | 'cancelled').
 * @returns {string} the sound name.
 */
export function soundForTransition(status, detail) {
  if (status === 'error') return detail === 'cancelled' ? 'cancelled' : 'error';
  return SOUND_FOR_STATUS[status];
}

/**
 * Read the sound preference. Anything but an explicit 'off' means on.
 * @param {Storage|undefined} storage
 * @returns {'on'|'off'}
 */
export function readSoundPref(storage) {
  try {
    return storage?.getItem(SOUND_PREF_KEY) === 'off' ? 'off' : 'on';
  } catch {
    return 'on';
  }
}

/**
 * Tell the kit what the Host's switch says, for a page that has no local
 * answer yet (a fresh browser profile, or a preference changed elsewhere).
 * @param {boolean} enabled - whether sound is on in the Host's file.
 * @returns {void}
 */
export function setHostSoundDefault(enabled) {
  hostSoundDefault = enabled !== false;
}

/**
 * Persist the sound preference.
 * @param {Storage|undefined} storage
 * @param {'on'|'off'} value
 */
export function writeSoundPref(storage, value) {
  try {
    storage?.setItem(SOUND_PREF_KEY, value === 'off' ? 'off' : 'on');
  } catch {
    // Private mode or a blocked store: the toggle still works in memory.
  }
}

/**
 * Flip the preference and persist it.
 * @param {Storage|undefined} storage
 * @returns {'on'|'off'} the new value.
 */
export function toggleSoundPref(storage) {
  const next = readSoundPref(storage) === 'on' ? 'off' : 'on';
  writeSoundPref(storage, next);
  return next;
}

/**
 * The page's localStorage, or undefined when blocked.
 * @returns {Storage|undefined}
 */
export function safeStorage() {
  try {
    return typeof window === 'undefined' ? undefined : window.localStorage;
  } catch {
    return undefined;
  }
}

/**
 * A stable hash of a text, used to pick a variant deterministically.
 * @param {string} value - the text.
 * @returns {number} a non-negative integer.
 */
export function hashText(value) {
  let hash = 2166136261;
  const text = String(value ?? '');
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/**
 * Create a sound kit.
 * @param {{getPref: () => string, isVisible: () => boolean,
 *          createContext: () => any, now?: () => number}} env
 * @returns {{play: (name: string, seed?: string) => boolean, unlock: () => void,
 *            isUnlocked: () => boolean, recipeNames: () => string[]}}
 */
export function createSoundKit(env) {
  const now = env.now ?? (() => Date.now());
  let ctx = null;
  let master = null;
  let unlocked = false;
  const lastPlayAt = new Map();
  const rotations = new Map();
  let detuneStep = 0;

  /**
   * Create/resume the AudioContext. Idempotent; a failed attempt leaves the
   * kit locked so a later gesture can retry. Called from user-gesture
   * listeners only.
   */
  function unlock() {
    if (unlocked) return;
    try {
      const created = env.createContext();
      if (created === null || created === undefined) return;
      const gain = created.createGain();
      gain.gain.value = MASTER_LEVEL;
      gain.connect(created.destination);
      if (created.state === 'suspended' && typeof created.resume === 'function') {
        const resumed = created.resume();
        if (resumed !== undefined && typeof resumed.catch === 'function') resumed.catch(() => {});
      }
      ctx = created;
      master = gain;
      unlocked = true;
    } catch {
      ctx = null;
      master = null;
      unlocked = false;
    }
  }

  /**
   * Pick the variant for one play.
   *
   * With a seed (the prompt that is being spoken) the choice is stable: the
   * same line always sounds the same. Without one the variants rotate, so two
   * consecutive bare status changes never sound identical.
   * @param {string} name - the recipe name.
   * @param {number} count - how many variants the recipe has.
   * @param {string} [seed] - the prompt text.
   * @returns {number} the variant index.
   */
  function pickVariant(name, count, seed) {
    if (count <= 1) return 0;
    if (typeof seed === 'string' && seed !== '') return hashText(seed) % count;
    const rotation = (rotations.get(name) ?? 0) % count;
    rotations.set(name, rotation + 1);
    return rotation;
  }

  /**
   * Play one named sound. Silent no-op when the pref is off, the kit is
   * locked, the page is hidden, or the same sound played <1s ago.
   * @param {string} name - a RECIPES key.
   * @param {string} [seed] - the prompt text that chooses the variant.
   * @returns {boolean} true when a sound was actually scheduled.
   */
  function play(name, seed) {
    if (env.getPref() !== 'on') return false;
    if (!unlocked || ctx === null || master === null) return false;
    if (!env.isVisible()) return false;
    const recipe = RECIPES[name];
    if (recipe === undefined) return false;
    const at = now();
    const last = lastPlayAt.get(name);
    if (last !== undefined && at - last < SOUND_THROTTLE_MS) return false;
    lastPlayAt.set(name, at);
    const variants = Array.isArray(recipe.variants) ? recipe.variants : [];
    if (variants.length === 0) return false;
    const variant = variants[pickVariant(name, variants.length, seed)];
    detuneStep = (detuneStep + 1) % 7;
    const cents = (detuneStep - 3) * (DETUNE_RANGE / 3);
    try {
      render(ctx, master, variant, cents);
      return true;
    } catch {
      return false;
    }
  }

  return {
    play,
    unlock,
    isUnlocked: () => unlocked,
    recipeNames: () => Object.keys(RECIPES),
  };
}

/**
 * Schedule one variant through the master gain: per-note oscillator with an
 * exponential-decay envelope.
 * @param {any} ctx - the AudioContext.
 * @param {any} master - the master GainNode.
 * @param {{notes: Array}} variant
 * @param {number} cents - the detune applied to every note.
 */
function render(ctx, master, variant, cents) {
  const base = ctx.currentTime;
  for (const note of variant.notes) {
    const start = base + note.at;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = note.type;
    osc.frequency.setValueAtTime(note.freq, start);
    if (typeof note.slideTo === 'number') {
      osc.frequency.exponentialRampToValueAtTime(note.slideTo, start + note.dur);
    }
    if (cents !== 0 && typeof osc.detune === 'object' && osc.detune !== null) {
      osc.detune.setValueAtTime(cents, start);
    }
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(note.level, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + note.dur);
    osc.connect(gain);
    gain.connect(master);
    osc.start(start);
    osc.stop(start + note.dur + 0.02);
  }
}

/**
 * The live browser environment. Every member is lazy: importing this module
 * never touches window or creates an AudioContext.
 */
function browserEnv() {
  return {
    getPref: () => {
      // The page's own answer wins; the Host's file is the fallback.
      const stored = safeStorage()?.getItem(SOUND_PREF_KEY);
      if (stored === 'on' || stored === 'off') return stored;
      return hostSoundDefault ? 'on' : 'off';
    },
    isVisible: () => {
      try {
        return document.visibilityState === 'visible';
      } catch {
        return true;
      }
    },
    createContext: () => {
      const Ctor = window.AudioContext ?? window.webkitAudioContext;
      return typeof Ctor === 'function' ? new Ctor() : null;
    },
    now: () => Date.now(),
  };
}

/** The singleton the pet and the boost store play through. */
export const petSound = createSoundKit(browserEnv());
