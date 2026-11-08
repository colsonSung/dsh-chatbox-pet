/**
 * The composer tool-row seat: one 28×28 ghost icon button.
 *
 * It is a direct flex child of the Host's `.tools` row, so it carries no
 * horizontal margin or padding of its own — the row's own gap positions it,
 * exactly like the "+" control beside it. Chrome (size, fill, focus ring,
 * hover) is Host tokens; the only plugin colour is the sparkle and the conic
 * scan ring while a rewrite is running, which is drawn on a pseudo element so
 * entering the running state cannot move a single pixel.
 *
 * The seat is available wherever the composer renders: the chip and panel it
 * drives live in `conversation.input.dock`, which the Host mounts above the
 * card for the normal AND the blank-session (hero) composer.
 */
import * as React from 'react';
import { cloneElement, useSyncExternalStore } from 'react';
import { Tooltip as HostTooltip } from '@deepseek-ai/dsh-client-ui-primitives';

import { IconSparkle } from './icons.jsx';

/**
 * Wrap the button in the Host's own tooltip when the shell provides it.
 * @param {object} props - `{ label, children }`.
 * @returns {object} the tooltip or the bare child.
 */
function Tip({ label, children }) {
  if (typeof HostTooltip === 'function') {
    return <HostTooltip label={label} side="top" delayMs={400}>{children}</HostTooltip>;
  }
  // A shell without the primitives still owes the reader the same tooltip.
  return cloneElement(children, { title: label });
}

/**
 * The sparkle seat.
 * @param {object} props - the slot props plus the plugin faces.
 * @param {any} props.inputActions - the Host's composer actions.
 * @param {Function} [props.useInput] - the Host's composer state selector.
 * @param {object} props.store - the Prompt Boost store.
 * @param {Function} props.t - the namespace-bound translator.
 * @param {Function} props.locale - reads the active locale id.
 * @returns {object} the element.
 */
export function BoostButton({ inputActions, useInput, store, t, locale }) {
  const state = useSyncExternalStore(store.subscribe, () => store.getState(inputActions), () => store.getState(inputActions));
  const inputState = typeof useInput === 'function' ? useInput((value) => value) : undefined;
  // A silent mirror: the panel needs the exact draft (text + chips) to restore
  // on undo, and mirroring during render keeps it current without a listener.
  store.setDraftMirror(inputActions, inputState);

  const draft = typeof inputState?.draft === 'string' ? inputState.draft : '';
  const running = state.phase === 'running' || state.phase === 'streaming';
  const open = state.phase !== 'idle';
  const label = running ? t('button.running') : t('button.label');
  const tooltip = running
    ? t('button.running')
    : draft.trim() === ''
      ? t('button.tooltipCompose')
      : t('button.tooltip');

  return (
    <Tip label={tooltip}>
      <button
        type="button"
        className="pb-trigger"
        data-pb-button=""
        data-pb-running={running ? 'true' : 'false'}
        data-pb-open={open ? 'true' : 'false'}
        aria-label={label}
        aria-busy={running ? 'true' : undefined}
        aria-expanded={open ? 'true' : 'false'}
        aria-controls={store.panelId(inputActions)}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => store.start(inputActions, { locale: typeof locale === 'function' ? locale() : 'zh' })}
      >
        <IconSparkle size={16} />
      </button>
    </Tip>
  );
}
