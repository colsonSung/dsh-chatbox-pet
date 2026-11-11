/**
 * Kokoro, the studio-quality local voice.
 *
 * This machine already has Kokoro 82M installed for the Reader
 * (~/.dsh/reader/tts-venv). The same model answers here, so a dictionary word
 * is spoken by a narrator instead of a system robot. The service is optional:
 * when the venv or the model is missing, speak.js falls back to \`say\`.
 *
 * The model loads once and the process stays warm; it exits by itself after a
 * quiet period (see kokoro-server.py), so no speech process outlives the app.
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** The interpreter the Reader installed Kokoro into. */
export const KOKORO_PYTHON = path.join(homedir(), '.dsh', 'reader', 'tts-venv', 'bin', 'python');

/** The server script shipped inside this plugin. */
const SERVER_SCRIPT = fileURLToPath(new URL('./kokoro-server.py', import.meta.url));

/** Voice per accent. Only these accents are available from the local model. */
export const KOKORO_VOICES = { 'en-US': 'af_heart', 'en-GB': 'bf_emma' };

/** A cold start loads the model; 90 s is generous, a hang is not. */
const START_TIMEOUT_MS = 90_000;
/** One word should come back in a second or two. */
const SYNTH_TIMEOUT_MS = 30_000;
/** After a failed start, do not retry for a while. */
const COOLDOWN_MS = 120_000;

/** The running service, if any. */
let service = null;
/** When the last failure happened. */
let failedAt = 0;

/**
 * Is the local speech model installed?
 * @returns {boolean} true when the interpreter exists.
 */
export function isKokoroInstalled() {
  return existsSync(KOKORO_PYTHON) && existsSync(SERVER_SCRIPT);
}

/**
 * Whether this accent can be served by Kokoro at all.
 * @param {string} accent - en-US | en-GB | zh-CN.
 * @returns {boolean} true when the local model has that accent.
 */
export function kokoroSupports(accent) {
  return Object.prototype.hasOwnProperty.call(KOKORO_VOICES, accent);
}

/**
 * Start the service once and remember its port.
 * @returns {Promise<{port: number}>} the running service.
 * @throws {Error} when it cannot start.
 */
async function ensureService() {
  if (service !== null && !service.child.killed) return service;
  if (Date.now() - failedAt < COOLDOWN_MS) throw new Error('kokoro cooling down after a failure');
  if (!isKokoroInstalled()) {
    failedAt = Date.now();
    throw new Error('kokoro is not installed');
  }

  const child = spawn(KOKORO_PYTHON, [SERVER_SCRIPT, '--port', '0', '--idle-seconds', '300'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const started = { child, port: 0 };

  const port = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('kokoro did not report a port')), START_TIMEOUT_MS);
    let buffer = '';
    child.stdout.on('data', (chunk) => {
      buffer += String(chunk);
      const match = /port=(\d+)/.exec(buffer);
      if (match !== null) {
        clearTimeout(timer);
        resolve(Number(match[1]));
      }
    });
    child.stderr.on('data', () => {});
    child.on('error', (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on('exit', (code) => {
      clearTimeout(timer);
      reject(new Error('kokoro exited with ' + code));
    });
  }).catch((error) => {
    child.kill();
    failedAt = Date.now();
    throw error;
  });

  child.on('exit', () => {
    if (service !== null && service.child === child) service = null;
  });
  started.port = port;
  service = started;
  return started;
}

/**
 * Speak one text with Kokoro.
 * @param {object} input - the request.
 * @param {string} input.text - what to say.
 * @param {string} input.accent - en-US or en-GB.
 * @returns {Promise<Buffer>} a 24 kHz mono WAV.
 * @throws {Error} when the service cannot answer.
 */
export async function synthesize({ text, accent }) {
  const running = await ensureService();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SYNTH_TIMEOUT_MS);
  try {
    const response = await fetch('http://127.0.0.1:' + running.port + '/synthesize', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text, voice: KOKORO_VOICES[accent] ?? KOKORO_VOICES['en-US'], speed: 1.0 }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error('kokoro returned HTTP ' + response.status);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 1000) throw new Error('kokoro returned an empty clip');
    return bytes;
  } finally {
    clearTimeout(timer);
  }
}

/** Forget the service (used when it dies or by tests). */
export function resetKokoro() {
  if (service !== null) {
    try {
      service.child.kill();
    } catch {
      // already gone
    }
  }
  service = null;
}
