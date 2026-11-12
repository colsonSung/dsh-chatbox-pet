/**
 * The composer tool-row seat that merges the queue.
 *
 * It renders ONLY while at least two messages are waiting for the next turn —
 * a merge you cannot use is noise in a row that already holds five controls.
 * The count comes from the session's own inbox projection, so the chip appears
 * and disappears with the queue itself, including when the agent claims a
 * message mid-merge.
 */
import * as React from 'react';
import { cloneElement, useSyncExternalStore } from 'react';
import { Tooltip as HostTooltip } from '@deepseek-ai/dsh-client-ui-primitives';

import { MERGE_LIMIT, mergeQueue, readItems } from './queue-merge.js';
import { IconMerge } from './boost/icons.jsx';

/**
 * Wrap the button in the Host's own tooltip when the shell provides it.
 * @param {object} props - `{ label, children }`.
 * @returns {object} the tooltip or the bare child.
 */
function Tip({ label, children }) {
  if (typeof HostTooltip === 'function') {
    return <HostTooltip label={label} side="top" delayMs={400}>{children}</HostTooltip>;
  }
  return cloneElement(children, { title: label });
}

/** An inbox face for a session that is not open: never changes, always empty. */
const EMPTY_SNAPSHOT = Object.freeze({});
const EMPTY_FACE = Object.freeze({
  subscribe: () => () => {},
  getSnapshot: () => EMPTY_SNAPSHOT,
});

/**
 * Subscribe to one session's queued messages.
 *
 * The hook runs on every render (a conditional hook would break the order the
 * moment the session opens); an unopened session simply subscribes to a face
 * that never changes.
 * @param {any} session - the client Session, or null.
 * @returns {{items: Array<any>, texts: string[], mergeable: number, blocked: string}} the queue view.
 */
function useQueue(session) {
  const face = (() => {
    try {
      const found = session?.projections?.faceOf?.('inbox');
      if (typeof found?.subscribe === 'function' && typeof found?.getSnapshot === 'function') return found;
    } catch {
      // A session without projections behaves like one that is not open.
    }
    return EMPTY_FACE;
  })();
  const snapshot = useSyncExternalStore(face.subscribe, face.getSnapshot, face.getSnapshot);
  return readItems(snapshot?.['next-turn']);
}

/**
 * The merge chip.
 * @param {object} props - the slot props plus the plugin faces.
 * @param {string} props.sessionId - the Session the composer belongs to.
 * @param {any} props.sessions - the Host's client sessions service.
 * @param {Function} props.t - the namespace-bound translator.
 * @param {Function} props.locale - reads the active locale id.
 * @param {Function} props.onNotice - tells the pet to say something.
 * @returns {object|null} the element, or null when there is nothing to merge.
 */
export function QueueMergeButton({ sessionId, sessions, t, locale, onNotice }) {
  const session = React.useMemo(() => {
    if (typeof sessionId !== 'string' || sessionId === '') return null;
    try {
      return sessions?.binding?.(sessionId)?.session ?? null;
    } catch {
      return null;
    }
  }, [sessions, sessionId]);

  const queue = useQueue(session);
  const [phase, setPhase] = React.useState('idle');
  const [outcome, setOutcome] = React.useState('');
  const timerRef = React.useRef(0);

  React.useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const count = queue.items.length;
  // Only a single message has nothing to fold. Attachments now survive the merge
  // and a long queue is folded one batch per press, so neither hides the chip.
  if (count < 2) return null;
  const batch = queue.batch ?? Math.min(count, MERGE_LIMIT);

  /**
   * Merge the queue and report what happened.
   * @returns {Promise<void>}
   */
  const run = async () => {
    if (phase === 'running') return;
    setPhase('running');
    setOutcome('');
    try {
      const result = await mergeQueue({
        session,
        sessionId,
        locale: typeof locale === 'function' ? locale() : 'zh',
      });
      if (result.ok) {
        const line = result.optimized ? t('merge.done')(result.count) : t('merge.donePlain')(result.count);
        setOutcome(line);
        onNotice?.(line);
      } else {
        setOutcome(
          result.error === 'queue-changed'
            ? t('merge.changed')
            : result.error === 'session/queue-item-not-found'
              ? t('merge.claimed')
              : t('merge.failed'),
        );
      }
    } catch {
      setOutcome(t('merge.failed'));
    } finally {
      setPhase('idle');
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setOutcome(''), 4000);
    }
  };

  const label =
    phase === 'running'
      ? t('merge.running')
      : outcome !== ''
        ? outcome
        : batch < count
          ? t('merge.labelBatch')(batch, count, queue.batches ?? 2)
          : t('merge.label')(count);
  return (
    <Tip label={label}>
      <button
        type="button"
        className="cbp-merge"
        data-cbp-merge
        data-cbp-merge-count={count}
        data-cbp-merge-phase={phase}
        aria-label={label}
        aria-busy={phase === 'running' ? 'true' : undefined}
        disabled={phase === 'running'}
        onClick={(event) => {
          event.stopPropagation();
          void run();
        }}
      >
        <IconMerge />
        <span className="cbp-merge-count">{phase === 'running' ? '…' : batch}</span>
        {batch < count ? <span className="cbp-merge-total">/{count}</span> : null}
      </button>
    </Tip>
  );
}
