/**
 * The "更多" seat: one ghost chip in the composer's bottom tool row, immediately
 * to the left of the model selector, that opens a panel of shortcuts
 * (录音转写 / 图像生成 / 帮我写作 / …).
 *
 * Placement: the seat renders in the Host's `conversation.input.right` list,
 * which the composer lays out immediately before `conversation.input.model`
 * (verified in the running build's Conversation bundle: `standardControls`
 * renders `input.right` then `input.model`). The seat therefore renders in
 * flow — no portal, no absolute positioning, and no padding reserved on the
 * editor. Geometry follows the row it lives in: 28px tall, 13px/500 text,
 * `--dsw-radius-sm`, hover fill — the same chrome as the Host's own
 * `.select` controls beside it.
 *
 * What a shortcut does: it writes the template into the composer draft and
 * closes. It never sends and never starts a request — the reader still presses
 * send after editing.
 *
 * The catalogue is data (see quick-actions.js); adding a shortcut later means
 * adding one object there, never touching the component.
 */
import * as React from 'react';
import { createPortal } from 'react-dom';

import { pick, QUICK_ACTIONS } from './quick-actions.js';
import { DeckSheet, fillDraft, Sheet, TranscribeSheet, VideoSheet, WriteSheet } from './quick-sheet.jsx';
import { TranslateWorkbench } from './translate/page.jsx';

/**
 * One 16×16 glyph on a 1px stroke grid, matching the Host's composer icons.
 * @param {object} props - `{ name }`.
 * @returns {object} the svg element.
 */
function Icon({ name }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: '0 0 16 16',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.3,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };
  switch (name) {
    case 'mic':
      return (
        <svg {...common}>
          <rect x="6" y="2.2" width="4" height="7" rx="2" />
          <path d="M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4" />
        </svg>
      );
    case 'image':
      return (
        <svg {...common}>
          <rect x="2.2" y="3.2" width="11.6" height="9.6" rx="2" />
          <circle cx="6" cy="6.6" r="1.2" />
          <path d="M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2" />
        </svg>
      );
    case 'pen':
      return (
        <svg {...common}>
          <path d="M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z" />
          <path d="M9.6 4.6 11.4 6.4" />
        </svg>
      );
    case 'video':
      return (
        <svg {...common}>
          <rect x="2.2" y="4.2" width="8.4" height="7.6" rx="2" />
          <path d="M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z" />
        </svg>
      );
    case 'film':
      return (
        <svg {...common}>
          <rect x="2.2" y="3.2" width="11.6" height="9.6" rx="2" />
          <path d="M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2" />
        </svg>
      );
    case 'music':
      return (
        <svg {...common}>
          <path d="M6 12.2V4.4l6-1.2v7.6" />
          <circle cx="4.4" cy="12.2" r="1.7" />
          <circle cx="10.4" cy="10.8" r="1.7" />
        </svg>
      );
    case 'translate':
      return (
        <svg {...common}>
          <path d="M2.4 4.2h6M5.4 4.2v1.2c0 2.6-1.4 4.7-3.4 5.6" />
          <path d="M3.9 8.4c.9 1.4 2.1 2.4 3.5 2.9" />
          <path d="M9.4 13.6 11.6 8l2.2 5.6M10.2 11.9h2.8" />
        </svg>
      );
    case 'slides':
      return (
        <svg {...common}>
          <rect x="2.2" y="3.2" width="11.6" height="7.4" rx="1.8" />
          <path d="M8 10.6v2.2M5.6 13.4h4.8" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="2.6" y="2.6" width="4.4" height="4.4" rx="1.2" />
          <rect x="9" y="2.6" width="4.4" height="4.4" rx="1.2" />
          <rect x="2.6" y="9" width="4.4" height="4.4" rx="1.2" />
          <rect x="9" y="9" width="4.4" height="4.4" rx="1.2" />
        </svg>
      );
  }
}

/**
 * The translation workbench inside the panel's own sheet.
 * @param {object} props - `{ t, locale, inputActions, onClose }`.
 * @returns {object} the element.
 */
function TranslateSheet({ t, locale, inputActions, onClose }) {
  return (
    <Sheet title={t('sheet.translate.title')} hint={t('sheet.translate.hint')} onClose={onClose} t={t} wide>
      <TranslateWorkbench t={t} locale={locale} inputActions={inputActions} />
    </Sheet>
  );
}

/**
 * The quick-actions seat.
 * @param {object} props - slot props plus the plugin faces.
 * @param {any} props.inputActions - the Host's composer actions (setDraft lives here).
 * @param {Function} props.t - namespace-bound translator.
 * @param {Function} props.locale - reads the active locale id.
 * @returns {object} the element.
 */
export function QuickActionsDock({ inputActions, t, locale, sessionId = '' }) {
  const canWrite = typeof inputActions?.setDraft === 'function';
  const [open, setOpen] = React.useState(false);
  // Which workbench is open, if any. Only shortcuts with a real capability
  // behind them set this; the rest still just fill a prompt.
  const [sheet, setSheet] = React.useState(null);
  // Fixed-position coordinates for the panel portal: right/bottom edges of the chip.
  const [anchor, setAnchor] = React.useState(null);
  const buttonRef = React.useRef(null);
  const panelRef = React.useRef(null);

  /**
   * Anchor the panel above the chip, right edges aligned.
   * @returns {void}
   */
  const reposition = React.useCallback(() => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect === undefined || rect === null) return;
    setAnchor({
      right: Math.max(8, Math.round(window.innerWidth - rect.right)),
      bottom: Math.max(8, Math.round(window.innerHeight - rect.top) + 8),
    });
  }, []);

  React.useLayoutEffect(() => {
    if (open) reposition();
  }, [open, reposition]);

  // Outside click, Escape, resize and scroll all close or re-anchor the panel:
  // it is fixed-positioned, so a moved composer would otherwise leave it behind.
  React.useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (panelRef.current?.contains(target) === true) return;
      if (buttonRef.current?.contains(target) === true) return;
      setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      buttonRef.current?.focus?.();
    };
    const onViewport = () => setOpen(false);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('resize', onViewport);
    window.addEventListener('scroll', onViewport, true);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('resize', onViewport);
      window.removeEventListener('scroll', onViewport, true);
    };
  }, [open]);

  /**
   * Write one shortcut's template into the composer and close the panel.
   * @param {object} action - one entry of QUICK_ACTIONS.
   * @returns {void}
   */
  const choose = (action) => {
    if (typeof action.sheet === 'string') {
      setOpen(false);
      setSheet(action.sheet);
      return;
    }
    const text = pick(action.prompt, typeof locale === 'function' ? locale() : 'zh');
    try {
      inputActions.setDraft({ text, references: [] });
    } catch {
      try {
        inputActions.setDraft(text);
      } catch {
        // A composer that refuses the write keeps its draft; close anyway so the
        // reader is not stuck behind a dead panel.
      }
    }
    setOpen(false);
    buttonRef.current?.focus?.();
  };

  const label = t('quick.label');
  const active = typeof locale === 'function' ? locale() : 'zh';

  // Some shells pin every composer button to a 44px touch target on phones. If
  // such a rule beats the stylesheet, clamp the chip back to the row's 28px so
  // it cannot stretch the tool row; nothing is written when no rule applies.
  React.useEffect(() => {
    const node = buttonRef.current;
    if (node === null) return undefined;
    const clamp = () => {
      const pinned = node.offsetHeight > 34;
      for (const property of ['height', 'min-height', 'max-height']) {
        if (pinned) node.style.setProperty(property, '28px', 'important');
        else node.style.removeProperty(property);
      }
    };
    clamp();
    window.addEventListener('resize', clamp);
    const coarse = typeof window.matchMedia === 'function' ? window.matchMedia('(pointer: coarse)') : null;
    coarse?.addEventListener('change', clamp);
    return () => {
      window.removeEventListener('resize', clamp);
      coarse?.removeEventListener('change', clamp);
    };
  }, []);

  const pill = (
    <button
      ref={buttonRef}
      type="button"
      className="cbp-more"
      data-cbp-more=""
      aria-haspopup="menu"
      aria-expanded={open ? 'true' : 'false'}
      aria-label={t('quick.aria')}
      title={canWrite ? t('quick.aria') : t('quick.disabled')}
      disabled={!canWrite}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => setOpen((value) => !value)}
    >
      <Icon name="grid" />
      <span className="cbp-more-label">{label}</span>
    </button>
  );

  const panel =
    open && anchor !== null
      ? createPortal(
          <div
            ref={panelRef}
            className="cbp-quick-panel"
            role="menu"
            aria-label={t('quick.title')}
            data-cbp-quick-panel="true"
            style={{ right: `${anchor.right}px`, bottom: `${anchor.bottom}px` }}
          >
            <div className="cbp-quick-head">
              <span className="cbp-quick-title">{t('quick.title')}</span>
              <span className="cbp-quick-hint">{t('quick.hint')}</span>
            </div>
            <div className="cbp-quick-grid">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className="cbp-quick-item"
                  role="menuitem"
                  data-cbp-action={action.id}
                  onClick={() => choose(action)}
                >
                  <span className="cbp-quick-icon">
                    <Icon name={action.icon} />
                  </span>
                  <span className="cbp-quick-name">{pick({ zh: action.zh, en: action.en }, active)}</span>
                </button>
              ))}
            </div>
          </div>,
          document.body,
        )
      : null;

  // The dock slot keeps a zero-height root so the seat is mounted even before
  // the composer card is found (hero composer mounts a tick later).
  /**
   * Close a workbench, writing its result into the composer when it has one.
   * @param {string|null} text - the text to fill, or null to just close.
   * @returns {void}
   */
  const finish = (text) => {
    if (typeof text === 'string' && text.trim() !== '') fillDraft(inputActions, text);
    setSheet(null);
  };

  return (
    <>
      {pill}
      {panel}
      {sheet === 'transcribe' ? <TranscribeSheet t={t} locale={locale} onClose={() => setSheet(null)} onFill={finish} /> : null}
      {sheet === 'write' ? (
        <WriteSheet t={t} locale={locale} sessionId={sessionId} onClose={() => setSheet(null)} onFill={finish} />
      ) : null}
      {sheet === 'deck' ? <DeckSheet t={t} locale={locale} sessionId={sessionId} onClose={() => setSheet(null)} /> : null}
      {sheet === 'video' ? <VideoSheet t={t} onClose={() => setSheet(null)} onFill={finish} /> : null}
      {sheet === 'translate' ? (
        <TranslateSheet t={t} locale={locale} inputActions={inputActions} onClose={() => setSheet(null)} />
      ) : null}
    </>
  );
}

/** The seat's stylesheet: a tool-row ghost chip + a glass panel above it. */
export const QUICK_CSS = `
/* The chip lives in the Host's tool row (conversation.input.right), so it
   carries no absolute position, no backdrop and no shadow of its own: it is
   chrome-shaped like the model and permission selects beside it — 28px tall, 13px/500
   label, --dsw-radius-sm, a flat hover fill from Host tokens. */
.cbp-more{
  box-sizing:border-box;
  display:inline-flex;
  align-items:center;
  gap:5px;
  height:28px;
  margin:0;
  padding:0 8px;
  border:0;
  border-radius:var(--dsw-radius-sm,8px);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font-family:inherit;
  font-size:13px;
  font-weight:500;
  line-height:1;
  white-space:nowrap;
  flex:none;
  cursor:pointer;
  -webkit-appearance:none;
  appearance:none;
  transition:background-color 120ms ease,color 120ms ease;
}
.cbp-more:hover{
  background:var(--dsw-alias-interactive-bg-hover,rgba(38,49,72,.06));
  color:var(--dsw-alias-label-primary);
}
.cbp-more[aria-expanded="true"]{
  background:var(--dsw-alias-interactive-bg-hover,rgba(38,49,72,.06));
  color:var(--dsw-alias-label-primary);
}
.cbp-more:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:2px;
}
.cbp-more:disabled{
  opacity:.5;
  cursor:default;
}
.cbp-more svg{
  width:15px;
  height:15px;
  display:block;
  flex:none;
}
.cbp-more-label{
  white-space:nowrap;
}
/* The row is a container query container, so its own 560px breakpoint can drop
   the word: the icon alone is what fits next to the model selector there. */
@container (width <= 560px){
  .cbp-more{padding:0;width:28px;justify-content:center;gap:0}
  .cbp-more-label{display:none}
}
.cbp-quick-panel{
  position:fixed;
  z-index:60;
  box-sizing:border-box;
  width:316px;
  padding:12px 12px 14px;
  border-radius:18px;
  /* Glass: the chip is flat in the row, but the panel that floats over the
     page needs a surface of its own or it reads as loose text. */
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 10%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 55%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 62%,transparent);
  -webkit-backdrop-filter:blur(24px) saturate(180%);
  backdrop-filter:blur(24px) saturate(180%);
  box-shadow:0 18px 44px -14px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 30%,transparent),0 3px 10px -3px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 12%,transparent),inset 0 1px 0 color-mix(in oklab,#ffffff 40%,transparent);
  animation:cbp-quick-in 140ms cubic-bezier(.23,1,.32,1);
}
body[data-ds-dark-theme] .cbp-quick-panel{
  background:color-mix(in oklab,#1c1c1e 72%,transparent);
  border-color:color-mix(in oklab,#ffffff 14%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 22%,transparent);
  box-shadow:0 18px 44px -14px rgba(0,0,0,.55),0 3px 10px -3px rgba(0,0,0,.3),inset 0 1px 0 color-mix(in oklab,#ffffff 10%,transparent);
}
@keyframes cbp-quick-in{
  from{opacity:0;transform:translateY(4px)}
  to{opacity:1;transform:none}
}
.cbp-quick-head{
  display:flex;
  flex-direction:column;
  gap:2px;
  padding:2px 4px 10px;
}
.cbp-quick-title{
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:600;
  line-height:1.4;
}
.cbp-quick-hint{
  color:var(--dsw-alias-label-tertiary);
  font-size:11px;
  line-height:1.4;
}
.cbp-quick-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:3px;
}
.cbp-quick-item{
  display:flex;
  align-items:center;
  gap:8px;
  min-height:36px;
  padding:0 9px;
  border:0;
  border-radius:10px;
  background:transparent;
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:450;
  text-align:left;
  cursor:pointer;
  transition:background-color 100ms ease;
}
.cbp-quick-item:hover{
  background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent);
}
.cbp-quick-item:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:-1px;
}
.cbp-quick-icon{
  display:flex;
  align-items:center;
  color:var(--dsw-alias-label-secondary);
}
.cbp-quick-icon svg{
  width:16px;
  height:16px;
  display:block;
}
.cbp-quick-name{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
/* Phones: the tool row keeps its own 28px rhythm, so the chip only becomes
   tighter — never taller — and the panel is bounded by the viewport. */
@media (max-width:520px){
  .cbp-more{font-size:12.5px;padding:0 7px;gap:4px}
  .cbp-more svg{width:14px;height:14px}
  .cbp-quick-panel{width:min(316px,calc(100vw - 24px))}
}
@media (max-width:380px){
  .cbp-more{font-size:12px;padding:0 6px}
  .cbp-more svg{width:13px;height:13px}
}
@media (prefers-reduced-motion: reduce){
  .cbp-quick-panel{animation:none}
}
`;
