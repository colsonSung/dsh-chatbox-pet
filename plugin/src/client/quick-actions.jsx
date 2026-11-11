/**
 * The "更多" seat: one glass pill **inside** the composer's top-right corner
 * that opens a panel of shortcuts (录音转写 / 图像生成 / 帮我写作 / …).
 *
 * Placement: the seat mounts as a direct child of the Host's
 * `[data-composer-card="true"]` (position:relative, overflow:visible — verified
 * in the live DOM) and is absolutely positioned at its top-right. The editor's
 * right padding is widened by the stylesheet so the pill never sits on top of
 * typed text.
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
import { DeckSheet, fillDraft, TranscribeSheet, VideoSheet, WriteSheet } from './quick-sheet.jsx';
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
 * Find the Host's composer card the seat should live in.
 *
 * The card carries `data-composer-card="true"` (verified in the live DOM). When
 * the seat was rendered in a dock slot, walk up from the docked root to the
 * nearest card; when that fails (blank-session hero composer, or a future slot
 * change), fall back to the first card in the document.
 * @returns {HTMLElement|null} the card, or null if no composer is on screen.
 */
function findComposerCard() {
  const docked = document.querySelector('.cbp-quick');
  if (docked && typeof docked.closest === 'function') {
    const card = docked.closest('[data-composer-card="true"]');
    if (card) return card;
  }
  return document.querySelector('[data-composer-card="true"]');
}

/**
 * The translation workbench inside the panel's own sheet.
 * @param {object} props - `{ t, locale, inputActions, onClose }`.
 * @returns {object} the element.
 */
function TranslateSheet({ t, locale, inputActions, onClose }) {
  return (
    <div className="cbp-sheet-veil" data-cbp-sheet="true" onMouseDown={(event) => event.stopPropagation()}>
      <div className="cbp-sheet cbp-sheet-wide" role="dialog" aria-modal="true" aria-label={t('sheet.translate.title')}>
        <div className="cbp-sheet-head">
          <span className="cbp-sheet-title">{t('sheet.translate.title')}</span>
          <button type="button" className="cbp-sheet-close" aria-label={t('sheet.close')} onClick={onClose}>
            ✕
          </button>
        </div>
        <p className="cbp-sheet-hint">{t('sheet.translate.hint')}</p>
        <div className="cbp-sheet-body">
          <TranslateWorkbench t={t} locale={locale} inputActions={inputActions} />
        </div>
      </div>
    </div>
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
  // Fixed-position coordinates for the portal: right/bottom edges of the pill.
  const [anchor, setAnchor] = React.useState(null);
  const buttonRef = React.useRef(null);
  const panelRef = React.useRef(null);
  // The seat itself is rendered in the dock slot; the visible pill is portaled
  // into the composer card so it sits *inside* the card's top-right corner.
  const [card, setCard] = React.useState(null);

  React.useEffect(() => {
    setCard(findComposerCard());
  }, []);

  /**
   * Anchor the panel above the pill, right edges aligned.
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
      <span className="cbp-quick" style={{ display: 'none' }} aria-hidden="true" />
      {card !== null ? createPortal(pill, card) : null}
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

/** The seat's stylesheet: glass pill inside the card + a glass panel above it. */
export const QUICK_CSS = `
/* Give the typed text room: the pill occupies the card's top-right ~110px.
   The editor's own right padding (8px) would let text run under the pill. */
[data-composer-card="true"] [class*="_input"]{
  padding-right:118px !important;
}
.cbp-more{
  position:absolute;
  top:12px;
  right:12px;
  z-index:5;
  display:inline-flex;
  align-items:center;
  gap:5px;
  height:28px;
  padding:0 12px;
  border-radius:999px;
  /* Glass: a translucent surface, blurred and saturated backdrop, a hairline
     with a light top edge, and a soft shadow — not a flat opaque chip. */
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 10%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 55%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 42%,transparent);
  -webkit-backdrop-filter:blur(18px) saturate(160%);
  backdrop-filter:blur(18px) saturate(160%);
  box-shadow:0 1px 2px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 6%,transparent),0 6px 18px -8px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 22%,transparent),inset 0 1px 0 color-mix(in oklab,#ffffff 40%,transparent);
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  font-weight:500;
  line-height:1;
  cursor:pointer;
  transition:background-color 120ms ease,color 120ms ease,border-color 120ms ease,box-shadow 120ms ease;
}
body[data-ds-dark-theme] .cbp-more{
  background:color-mix(in oklab,#ffffff 10%,transparent);
  border-color:color-mix(in oklab,#ffffff 16%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 26%,transparent);
  box-shadow:0 1px 2px rgba(0,0,0,.2),0 6px 18px -8px rgba(0,0,0,.45),inset 0 1px 0 color-mix(in oklab,#ffffff 12%,transparent);
}
.cbp-more:hover{
  color:var(--dsw-alias-label-primary);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 62%,transparent);
}
body[data-ds-dark-theme] .cbp-more:hover{
  background:color-mix(in oklab,#ffffff 16%,transparent);
}
.cbp-more[aria-expanded="true"]{
  color:var(--dsw-alias-label-primary);
  border-color:color-mix(in oklab,var(--dsw-alias-label-primary) 18%,transparent);
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
  width:14px;
  height:14px;
  display:block;
}
.cbp-more-label{
  white-space:nowrap;
}
.cbp-quick-panel{
  position:fixed;
  z-index:60;
  box-sizing:border-box;
  width:316px;
  padding:12px 12px 14px;
  border-radius:18px;
  /* Same glass recipe as the pill, stronger blur so text stays readable. */
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
@media (max-width:520px){
  .cbp-more{top:10px;right:10px}
  [data-composer-card="true"] [class*="_input"]{padding-right:96px !important}
  .cbp-quick-panel{width:min(316px,calc(100vw - 24px))}
}
@media (prefers-reduced-motion: reduce){
  .cbp-quick-panel{animation:none}
}
`;
