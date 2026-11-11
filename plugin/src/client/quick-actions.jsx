/**
 * The "更多" seat: one pill at the composer's top-right that opens a panel of
 * shortcuts (录音转写 / 图像生成 / 帮我写作 / …).
 *
 * Why a panel and not a row of chips: the composer already carries the pet, the
 * sparkle and the merge chip, and a row of six chips would push the draft down
 * and read as a second toolbar. The pill is the single, stable entry point; the
 * catalogue behind it is data (see quick-actions.js), so adding a shortcut is a
 * one-object change.
 *
 * What a shortcut does: it writes the template into the composer draft and
 * closes. It never sends and never starts a request — the reader still presses
 * send after editing.
 */
import * as React from 'react';
import { createPortal } from 'react-dom';

import { pick, QUICK_ACTIONS } from './quick-actions.js';

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
 * The quick-actions seat.
 * @param {object} props - slot props plus the plugin faces.
 * @param {any} props.inputActions - the Host's composer actions (setDraft lives here).
 * @param {Function} props.t - namespace-bound translator.
 * @param {Function} props.locale - reads the active locale id.
 * @returns {object} the element.
 */
export function QuickActionsDock({ inputActions, t, locale, petVisible = true }) {
  const canWrite = typeof inputActions?.setDraft === 'function';
  const [open, setOpen] = React.useState(false);
  // Fixed-position coordinates for the portal: right/bottom edges of the pill.
  const [anchor, setAnchor] = React.useState(null);
  const buttonRef = React.useRef(null);
  const panelRef = React.useRef(null);

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

  return (
    <div className="cbp-quick">
      <button
        ref={buttonRef}
        type="button"
        className={petVisible ? 'cbp-more' : 'cbp-more cbp-more--alone'}
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
      {open && anchor !== null
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
        : null}
    </div>
  );
}

/** The seat's stylesheet: geometry mirrors the pet's root so both anchor to the card. */
export const QUICK_CSS = `
.cbp-quick{
  position:relative;
  height:0;
  width:min(
    calc(100% - var(--dsh-composer-side-clearance, 16px)*2),
    var(--dsh-composer-card-max-width, 952px)
  );
  margin:0 auto;
  overflow:visible;
  pointer-events:none;
  z-index:21;
}
.cbp-more{
  position:absolute;
  right:132px;
  bottom:10px;
  display:inline-flex;
  align-items:center;
  gap:5px;
  height:26px;
  padding:0 10px;
  border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay) 92%,transparent);
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  font-weight:500;
  line-height:1;
  cursor:pointer;
  pointer-events:auto;
  backdrop-filter:blur(12px);
  transition:background-color 120ms ease,color 120ms ease,border-color 120ms ease;
}
.cbp-more--alone{
  right:20px;
}
.cbp-more:hover{
  color:var(--dsw-alias-label-primary);
  background:var(--dsw-alias-interactive-bg-hover);
}
.cbp-more[aria-expanded="true"]{
  color:var(--dsw-alias-label-primary);
  border-color:color-mix(in oklab,var(--dsw-alias-label-primary) 16%,transparent);
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
  width:304px;
  padding:10px 10px 12px;
  border-radius:var(--dsw-radius-lg,14px);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  background:var(--dsw-alias-bg-overlay);
  box-shadow:0 12px 32px -12px color-mix(in oklab,var(--dsw-alias-label-primary) 28%,transparent),0 2px 6px -2px color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  backdrop-filter:blur(18px);
  animation:cbp-quick-in 140ms cubic-bezier(.23,1,.32,1);
}
@keyframes cbp-quick-in{
  from{opacity:0;transform:translateY(4px)}
  to{opacity:1;transform:none}
}
.cbp-quick-head{
  display:flex;
  flex-direction:column;
  gap:2px;
  padding:2px 4px 8px;
}
.cbp-quick-title{
  color:var(--dsw-alias-label-primary);
  font-size:12px;
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
  gap:2px;
}
.cbp-quick-item{
  display:flex;
  align-items:center;
  gap:8px;
  min-height:34px;
  padding:0 8px;
  border:0;
  border-radius:var(--dsw-radius-md,8px);
  background:transparent;
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:450;
  text-align:left;
  cursor:pointer;
  transition:background-color 100ms ease;
}
.cbp-quick-item:hover{
  background:var(--dsw-alias-interactive-bg-hover);
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
  .cbp-more{right:20px;bottom:8px}
  .cbp-quick-panel{width:min(304px,calc(100vw - 24px))}
}
@media (prefers-reduced-motion: reduce){
  .cbp-quick-panel{animation:none}
}
`;
