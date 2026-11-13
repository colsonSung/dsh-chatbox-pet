/**
 * Test-only entry for the merge chip.
 *
 * It is separate from `ui-entry.jsx` on purpose: the chip imports the Host's UI
 * primitives (a page module, external in `client.js`), and bundling it into the
 * shared entry would break every other jsdom test that builds that entry.
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';

export { createRoot, React };
export { QueueMergeButton } from '../src/client/queue-merge.jsx';
export { zh } from '../src/client/locale.js';
