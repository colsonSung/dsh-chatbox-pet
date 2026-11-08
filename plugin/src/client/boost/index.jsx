/**
 * Prompt Boost's seats inside the merged bundle.
 *
 * One feature, two seats: a sparkle button in the composer tool row and a
 * compact status chip (expanding into the panel) in the composer's full-width
 * dock ABOVE the card. The two halves never look each other up in the DOM —
 * they agree through the external store in `store.js`.
 *
 * The result is applied to the composer as soon as it arrives, with an undo
 * window; the panel is where the reader looks at it, asks for another version,
 * or takes the change back.
 */
import * as React from 'react';
import { BoostButton } from './button.jsx';
import { BoostDock } from './panel.jsx';
import { boostStore } from './store.js';

/**
 * Register the two boost seats.
 * @param {any} ctx - the Client plugin context.
 * @param {object} options - `{ t, locale }`.
 * @returns {void}
 */
export function registerBoostSeats(ctx, { t, locale }) {
  // The sparkle: a peer of the attach "+" in the composer tool row.
  ctx.slots.inject('conversation.input.left', () =>
    ctx.slots.register(
      {
        name: 'conversation.input.left',
        id: '@local/chatbox-pet/boost',
        order: 2,
        label: () => t('button.label'),
        locale: 'promptBoost',
      },
      (props) => <BoostButton {...props} store={boostStore} t={t} locale={locale} />,
    ),
  );

  // The collapsed chip and the panel it expands into, in the full-width dock
  // ABOVE the composer card — never below it.
  ctx.slots.inject('conversation.input.dock', () =>
    ctx.slots.register(
      {
        name: 'conversation.input.dock',
        id: '@local/chatbox-pet/boost',
        order: 10,
        locale: 'promptBoost',
      },
      (props) => <BoostDock {...props} store={boostStore} t={t} locale={locale} />,
    ),
  );
}
