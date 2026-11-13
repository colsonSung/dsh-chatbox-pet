/**
 * The composer tool-row seat that merges the queue.
 *
 * It renders ONLY while at least two consecutive text-only messages are waiting
 * for the next turn — a merge you cannot use is noise in a row that already
 * holds five controls, and a chip that opens a write the Host refuses is worse
 * than no chip. The count comes from the session's own inbox projection, so the
 * chip appears and disappears with the queue itself, including when the agent
 * claims a message mid-merge.
 */
import * as React from 'react';
import { cloneElement, useSyncExternalStore } from 'react';
import { Tooltip as HostTooltip } from '@deepseek-ai/dsh-client-ui-primitives';

import { mergeQueue, readItems } from './queue-merge.js';
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
 * @returns {object} the queue view from `readItems`.
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
  const batch = queue.batch ?? 0;
  const skipped = queue.skipped ?? 0;
  // Fewer than two consecutive text-only messages: the Host would refuse the
  // edit, so the chip stays out of the row instead of opening a dead action.
  if (batch < 2) return null;

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
              : result.error === 'has-attachment' || result.error === 'session/attachment-invalid'
                ? t('merge.attachments')
                : result.error === 'bad-input' || result.error === 'empty'
                  ? t('merge.empty')
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
        : skipped > 0
          ? t('merge.labelSkipped')(batch, skipped)
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
        data-cbp-merge-batch={batch}
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
        {skipped === 0 && batch < count ? <span className="cbp-merge-total">/{count}</span> : null}
      </button>
    </Tip>
  );
}
