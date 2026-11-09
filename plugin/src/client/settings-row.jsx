/**
 * The one settings row this bundle contributes: three independent switches.
 *
 * Both features live in one bundle, so the row is the only place a reader can
 * turn one off without the other. The first switch is the pet's display
 * switch — off means the whole pet (dock, bubbles, chat, small talk) is gone
 * while boost, queue-merge and sound keep working; it is labelled "Show pet"
 * rather than with the character's name so it reads as a display control, not
 * as a feature switch. Each switch is a native checkbox driven by the shared
 * prefs store, so it is keyboard operable and announced by the screen reader
 * for free; the visual switch is drawn in CSS from that input.
 */
import * as React from 'react';
import { useSyncExternalStore } from 'react';

import { prefsStore } from './prefs.js';
import { readSoundPref, safeStorage, writeSoundPref } from './sound.js';

/** Styles for the row, appended to the bundle's single stylesheet. */
export const SETTINGS_CSS = `
.cbp-set-row{display:flex;flex-direction:column;gap:10px;padding:14px 0;border-bottom:.5px solid var(--dsw-alias-border-l2,#e6e6e6)}
.cbp-set-head{display:flex;flex-direction:column;gap:3px}
.cbp-set-title{font-size:14px;font-weight:500;line-height:22px;color:var(--dsw-alias-label-primary,#1f1f1f)}
.cbp-set-desc{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary,#8a8a8a)}
.cbp-set-items{display:flex;flex-wrap:wrap;gap:18px}
.cbp-set-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;line-height:20px;color:var(--dsw-alias-label-primary,#1f1f1f);cursor:pointer}
.cbp-switch{position:relative;display:inline-flex;flex:none;width:32px;height:18px}
.cbp-switch input{position:absolute;inset:0;margin:0;opacity:0;cursor:pointer;width:100%;height:100%}
.cbp-switch-track{position:absolute;inset:0;border-radius:999px;background:var(--dsw-alias-bg-layer-3,#dcdcdc);transition:background-color 140ms ease;pointer-events:none}
.cbp-switch-thumb{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:999px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.28);transition:transform 140ms ease;pointer-events:none}
.cbp-switch input:checked + .cbp-switch-track{background:#B4690E}
.cbp-switch input:checked ~ .cbp-switch-thumb{transform:translateX(14px)}
.cbp-switch input:focus-visible + .cbp-switch-track{outline:2px solid var(--dsw-alias-label-primary,#1f1f1f);outline-offset:2px}
body[data-ds-dark-theme] .cbp-switch input:checked + .cbp-switch-track{background:#FFC46B}
body[data-ds-dark-theme] .cbp-switch-thumb{background:#1b1b1c}
@media (prefers-reduced-motion:reduce){.cbp-switch-track,.cbp-switch-thumb{transition:none}}
`;

/**
 * One labelled switch.
 * @param {object} props - `{ id, checked, label, onChange }`.
 * @returns {object} the switch element.
 */
function Switch({ id, checked, label, onChange }) {
  return (
    <label className="cbp-set-item" htmlFor={id}>
      <span className="cbp-switch">
        <input
          id={id}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          data-cbp-pref={id}
        />
        <span className="cbp-switch-track" aria-hidden="true" />
        <span className="cbp-switch-thumb" aria-hidden="true" />
      </span>
      {label}
    </label>
  );
}

/**
 * The settings row.
 * @param {object} props - slot props, `{ t }` supplied by the caller.
 * @returns {object} the row.
 */
export function SettingsRow({ t }) {
  const prefs = useSyncExternalStore(prefsStore.subscribe, prefsStore.getSnapshot, prefsStore.getSnapshot);
  const [soundOn, setSoundOn] = React.useState(() => readSoundPref(safeStorage()) === 'on');
  /**
   * Change the sound switch. The localStorage copy is what the audio kit
   * reads (synchronous, available before any fetch resolves); the prefs file
   * keeps the Host's copy in step.
   * @param {boolean} value - the new state.
   */
  const changeSound = (value) => {
    setSoundOn(value);
    writeSoundPref(safeStorage(), value ? 'on' : 'off');
    void prefsStore.update({ sound: value });
  };
  return (
    <div className="cbp-set-row" data-cbp-settings="">
      <div className="cbp-set-head">
        <span className="cbp-set-title">{t('settings.title')}</span>
        <span className="cbp-set-desc">{t('settings.desc')}</span>
      </div>
      <div className="cbp-set-items">
        <Switch
          id="chatbox-pet-feature-pet"
          checked={prefs.pet !== false}
          label={t('settings.pet')}
          onChange={(value) => {
            void prefsStore.update({ pet: value });
          }}
        />
        <Switch
          id="chatbox-pet-feature-boost"
          checked={prefs.boost !== false}
          label={t('settings.boost')}
          onChange={(value) => {
            void prefsStore.update({ boost: value });
          }}
        />
        <Switch
          id="chatbox-pet-feature-sound"
          checked={soundOn}
          label={t('settings.sound')}
          onChange={changeSound}
        />
      </div>
    </div>
  );
}
