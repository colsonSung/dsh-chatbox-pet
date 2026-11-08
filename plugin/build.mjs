/**
 * Build the web client bundle.
 *
 * The Harness client loads a plugin's browser artifact as a lazy factory
 * registered through `window.__ModuleLoader__.load`, so the bundle is wrapped
 * in that envelope. React comes from the page's module table; bundling a second
 * copy would break hooks, so those imports stay external.
 *
 * esbuild is resolved from a sibling bundle that already installs it, so this
 * directory needs no package manager run of its own.
 */
import { createRequire } from 'node:module';
import { rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

/**
 * Find esbuild.
 *
 * The plugin's own node_modules first (a published checkout: `npm install`,
 * with esbuild in devDependencies), then a sibling bundle in this workspace
 * that already installs it. A published clone has no sibling, so the first
 * branch is the one that matters there.
 * @returns {any} the esbuild module.
 */
function loadEsbuild() {
  const candidates = [join(here, 'package.json'), join(here, '..', 'chat-selection', 'package.json')];
  const errors = [];
  for (const anchor of candidates) {
    try {
      return createRequire(anchor)('esbuild');
    } catch (error) {
      errors.push(`${anchor}: ${error?.code ?? error}`);
    }
  }
  console.error('chatbox-pet: esbuild not found. Run `npm install` in plugin/ first.');
  for (const line of errors) console.error('  ' + line);
  process.exit(1);
}

const { build } = loadEsbuild();

const wrap = () => ({
  banner: {
    js: `window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;`,
  },
  footer: {
    js: `		return module.exports;
	}
});`,
  },
});

const result = await build({
  bundle: true,
  format: 'cjs',
  target: 'es2020',
  platform: 'browser',
  minify: true,
  logLevel: 'info',
  entryPoints: [join(here, 'src', 'client-entry.js')],
  outfile: join(here, 'client.js'),
  write: false,
  external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', '@deepseek-ai/dsh-client-ui-primitives'],
  ...wrap(),
});

// A plain write lets the client watcher read a half-written file and report the
// module as "loaded without registering"; write a sibling and rename into place.
const output = join(here, 'client.js');
const temporary = `${output}.tmp`;
await writeFile(temporary, result.outputFiles[0].text);
await rename(temporary, output);
console.log('chatbox-pet: client.js built');
