/**
 * Test-only entry: bundles PetDock and the settings row together with their
 * own React copies so the jsdom tests drive one React instance (no dual-copy
 * hook mismatch).
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PetDock } from '../src/client/pet.jsx';

export { createRoot, PetDock, React };
export { SettingsRow } from '../src/client/settings-row.jsx';
export { prefsStore } from '../src/client/prefs.js';
export { zh } from '../src/client/locale.js';
