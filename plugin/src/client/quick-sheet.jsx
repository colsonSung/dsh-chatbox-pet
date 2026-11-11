/**
 * The four workbenches behind the "更多" panel.
 *
 * Each shortcut that can actually produce something opens a sheet here:
 *
 *   录音转写  record (or drop) audio → local faster-whisper → text in the composer
 *   帮我写作  genre + topic → the Host model writes a draft → composer
 *   PPT 生成  topic + audience + size → model outlines → python-pptx → .pptx file
 *   视频理解  a link or a dropped file → a ready-to-run video_read instruction
 *
 * The remaining shortcuts (image / video / music) only fill a prompt: they need
 * a model or a service this machine does not have, and pretending otherwise
 * would be worse than saying so.
 */
import * as React from 'react';
import { createPortal } from 'react-dom';

const API = '/api/chatbox-pet';

/** Genres offered by 帮我写作; ids match src/host/write/draft.js. */
const GENRES = [
  { id: 'email', zh: '邮件', en: 'Email' },
  { id: 'update', zh: '进展更新', en: 'Update' },
  { id: 'prd', zh: 'PRD 摘要', en: 'PRD' },
  { id: 'copy', zh: '产品文案', en: 'Copy' },
];

/** Deck sizes offered by PPT 生成. */
const SIZES = [
  { id: 6, zh: '6 页', en: '6 slides' },
  { id: 10, zh: '10 页', en: '10 slides' },
  { id: 14, zh: '14 页', en: '14 slides' },
];

/**
 * POST JSON and unwrap the Host envelope.
 * @param {string} path - route below the plugin base.
 * @param {object} body - JSON body.
 * @returns {Promise<any>} the result, or throws with the reader-facing message.
 */
async function postJson(path, body) {
  const response = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error(`服务没有返回 JSON（HTTP ${response.status}）`);
  }
  if (payload?.ok !== true) throw new Error(payload?.error?.message ?? `请求失败（HTTP ${response.status}）`);
  return payload.result;
}

/**
 * Write text into the composer through the slot's own action face.
 * @param {any} inputActions - the Host composer actions.
 * @param {string} text - the text to place in the draft.
 * @returns {boolean} whether the write landed.
 */
export function fillDraft(inputActions, text) {
  if (typeof inputActions?.setDraft !== 'function') return false;
  try {
    inputActions.setDraft({ text, references: [] });
    return true;
  } catch {
    try {
      inputActions.setDraft(text);
      return true;
    } catch {
      return false;
    }
  }
}

/** The sheet shell: glass surface, title, body, and a footer line. */
function Sheet({ title, hint, onClose, children, t }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
    };
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [onClose]);

  return createPortal(
    <div className="cbp-sheet-veil" data-cbp-sheet="true" onMouseDown={(event) => event.stopPropagation()}>
      <div className="cbp-sheet" role="dialog" aria-modal="true" aria-label={title} ref={ref}>
        <div className="cbp-sheet-head">
          <span className="cbp-sheet-title">{title}</span>
          <button type="button" className="cbp-sheet-close" aria-label={t('sheet.close')} onClick={onClose}>
            ✕
          </button>
        </div>
        {hint ? <p className="cbp-sheet-hint">{hint}</p> : null}
        <div className="cbp-sheet-body">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

/** 录音转写. */
export function TranscribeSheet({ onClose, onFill, t, locale }) {
  const [phase, setPhase] = React.useState('idle');
  const [seconds, setSeconds] = React.useState(0);
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState('');
  const recorderRef = React.useRef(null);
  const chunksRef = React.useRef([]);
  const timerRef = React.useRef(0);

  const stopTimer = () => {
    if (timerRef.current !== 0) {
      clearInterval(timerRef.current);
      timerRef.current = 0;
    }
  };

  React.useEffect(() => () => {
    stopTimer();
    try {
      recorderRef.current?.stream?.getTracks?.().forEach((track) => track.stop());
    } catch {
      // The stream is already gone.
    }
  }, []);

  /**
   * Send the recorded blob to the Host and show the transcript.
   * @param {Blob} blob - the recording.
   * @returns {Promise<void>} resolves when done.
   */
  const transcribe = async (blob) => {
    setPhase('working');
    setError('');
    try {
      const response = await fetch(`${API}/transcribe?name=recording.webm`, {
        method: 'POST',
        headers: { 'content-type': blob.type || 'audio/webm' },
        body: blob,
      });
      const payload = await response.json();
      if (payload?.ok !== true) throw new Error(payload?.error?.message ?? '转写失败');
      setResult(payload.result);
      setPhase('done');
    } catch (failure) {
      setError(String(failure?.message ?? failure));
      setPhase('idle');
    }
  };

  const start = async () => {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data?.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        stopTimer();
        stream.getTracks().forEach((track) => track.stop());
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        void transcribe(blob);
      };
      recorderRef.current = recorder;
      recorder.start();
      setSeconds(0);
      setPhase('recording');
      timerRef.current = setInterval(() => setSeconds((value) => value + 1), 1000);
    } catch (failure) {
      const denied = failure?.name === 'NotAllowedError' || failure?.name === 'SecurityError';
      setError(denied ? t('sheet.transcribe.denied') : String(failure?.message ?? failure));
    }
  };

  const stop = () => {
    setPhase('working');
    try {
      recorderRef.current?.stop();
    } catch {
      stopTimer();
      setPhase('idle');
    }
  };

  const mmss = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <Sheet title={t('sheet.transcribe.title')} hint={t('sheet.transcribe.hint')} onClose={onClose} t={t}>
      {result === null ? (
        <>
          <div className="cbp-sheet-center">
            <button
              type="button"
              className="cbp-rec"
              data-cbp-rec={phase}
              aria-label={phase === 'recording' ? t('sheet.transcribe.stop') : t('sheet.transcribe.start')}
              onClick={phase === 'recording' ? stop : start}
              disabled={phase === 'working'}
            >
              <span className="cbp-rec-dot" />
            </button>
            <span className="cbp-rec-time">{phase === 'recording' ? mmss : phase === 'working' ? t('sheet.transcribe.working') : t('sheet.transcribe.idle')}</span>
          </div>
          <label className="cbp-sheet-file">
            <input
              type="file"
              accept="audio/*,video/*"
              data-cbp-audio-file="true"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void transcribe(file);
                event.target.value = '';
              }}
            />
            <span>{t('sheet.transcribe.pick')}</span>
          </label>
        </>
      ) : (
        <>
          <div className="cbp-sheet-meta">
            {t('sheet.transcribe.meta')(result.segments?.length ?? 0, result.language ?? '—', result.durationSeconds ?? 0)}
          </div>
          <pre className="cbp-sheet-pre" data-cbp-transcript="true">{result.text || t('sheet.transcribe.empty')}</pre>
          <div className="cbp-sheet-actions">
            <button type="button" className="cbp-btn cbp-btn-primary" onClick={() => onFill(result.text)}>
              {t('sheet.fill')}
            </button>
            <button type="button" className="cbp-btn" onClick={() => { setResult(null); setPhase('idle'); }}>
              {t('sheet.again')}
            </button>
          </div>
        </>
      )}
      {error ? <p className="cbp-sheet-error">{error}</p> : null}
    </Sheet>
  );
}

/** 帮我写作. */
export function WriteSheet({ onClose, onFill, t, locale, sessionId = '' }) {
  const [genre, setGenre] = React.useState('update');
  const [topic, setTopic] = React.useState('');
  const [tone, setTone] = React.useState('');
  const [phase, setPhase] = React.useState('idle');
  const [result, setResult] = React.useState('');
  const [error, setError] = React.useState('');

  const generate = async () => {
    setPhase('working');
    setError('');
    try {
      const result = await postJson('/write', { genre, topic, tone, locale: locale(), session: sessionId });
      setResult(result.text);
      setPhase('done');
    } catch (failure) {
      setError(String(failure?.message ?? failure));
      setPhase('idle');
    }
  };

  return (
    <Sheet title={t('sheet.write.title')} hint={t('sheet.write.hint')} onClose={onClose} t={t}>
      <div className="cbp-chips">
        {GENRES.map((item) => (
          <button
            key={item.id}
            type="button"
            className="cbp-chip"
            data-cbp-genre={item.id}
            aria-pressed={genre === item.id ? 'true' : 'false'}
            onClick={() => setGenre(item.id)}
          >
            {locale() === 'en' ? item.en : item.zh}
          </button>
        ))}
      </div>
      <input
        className="cbp-input"
        data-cbp-write-topic="true"
        placeholder={t('sheet.write.topic')}
        value={topic}
        maxLength={200}
        onChange={(event) => setTopic(event.target.value)}
      />
      <input
        className="cbp-input"
        data-cbp-write-tone="true"
        placeholder={t('sheet.write.tone')}
        value={tone}
        maxLength={80}
        onChange={(event) => setTone(event.target.value)}
      />
      {result === '' ? (
        <div className="cbp-sheet-actions">
          <button
            type="button"
            className="cbp-btn cbp-btn-primary"
            data-cbp-write-go="true"
            disabled={phase === 'working' || topic.trim() === ''}
            onClick={generate}
          >
            {phase === 'working' ? t('sheet.working') : t('sheet.write.go')}
          </button>
        </div>
      ) : (
        <>
          <pre className="cbp-sheet-pre" data-cbp-written="true">{result}</pre>
          <div className="cbp-sheet-actions">
            <button type="button" className="cbp-btn cbp-btn-primary" onClick={() => onFill(result)}>
              {t('sheet.fill')}
            </button>
            <button type="button" className="cbp-btn" onClick={() => setResult('')}>
              {t('sheet.again')}
            </button>
          </div>
        </>
      )}
      {error ? <p className="cbp-sheet-error">{error}</p> : null}
    </Sheet>
  );
}

/** PPT 生成. */
export function DeckSheet({ onClose, t, locale, sessionId = '' }) {
  const [topic, setTopic] = React.useState('');
  const [audience, setAudience] = React.useState('');
  const [pages, setPages] = React.useState(10);
  const [phase, setPhase] = React.useState('idle');
  const [deck, setDeck] = React.useState(null);
  const [error, setError] = React.useState('');

  const generate = async () => {
    setPhase('working');
    setError('');
    try {
      const result = await postJson('/deck', { topic, audience, pages, locale: locale(), session: sessionId });
      setDeck(result);
      setPhase('done');
    } catch (failure) {
      setError(String(failure?.message ?? failure));
      setPhase('idle');
    }
  };

  /**
   * Hand the generated file to the browser's download shelf.
   * @returns {void}
   */
  const download = () => {
    if (!deck?.base64) return;
    const bytes = Uint8Array.from(atob(deck.base64), (char) => char.charCodeAt(0));
    const blob = new Blob([bytes], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = deck.name || 'deck.pptx';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  };

  return (
    <Sheet title={t('sheet.deck.title')} hint={t('sheet.deck.hint')} onClose={onClose} t={t}>
      {deck === null ? (
        <>
          <input
            className="cbp-input"
            data-cbp-deck-topic="true"
            placeholder={t('sheet.deck.topic')}
            value={topic}
            maxLength={200}
            onChange={(event) => setTopic(event.target.value)}
          />
          <input
            className="cbp-input"
            data-cbp-deck-audience="true"
            placeholder={t('sheet.deck.audience')}
            value={audience}
            maxLength={120}
            onChange={(event) => setAudience(event.target.value)}
          />
          <div className="cbp-chips">
            {SIZES.map((size) => (
              <button
                key={size.id}
                type="button"
                className="cbp-chip"
                data-cbp-size={size.id}
                aria-pressed={pages === size.id ? 'true' : 'false'}
                onClick={() => setPages(size.id)}
              >
                {locale() === 'en' ? size.en : size.zh}
              </button>
            ))}
          </div>
          <div className="cbp-sheet-actions">
            <button
              type="button"
              className="cbp-btn cbp-btn-primary"
              data-cbp-deck-go="true"
              disabled={phase === 'working' || topic.trim() === ''}
              onClick={generate}
            >
              {phase === 'working' ? t('sheet.deck.working') : t('sheet.deck.go')}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="cbp-deck-card" data-cbp-deck-result="true">
            <div className="cbp-deck-title">{deck.title || topic}</div>
            <div className="cbp-deck-meta">{t('sheet.deck.meta')(deck.slides ?? 0)}</div>
            <div className="cbp-deck-path" title={deck.path}>{deck.path}</div>
          </div>
          <div className="cbp-sheet-actions">
            <button type="button" className="cbp-btn cbp-btn-primary" data-cbp-deck-download="true" onClick={download}>
              {t('sheet.deck.download')}
            </button>
            <button type="button" className="cbp-btn" onClick={() => setDeck(null)}>
              {t('sheet.again')}
            </button>
          </div>
        </>
      )}
      {error ? <p className="cbp-sheet-error">{error}</p> : null}
    </Sheet>
  );
}

/** 视频理解: prepare a video_read instruction for a link or a dropped file. */
export function VideoSheet({ onClose, onFill, t }) {
  const [link, setLink] = React.useState('');

  const go = () => {
    const clean = link.trim();
    onFill(clean === '' ? t('sheet.video.prompt') : t('sheet.video.promptWith')(clean));
  };

  return (
    <Sheet title={t('sheet.video.title')} hint={t('sheet.video.hint')} onClose={onClose} t={t}>
      <input
        className="cbp-input"
        data-cbp-video-link="true"
        placeholder={t('sheet.video.placeholder')}
        value={link}
        maxLength={500}
        onChange={(event) => setLink(event.target.value)}
      />
      <div className="cbp-sheet-actions">
        <button type="button" className="cbp-btn cbp-btn-primary" data-cbp-video-go="true" onClick={go}>
          {t('sheet.video.go')}
        </button>
      </div>
    </Sheet>
  );
}

/** The stylesheet for every sheet and control above. */
export const SHEET_CSS = `
.cbp-sheet-veil{
  position:fixed;
  inset:0;
  z-index:80;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  background:color-mix(in oklab,#0b0c0f 32%,transparent);
  -webkit-backdrop-filter:blur(3px);
  backdrop-filter:blur(3px);
  animation:cbp-sheet-fade 140ms ease;
}
@keyframes cbp-sheet-fade{from{opacity:0}to{opacity:1}}
.cbp-sheet{
  box-sizing:border-box;
  width:min(520px,100%);
  max-height:min(76vh,640px);
  overflow:auto;
  padding:18px 18px 16px;
  border-radius:20px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 10%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 55%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 78%,transparent);
  -webkit-backdrop-filter:blur(28px) saturate(180%);
  backdrop-filter:blur(28px) saturate(180%);
  box-shadow:0 24px 60px -18px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 40%,transparent),0 4px 12px -4px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 16%,transparent);
  animation:cbp-sheet-in 160ms cubic-bezier(.23,1,.32,1);
}
body[data-ds-dark-theme] .cbp-sheet{
  background:color-mix(in oklab,#1b1b1e 86%,transparent);
  border-color:color-mix(in oklab,#ffffff 13%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 22%,transparent);
  box-shadow:0 24px 60px -18px rgba(0,0,0,.65),0 4px 12px -4px rgba(0,0,0,.35);
}
@keyframes cbp-sheet-in{from{opacity:0;transform:translateY(6px) scale(.99)}to{opacity:1;transform:none}}
.cbp-sheet-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}
.cbp-sheet-title{
  color:var(--dsw-alias-label-primary);
  font-size:15px;
  font-weight:600;
}
.cbp-sheet-close{
  border:0;
  background:transparent;
  color:var(--dsw-alias-label-tertiary);
  font-size:13px;
  line-height:1;
  padding:6px 8px;
  border-radius:8px;
  cursor:pointer;
}
.cbp-sheet-close:hover{
  background:color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
  color:var(--dsw-alias-label-primary);
}
.cbp-sheet-hint{
  margin:6px 0 14px;
  color:var(--dsw-alias-label-tertiary);
  font-size:11.5px;
  line-height:1.5;
}
.cbp-sheet-body{display:flex;flex-direction:column;gap:10px;}
.cbp-sheet-center{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  padding:10px 0 4px;
}
.cbp-rec{
  width:64px;
  height:64px;
  border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay) 60%,transparent);
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:transform 120ms ease,background-color 120ms ease,border-color 120ms ease;
}
.cbp-rec:hover{transform:scale(1.03)}
.cbp-rec[data-cbp-rec="recording"]{
  background:color-mix(in oklab,#e5484d 14%,transparent);
  border-color:color-mix(in oklab,#e5484d 45%,transparent);
}
.cbp-rec-dot{
  width:20px;
  height:20px;
  border-radius:999px;
  background:#e5484d;
  transition:border-radius 140ms ease,width 140ms ease,height 140ms ease;
}
.cbp-rec[data-cbp-rec="recording"] .cbp-rec-dot{
  width:14px;
  height:14px;
  border-radius:4px;
}
.cbp-rec-time{
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  font-variant-numeric:tabular-nums;
}
.cbp-sheet-file{
  display:flex;
  justify-content:center;
  color:var(--dsw-alias-label-tertiary);
  font-size:11.5px;
  cursor:pointer;
}
.cbp-sheet-file input{display:none}
.cbp-sheet-file span{text-decoration:underline;text-underline-offset:2px}
.cbp-sheet-meta{
  color:var(--dsw-alias-label-tertiary);
  font-size:11px;
}
.cbp-sheet-pre{
  margin:0;
  max-height:260px;
  overflow:auto;
  padding:12px;
  border-radius:12px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-base,#f6f7f9) 60%,transparent);
  color:var(--dsw-alias-label-primary);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:12px;
  line-height:1.6;
  white-space:pre-wrap;
  word-break:break-word;
}
.cbp-sheet-actions{
  display:flex;
  gap:8px;
  justify-content:flex-end;
  padding-top:2px;
}
.cbp-btn{
  height:32px;
  padding:0 14px;
  border-radius:10px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:500;
  cursor:pointer;
  transition:background-color 120ms ease,opacity 120ms ease;
}
.cbp-btn:hover{background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent)}
.cbp-btn:disabled{opacity:.45;cursor:default}
/*
 * The primary button carries its own accent instead of the Host brand token:
 * in this shell that token resolves to the page text colour, which painted a
 * white button with white text (measured 2026-11-11).
 */
.cbp-btn-primary{
  background:#635BFF;
  border-color:transparent;
  color:#fff;
}
.cbp-btn-primary:hover{background:#5149E6}
.cbp-btn-primary:disabled{background:#635BFF;opacity:.5}
.cbp-input{
  height:38px;
  padding:0 12px;
  border-radius:11px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-base,#f6f7f9) 55%,transparent);
  color:var(--dsw-alias-label-primary);
  font-size:13px;
  outline:none;
}
.cbp-input:focus{border-color:color-mix(in oklab,var(--dsw-alias-brand-primary,#635BFF) 55%,transparent)}
.cbp-input::placeholder{color:var(--dsw-alias-label-tertiary)}
.cbp-chips{display:flex;gap:6px;flex-wrap:wrap}
.cbp-chip{
  height:28px;
  padding:0 11px;
  border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  cursor:pointer;
}
.cbp-chip[aria-pressed="true"]{
  border-color:color-mix(in oklab,var(--dsw-alias-brand-primary,#635BFF) 50%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-brand-primary,#635BFF) 12%,transparent);
  color:var(--dsw-alias-label-primary);
}
.cbp-sheet-error{
  margin:2px 0 0;
  color:var(--dsw-alias-state-error-primary,#e5484d);
  font-size:11.5px;
  line-height:1.5;
}
.cbp-deck-card{
  padding:14px;
  border-radius:14px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-base,#f6f7f9) 55%,transparent);
  display:flex;
  flex-direction:column;
  gap:4px;
}
.cbp-deck-title{font-size:14px;font-weight:600;color:var(--dsw-alias-label-primary)}
.cbp-deck-meta{font-size:11.5px;color:var(--dsw-alias-label-secondary)}
.cbp-deck-path{
  font-size:10.5px;
  color:var(--dsw-alias-label-tertiary);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
@media (prefers-reduced-motion: reduce){
  .cbp-sheet-veil,.cbp-sheet{animation:none}
}
`;
