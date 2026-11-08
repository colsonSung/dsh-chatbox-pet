/**
 * Entry point of the browser artifact.
 *
 * The loader reads `apply` and `inject` off the module this file exports; the
 * UI itself lives in `src/client/`.
 */
export { apply, inject } from './client/index.jsx';
