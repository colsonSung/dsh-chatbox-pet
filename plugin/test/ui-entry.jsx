/**
 * Test-only entry: bundles PetDock together with its own React copies so the
 * jsdom test drives one React instance (no dual-copy hook mismatch).
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PetDock } from '../src/client/pet.jsx';

export { createRoot, PetDock, React };
