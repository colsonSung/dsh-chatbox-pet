/**
 * Browser half of the Chatbox Pet bundle.
 *
 * One bundle, two independently switchable features:
 *   - the Pikachu dock row above the composer (pet),
 *   - the prompt-rewrite sparkle + chip/panel (boost, merged from the retired
 *     `@local/prompt-boost` bundle).
 *
 * Each feature's seats stay registered and render `null` while its switch is
 * off, so flipping a switch in Settings takes effect without a reload — and
 * neither feature ever depends on the other being on.
 */
import * as React from 'react';
import { setHostSoundDefault } from './sound.js';
import { useSyncExternalStore } from 'react';

import { en, NS, zh } from './locale.js';
import { PetDock } from './pet.jsx';
import { petSound } from './sound.js';
import { CSS } from './styles.js';
import { prefsStore } from './prefs.js';
import { SettingsRow, SETTINGS_CSS } from './settings-row.jsx';
import { BoostButton } from './boost/button.jsx';
import { QueueMergeButton } from './queue-merge.jsx';
import { en as boostEn, NS as BOOST_NS, zh as boostZh } from './boost/locale.js';
import { BoostDock } from './boost/panel.jsx';
import { boostStore } from './boost/store.js';
import { CSS as BOOST_CSS } from './boost/styles.js';

/** This plugin's stable identity inside the Host's slot ledger. */
const PLUGIN_ID = '@local/chatbox-pet';

/** Services the plugin reads. */
export const inject = ['slots', 'locale'];

/**
 * Subscribe a component to the feature switches.
 * @returns {object} the current prefs snapshot.
 */
function usePrefs() {
  return useSyncExternalStore(prefsStore.subscribe, prefsStore.getSnapshot, prefsStore.getSnapshot);
}

/**
 * Apply the plugin.
 * @param {any} ctx - the Client plugin context.
 * @returns {void}
 */
export function apply(ctx) {
  const t = ctx.locale.bind(NS);
  const tBoost = ctx.locale.bind(BOOST_NS);

  // Both dictionaries: the bundle owns two namespaces, one per feature.
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'chatbox-pet: dictionaries');
  ctx.effect(() => ctx.locale.register(BOOST_NS, { zh: boostZh, en: boostEn }), 'chatbox-pet: boost dictionaries');

  // One stylesheet in the document head, under this plugin's attribute, so the
  // rules load once and disappear with the plugin. Never a <style> React child.
  ctx.effect(() => {
    const previous = document.querySelector('style[data-plugin="chatbox-pet"]');
    if (previous !== null) previous.remove();
    const style = document.createElement('style');
    style.setAttribute('data-plugin', 'chatbox-pet');
    style.textContent = `${CSS}\n${BOOST_CSS}\n${SETTINGS_CSS}`;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, 'chatbox-pet: stylesheet');

  // The switches come from the Host; a failure keeps the defaults.
  ctx.effect(() => {
    void prefsStore.refresh().then((snapshot) => {
        setHostSoundDefault(snapshot?.sound !== false);
      });
  }, 'chatbox-pet: prefs');

  // Autoplay discipline: the AudioContext is created on the first user
  // gesture anywhere in the page. Registered once here, never per pet; the
  // listeners stay so a failed first attempt can retry on the next gesture.
  ctx.effect(() => {
    const unlock = () => petSound.unlock();
    window.addEventListener('pointerdown', unlock, { capture: true });
    window.addEventListener('keydown', unlock, { capture: true });
    return () => {
      window.removeEventListener('pointerdown', unlock, { capture: true });
      window.removeEventListener('keydown', unlock, { capture: true });
    };
  }, 'chatbox-pet: sound unlock');

  /**
   * The language the Host should write a rewrite in.
   * @returns {'zh'|'en'} the active locale id.
   */
  const locale = () => {
    try {
      const snapshot = typeof ctx.locale.getLocale === 'function' ? ctx.locale.getLocale() : undefined;
      return snapshot?.active === 'en' ? 'en' : 'zh';
    } catch {
      return 'zh';
    }
  };

  // The pet's seat: the zero-height dock row above the composer card.
  ctx.slots.inject('conversation.input.dock', () =>
    ctx.slots.register(
      {
        name: 'conversation.input.dock',
        id: PLUGIN_ID,
        order: 1,
        label: () => t('label'),
        locale: NS,
        inject: (sessionId) => ({ sessionId }),
      },
      (props) => {
        const prefs = usePrefs();
        if (prefs.pet === false) return null;
        const sessionId =
          typeof props?.sessionId === 'string' && props.sessionId !== ''
            ? props.sessionId
            : typeof props?.session?.id === 'string'
              ? props.session.id
              : '';
        if (sessionId === '') return null;
        // `useInput` is the composer's own selector hook: the pet reads the
        // draft from it to hear its wake word without any request.
        return <PetDock sessionId={sessionId} t={t} useInput={props?.useInput} locale={locale} />;
      },
    ),
  );

  // The boost seats. They register unconditionally and render nothing while
  // the switch is off, so toggling never needs a remount.
  const boostGate = (render) => (props) => {
    const prefs = usePrefs();
    if (prefs.boost === false) return null;
    return render(props);
  };

  ctx.slots.inject('conversation.input.left', () =>
    ctx.slots.register(
      {
        name: 'conversation.input.left',
        id: '@local/chatbox-pet/boost',
        order: 2,
        label: () => tBoost('button.label'),
        locale: BOOST_NS,
      },
      boostGate((props) => <BoostButton {...props} store={boostStore} t={tBoost} locale={locale} />),
    ),
  );
  // The queue-merge chip: one control that folds 2..8 waiting messages into one.
  // It is not behind a switch — it only exists while there is a queue to fold, so
  // there is nothing to leave on.
  ctx.slots.inject('conversation.input.left', () =>
    ctx.slots.register(
      {
        name: 'conversation.input.left',
        id: '@local/chatbox-pet/merge',
        order: 3,
        label: () => t('merge.label')(2),
        locale: NS,
        inject: (sessionId) => ({ sessionId }),
      },
      (props) => {
        const sessionId = typeof props?.sessionId === 'string' ? props.sessionId : '';
        if (sessionId === '') return null;
        return (
          <QueueMergeButton
            sessionId={sessionId}
            sessions={ctx.get('sessions')}
            t={t}
            locale={locale}
            onNotice={(text) => {
              // Let the pet say it: the reader is looking at the composer, and a
              // toast would cover the very queue the merge just changed.
              void fetch('/api/chatbox-pet/broadcast', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ session: sessionId, text, durationMs: 4000 }),
              }).catch(() => {});
            }}
          />
        );
      },
    ),
  );

  ctx.slots.inject('conversation.input.dock', () =>
    ctx.slots.register(
      {
        name: 'conversation.input.dock',
        id: '@local/chatbox-pet/boost',
        order: 10,
        locale: BOOST_NS,
      },
      boostGate((props) => <BoostDock {...props} store={boostStore} t={tBoost} locale={locale} />),
    ),
  );

/**
 * A renderless seat that tells the boost store which Session the composer is
 * for. The dock is the only seat handed a Session id, and the sparkle may be
 * clicked before the dock has ever mounted, so this bridge keeps it filled in
 * from the moment the composer appears.
 * @param {object} props - `{ session }`.
 * @returns {null} nothing is rendered.
 */
function BoostSessionBridge({ sessionId, session }) {
  const id =
    typeof sessionId === 'string' && sessionId !== ''
      ? sessionId
      : typeof session?.id === 'string'
        ? session.id
        : '';
  React.useEffect(() => {
    if (id !== '') boostStore.setSessionId(null, id);
  }, [id]);
  return null;
}

  // The renderless Session bridge for boost, in the same dock as the pet.
  ctx.slots.inject('conversation.input.dock', () =>
    ctx.slots.register(
      {
        name: 'conversation.input.dock',
        id: '@local/chatbox-pet/session-bridge',
        order: 0,
        label: () => t('label'),
        locale: NS,
        inject: (sessionId) => ({ sessionId }),
      },
      (props) => React.createElement(BoostSessionBridge, { sessionId: props?.sessionId, session: props?.session }),
    ),
  );

  // One settings row with both switches.
  ctx.slots.inject('settings.general.item', () =>
    ctx.slots.register(
      { name: 'settings.general.item', id: 'chatbox-pet', order: 30, locale: NS },
      () => React.createElement(SettingsRow, { t }),
    ),
  );
}
