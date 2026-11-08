/**
 * The pet's context menu.
 *
 * Opened by right-clicking the pet (or by the keyboard context-menu key), it
 * does two things: put a line in the pet's mouth, or play one clip on demand.
 * It renders through a portal on `document.body` because the composer dock
 * clips its children — the menu must float above the composer card, not inside
 * its overflow.
 *
 * Keys: Esc closes, Enter in the input submits, Tab moves between the input and
 * the action chips. Focus returns to the pet when the menu closes.
 */
import * as React from 'react';
import { createPortal } from 'react-dom';

import { actionLabel, MENU_ACTIONS, placeMenu, sanitizeSay, SAY_LIMIT } from './pet-menu.js';
import { kindLabel, QUIP_KINDS } from './pet-quip.js';

/** The menu's own width, mirrored in the stylesheet. */
const MENU_WIDTH = 268;

/**
 * The context menu.
 * @param {object} props - the menu props.
 * @param {{left: number, right: number, top: number, bottom: number}} props.anchor - the pet's rect.
 * @param {'zh'|'en'} props.locale - the language.
 * @param {(text: string) => void} props.onSay - the reader asked the pet to say something.
 * @param {(clip: string) => void} props.onAction - the reader asked for one clip.
 * @param {Array<{text: string, at: number}>} props.recent - the lines it said before.
 * @param {(kind: string|null) => void} props.onQuip - the reader asked for small talk.
 * @param {() => void} props.onForget - forget every remembered line.
 * @param {() => void} props.onClose - the menu should close.
 * @param {(key: string) => string} props.t - the translator.
 * @returns {React.ReactElement} the portalled menu.
 */
export function PetMenu({ anchor, locale, onSay, onAction, onQuip, recent, onForget, onClose, t }) {
  const rootRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const [text, setText] = React.useState('');
  const [position, setPosition] = React.useState(() => ({ left: 0, top: 0, ready: false }));

  // Measure, then place. The height is only known after the first paint, so
  // the first frame renders invisible and the second one positions it.
  React.useLayoutEffect(() => {
    const node = rootRef.current;
    if (node === null) return;
    const height = node.getBoundingClientRect().height;
    const next = placeMenu(
      anchor,
      { width: MENU_WIDTH, height },
      { width: window.innerWidth, height: window.innerHeight },
    );
    setPosition({ ...next, ready: true });
  }, [anchor]);

  // Focus the input so the reader can start typing the line immediately.
  React.useEffect(() => {
    const node = inputRef.current;
    if (node !== null && typeof node.focus === 'function') node.focus();
  }, []);

  // Outside click and Escape close the menu; both are captured on the document
  // so the composer's own handlers never see them first.
  React.useEffect(() => {
    const onPointerDown = (event) => {
      const node = rootRef.current;
      if (node !== null && event.target instanceof Node && node.contains(event.target)) return;
      onClose();
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
    };
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('keydown', onKeyDown, true);
    };
  }, [onClose]);

  /**
   * Say the typed line.
   * @returns {void}
   */
  const submit = () => {
    const line = sanitizeSay(text);
    if (line === '') return;
    onSay(line);
    onClose();
  };

  const style = {
    left: `${Math.round(position.left)}px`,
    top: `${Math.round(position.top)}px`,
    width: `${MENU_WIDTH}px`,
    visibility: position.ready ? 'visible' : 'hidden',
  };

  return createPortal(
    <div
      ref={rootRef}
      className="cbp-menu"
      style={style}
      role="menu"
      aria-label={t('menu.title')}
      data-cbp-menu="true"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="cbp-menu-say">
        <label className="cbp-menu-label" htmlFor="cbp-menu-say-input">
          {t('menu.say')}
        </label>
        <div className="cbp-menu-row">
          <input
            id="cbp-menu-say-input"
            ref={inputRef}
            className="cbp-menu-input"
            type="text"
            value={text}
            maxLength={SAY_LIMIT}
            placeholder={t('menu.sayPlaceholder')}
            data-cbp-menu-say="true"
            onChange={(event) => setText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                event.stopPropagation();
                submit();
              }
            }}
          />
          <button
            type="button"
            className="cbp-menu-submit"
            data-cbp-menu-submit="true"
            disabled={sanitizeSay(text) === ''}
            onClick={submit}
          >
            {t('menu.saySubmit')}
          </button>
        </div>
      </div>

      {recent.length === 0 ? null : (
        <div className="cbp-menu-recent" data-cbp-menu-recent="true">
          <span className="cbp-menu-label">
            {t('menu.recent')}
            <button
              type="button"
              className="cbp-menu-forget"
              data-cbp-menu-forget="true"
              onClick={onForget}
            >
              {t('menu.clear')}
            </button>
          </span>
          <div className="cbp-menu-recent-list">
            {recent.slice(0, 8).map((entry) => (
              <button
                key={`${entry.text}-${entry.at}`}
                type="button"
                className="cbp-menu-recent-item"
                data-cbp-menu-recent-item={entry.text}
                title={entry.text}
                onClick={() => {
                  onSay(entry.text);
                  onClose();
                }}
              >
                {entry.text}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="cbp-menu-quip" data-cbp-menu-quip="true">
        <span className="cbp-menu-label">{t('menu.quip')}</span>
        <div className="cbp-menu-grid">
          {QUIP_KINDS.map((kind) => (
            <button
              key={kind}
              type="button"
              className="cbp-menu-chip"
              role="menuitem"
              data-cbp-menu-quip-kind={kind}
              onClick={() => {
                onQuip(kind);
                onClose();
              }}
            >
              {kindLabel(kind, locale)}
            </button>
          ))}
        </div>
      </div>

      <div className="cbp-menu-actions">
        <span className="cbp-menu-label">{t('menu.action')}</span>
        <div className="cbp-menu-grid">
          {MENU_ACTIONS.map((action) => (
            <button
              key={action.clip}
              type="button"
              className="cbp-menu-chip"
              role="menuitem"
              data-cbp-menu-action={action.clip}
              title={action.clip}
              onClick={() => {
                onAction(action.clip);
                onClose();
              }}
            >
              {actionLabel(action, locale)}
            </button>
          ))}
        </div>
      </div>

      <p className="cbp-menu-hint">{t('menu.hint')}</p>
    </div>,
    document.body,
  );
}
