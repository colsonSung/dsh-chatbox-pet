/**
 * The Prompt Boost dock: a compact status chip by default, the full panel only
 * when the reader asks for it.
 *
 * It lives in `conversation.input.dock` — the full-width seat ABOVE the
 * composer card — so nothing ever hangs below the composer. The collapsed chip
 * is one slim row (~28px) that reports progress in place; expanding it reveals
 * the same live state (streaming text, chips, editable prompt, actions) without
 * interrupting the request. Folding back to the chip never cancels anything.
 *
 * States the chip can be in: running (mini spinner) → streaming (source counts
 * + "writing…") → ready ("Ready · View") or failed ("Boost failed · View"); a
 * finished-but-unapplied state is not dismissed by collapsing. After Apply the
 * chip becomes "Draft replaced · Undo" and disappears with the undo window.
 */
import * as React from 'react';
import { useEffect, useRef, useSyncExternalStore } from 'react';

import { IconCheck, IconChevronDown, IconClose, IconSparkle, IconWarning } from './icons.jsx';

/** True on Apple platforms, where the apply shortcut is ⌘⏎ rather than Ctrl+⏎. */
const IS_MAC = typeof navigator !== 'undefined'
  && /Mac|iPhone|iPad|iPod/i.test(String(navigator.platform ?? navigator.userAgent ?? ''));

/**
 * The mini spinner: a 12px arc that turns while the rewrite runs.
 * @returns {object} the svg element.
 */
function MiniSpinner() {
  return (
    <svg
      className="pb-spinner"
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="8" cy="8" r="5.6" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.6" />
      <path d="M8 2.4A5.6 5.6 0 0 1 13.6 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/**
 * The localized label for one source chip.
 *
 * The four known ids are localized in this plugin's namespace; an unknown id
 * falls back to the label the Host sent.
 * @param {object} source - `{ id, label, count }`.
 * @param {Function} t - the translator.
 * @returns {string} the label.
 */
function sourceLabel(source, t) {
  const key = `source.${source.id}`;
  const localized = t(key);
  return localized === key ? source.label : localized;
}

/**
 * The sentence to show for one failure.
 * @param {object|null} error - `{ code, message? }`.
 * @param {Function} t - the translator.
 * @returns {string} the sentence.
 */
function errorText(error, t) {
  if (error === null || error === undefined) return t('panel.error.unknown');
  if (typeof error.message === 'string' && error.message !== '') return error.message;
  switch (error.code) {
    case 'network': return t('panel.error.network');
    case 'timeout': return t('panel.error.timeout');
    case 'stream': return t('panel.error.stream');
    case 'empty': return t('panel.error.empty');
    case 'apply': return t('panel.error.apply');
    case 'host': return t('panel.error.host');
    default: return t('panel.error.unknown');
  }
}

/**
 * The header meta line: cached marker plus elapsed seconds.
 * @param {object} state - the session state.
 * @param {Function} t - the translator.
 * @returns {string} the meta text ('' when there is nothing to say).
 */
function metaText(state, t) {
  if (state.phase !== 'ready') return '';
  const parts = [];
  if (state.cached) parts.push(t('panel.cached'));
  if (typeof state.elapsedMs === 'number' && state.elapsedMs > 0) {
    parts.push(t('panel.took', { seconds: (state.elapsedMs / 1000).toFixed(1) }));
  }
  return parts.join(' · ');
}

/**
 * The compact chip's one-line status.
 *
 * Running has no counts yet; streaming shows the two strongest sources and the
 * writing verb, which is the whole progress report in one line.
 * @param {object} state - the session state.
 * @param {Function} t - the translator.
 * @returns {string} the line.
 */
function chipText(state, t) {
  if (state.phase === 'running') return t('chip.running');
  if (state.phase === 'streaming') {
    const counts = state.sources
      .slice(0, 2)
      .map((source) => `${sourceLabel(source, t)} ${source.count}`)
      .join(' · ');
    return counts === '' ? t('chip.writing') : `${counts} · ${t('chip.writing')}`;
  }
  if (state.phase === 'ready') return t('chip.ready');
  if (state.phase === 'applied') return t('undo.done');
  if (state.phase === 'error') return t('chip.failed');
  return t('undo.done');
}

/**
 * The slim chip that stands in for the panel while it is collapsed.
 * @param {object} props - `{ state, store, t, inputActions, chipRef }`.
 * @returns {object} the chip row.
 */
function StatusChip({ state, store, t, inputActions, chipRef }) {
  const applied = state.phase === 'applied';
  const running = state.phase === 'running' || state.phase === 'streaming';
  const ready = state.phase === 'ready';
  const failed = state.phase === 'error';
  const mode = state.mode === 'compose' ? t('panel.compose') : t('button.label');
  const text = chipText(state, t);

  if (applied) {
    return (
      <div className="pb-chip-row">
        <div
          className="pb-chip-status is-applied"
          data-pb-collapsed=""
          data-pb-state="applied"
          data-pb-running="false"
          data-pb-expand=""
          role="button"
          tabIndex={0}
          aria-label={t('chip.expand')}
          onClick={() => store.expand(inputActions)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              store.expand(inputActions);
            }
          }}
        >
          <span className="pb-chip-ico is-accent" aria-hidden="true"><IconCheck size={12} /></span>
          <span className="pb-chip-text" role="status" aria-live="polite">{t('undo.done')}</span>
          <span className="pb-chip-sep" aria-hidden="true">·</span>
          <button
            type="button"
            className="pb-chip-action"
            data-pb-undo=""
            aria-label={t('undo.label')}
            onClick={() => store.undo(inputActions)}
          >
            {t('undo.action')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-chip-row">
      <div
        className="pb-chip-status"
        data-pb-collapsed=""
        data-pb-state={state.phase}
        data-pb-running={running ? 'true' : 'false'}
        onClick={() => store.expand(inputActions)}
      >
        <button
          ref={chipRef}
          type="button"
          className="pb-chip-main"
          data-pb-expand=""
          aria-expanded="false"
          aria-controls={store.panelId(inputActions)}
          aria-label={`${t('chip.expand')} · ${mode}`}
          onClick={() => store.expand(inputActions)}
        >
          <span className={running || ready ? 'pb-chip-ico is-accent' : 'pb-chip-ico is-error'} aria-hidden="true">
            {running ? <MiniSpinner /> : failed ? <IconWarning size={12} /> : <IconSparkle size={12} />}
          </span>
          <span className="pb-chip-text" role="status" aria-live="polite">{text}</span>
          {ready || failed ? (
            <>
              <span className="pb-chip-sep" aria-hidden="true">·</span>
              <span className="pb-chip-view">{t('chip.view')}</span>
            </>
          ) : null}
        </button>
        <button
          type="button"
          className="pb-chip-dismiss"
          data-pb-dismiss=""
          aria-label={t('chip.dismiss')}
          onClick={() => store.dismiss(inputActions)}
        >
          <IconClose size={10} />
        </button>
      </div>
    </div>
  );
}

/**
 * The expanded panel: chips, editable prompt and actions.
 * @param {object} props - `{ state, store, t, inputActions, locale, panelRef }`.
 * @returns {object} the panel.
 */
function ResultPanel({ state, store, t, inputActions, locale, panelRef }) {
  const textRef = useRef(null);
  const phase = state.phase;
  const running = phase === 'running';
  const streaming = phase === 'streaming';
  const ready = phase === 'ready';
  const applied = phase === 'applied';
  const settled = ready || applied;
  const failed = phase === 'error';
  const sources = state.sources;
  const showSources = running || streaming || settled || sources.length > 0;
  const shownPrompt = applied ? state.applied : state.prompt;
  const meta = metaText(state, t);
  const panelId = store.panelId(inputActions);
  const shortcut = IS_MAC ? t('shortcut.mac') : t('shortcut.other');
  const announcement = running
    ? t('panel.announceRunning')
    : streaming
      ? t('panel.streaming')
      : applied
        ? t('panel.announceApplied')
        : ready
          ? t('panel.announceReady')
          : t('panel.announceError');

  // Keep the read-only streaming textarea pinned to the newest delta.
  useEffect(() => {
    const element = textRef.current;
    if (element === null || phase !== 'streaming') return;
    element.scrollTop = element.scrollHeight;
  }, [state.prompt, phase]);

  return (
    <section
      ref={panelRef}
      id={panelId}
      className="pb-panel"
      data-pb-panel=""
      data-pb-mode={state.mode}
      data-pb-state={phase}
      data-pb-running={running || streaming ? 'true' : 'false'}
      tabIndex={-1}
      aria-labelledby={`${panelId}-title`}
      aria-busy={running || streaming ? 'true' : undefined}
    >
      <header className="pb-head">
        <div className="pb-head-row">
          <h2 className="pb-title" id={`${panelId}-title`}>{t('panel.title')}</h2>
          {state.mode === 'compose' ? <span className="pb-mode">{t('panel.compose')}</span> : null}
          <span className="pb-meta">{meta}</span>
          <button
            type="button"
            className="pb-control-btn"
            data-pb-collapse=""
            aria-label={t('panel.collapse')}
            title={t('panel.collapse')}
            onClick={() => store.collapse(inputActions)}
          >
            <IconChevronDown size={14} />
          </button>
        </div>
        {showSources ? (
          <div className="pb-sources" role="list" aria-label={t('panel.sources')}>
            {sources.length > 0 ? sources.map((source) => (
              <span key={source.id} className="pb-chip" role="listitem" data-pb-source={source.id}>
                <span className="pb-chip-label">{sourceLabel(source, t)}</span>
                <span className="pb-chip-count">{source.count}</span>
              </span>
            )) : running ? (
              [
                <span key="a" className="pb-skeleton-chip" aria-hidden="true" />,
                <span key="b" className="pb-skeleton-chip is-short" aria-hidden="true" />,
              ]
            ) : (
              <span className="pb-note">{t('panel.noSources')}</span>
            )}
          </div>
        ) : null}
      </header>
      <div className="pb-rule" aria-hidden="true" />
      <div className="pb-body">
        {running ? (
          <>
            <div className="pb-skeleton" aria-hidden="true">
              <span className="pb-skeleton-line is-long" />
              <span className="pb-skeleton-line is-full" />
              <span className="pb-skeleton-line is-short" />
            </div>
            <div className="pb-status">
              <span className="pb-dot" aria-hidden="true" />
              {t('panel.status')}
            </div>
          </>
        ) : null}
        {streaming || settled ? (
          <textarea
            ref={textRef}
            className="pb-text"
            data-pb-prompt=""
            rows={3}
            readOnly={streaming || applied}
            spellCheck={false}
            aria-label={t('panel.editLabel')}
            placeholder={t('panel.placeholder')}
            value={shownPrompt}
          />
        ) : null}
        {streaming ? (
          <div className="pb-status">
            <span className="pb-dot" aria-hidden="true" />
            {t('panel.streaming')}
          </div>
        ) : null}
        {failed ? (
          <div className="pb-error" role="alert" data-pb-error="">
            <span className="pb-error-icon" aria-hidden="true"><IconWarning size={14} /></span>
            <span className="pb-error-text">{errorText(state.error, t)}</span>
          </div>
        ) : null}
        <p className="pb-sr" role="status" aria-live="polite">{announcement}</p>
      </div>
      <div className="pb-foot">
        <button
          type="button"
          className="pb-btn"
          data-pb-close=""
          onClick={() => store.collapse(inputActions)}
        >
          {t('panel.close')}
        </button>
        <span className="pb-foot-spacer" />
        {settled ? (
          <button
            type="button"
            className="pb-btn"
            data-pb-retry=""
            title={shortcut}
            onClick={() => store.retry(inputActions, { locale: locale() })}
          >
            {t('panel.another')}
            <span className="pb-kbd" aria-hidden="true">{shortcut}</span>
          </button>
        ) : null}
        {applied ? (
          <button
            type="button"
            className="pb-btn pb-btn-primary"
            data-pb-undo=""
            onClick={() => store.undo(inputActions)}
          >
            {t('undo.action')}
          </button>
        ) : null}
        {running || streaming ? (
          <button
            type="button"
            className="pb-btn"
            data-pb-retry=""
            onClick={() => store.retry(inputActions, { locale: locale() })}
          >
            {t('panel.retry')}
          </button>
        ) : null}
        {failed ? (
          <button
            type="button"
            className="pb-btn pb-btn-primary"
            data-pb-retry=""
            onClick={() => store.retry(inputActions, { locale: locale() })}
          >
            {t('panel.retryError')}
          </button>
        ) : null}
      </div>
    </section>
  );
}

/**
 * The dock shell: owns the two-way keyboard, the focus handoff between chip and
 * panel, and picks which of the two surfaces renders.
 * @param {object} props - the slot props plus the plugin faces.
 * @param {any} props.inputActions - the Host's composer actions.
 * @param {object} props.store - the Prompt Boost store.
 * @param {Function} props.t - the namespace-bound translator.
 * @param {Function} props.locale - reads the active locale id.
 * @returns {object|null} the chip, the panel, or null while idle.
 */
export function BoostDock({ inputActions, store, t, locale, session }) {
  const state = useSyncExternalStore(
    store.subscribe,
    () => store.getState(inputActions),
    () => store.getState(inputActions),
  );
  const phase = state.phase;
  const visible = phase !== 'idle' || state.undo !== null;
  const expanded = state.expanded === true && phase !== 'idle';
  // The Host needs the Session id for per-conversation model routing; the dock
  // is the only boost seat that is handed one.
  useEffect(() => {
    const id = typeof session?.id === 'string' ? session.id : '';
    if (id !== '') store.setSessionId(inputActions, id);
  }, [session?.id, inputActions, store]);

  const chipRef = useRef(null);
  const panelRef = useRef(null);
  const returnFocus = useRef(null);
  const wasVisible = useRef(false);
  const wasExpanded = useRef(false);

  // Esc folds the panel back into the chip; ⌘/Ctrl+Enter asks for another
  // version of a settled result (or retries a failed one) while the panel is
  // open. Captured on the document so focus may stay in the composer.
  useEffect(() => {
    if (!visible) return undefined;
    const onKeyDown = (event) => {
      if (event.defaultPrevented || expanded === false) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        store.collapse(inputActions);
        return;
      }
      if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        event.stopPropagation();
        if (phase === 'applied' || phase === 'ready') store.retry(inputActions, { locale: locale() });
        else if (phase === 'error') store.retry(inputActions, { locale: locale() });
      }
    };
    document.addEventListener('keydown', onKeyDown, true);
    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [visible, expanded, phase, inputActions, store, locale]);

  // Remember where the reader was when the chip first appeared (normally the
  // composer editor, because the sparkle swallows its mousedown).
  useEffect(() => {
    if (visible && wasVisible.current === false) {
      wasVisible.current = true;
      returnFocus.current = typeof document !== 'undefined' && document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
      return;
    }
    if (visible === false && wasVisible.current) {
      wasVisible.current = false;
      const element = returnFocus.current;
      returnFocus.current = null;
      if (element === null || element === undefined || element.isConnected === false) return;
      if (typeof element.focus !== 'function') return;
      try {
        element.focus({ preventScroll: true });
      } catch {
        // A detached or non-focusable node keeps focus where the browser put it.
      }
    }
  }, [visible]);

  // Focus handoff: expanding moves focus into the panel; folding back moves it
  // to the chip; applying returns it to the composer (the reader types next).
  useEffect(() => {
    if (expanded && wasExpanded.current === false) {
      wasExpanded.current = true;
      const panel = panelRef.current;
      if (panel !== null && typeof panel.focus === 'function') {
        try {
          panel.focus({ preventScroll: true });
        } catch {
          // Focus is a nicety; the panel is still announced by its region role.
        }
      }
      return;
    }
    if (expanded === false && wasExpanded.current) {
      wasExpanded.current = false;
      const target = phase === 'idle' ? returnFocus.current : chipRef.current;
      if (target === null || target === undefined || target.isConnected === false) return;
      if (typeof target.focus !== 'function') return;
      try {
        target.focus({ preventScroll: true });
      } catch {
        // Same as above: focus placement must never break the dock.
      }
    }
  }, [expanded, phase]);

  if (!visible) return null;
  if (expanded === false) {
    return <StatusChip state={state} store={store} t={t} inputActions={inputActions} chipRef={chipRef} />;
  }
  return (
    <ResultPanel
      state={state}
      store={store}
      t={t}
      inputActions={inputActions}
      locale={locale}
      panelRef={panelRef}
    />
  );
}
