import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const temp = mkdtempSync(join(tmpdir(), 'react-icons-package-'));
const destination = process.argv[2] ? resolve(process.argv[2]) : temp;
const run = (command, args, cwd = temp) => execFileSync(command, args, { cwd, stdio: 'inherit' });
try {
  mkdirSync(destination, { recursive: true });
  const packed = JSON.parse(execFileSync('npm', ['pack', '--silent', '--json', '--pack-destination', destination], {
    cwd: root, encoding: 'utf8',
  }));
  // npm 12 returns a name-keyed object; npm 10/11 return an array.
  const [pack] = Object.values(packed);
  const files = new Set(pack.files.map(({ path }) => path));
  assert.ok(files.has('dist/index.js'), 'tarball must contain compiled JavaScript');
  assert.ok(files.has('dist/index.d.ts'), 'tarball must contain root declarations');
  assert.ok([...files].every(path => path.startsWith('dist/') || ['package.json', 'README.md', 'LICENSE', 'LICENSE.md'].includes(path)),
    'tarball must not include source, tests, credentials, or preview files');
  const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'));
  const version = name => lock.packages[`node_modules/${name}`].version;
  writeFileSync(join(temp, 'package.json'), JSON.stringify({ private: true, type: 'module' }));
  run('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund', '--package-lock=false',
    join(destination, pack.filename), ...['react', 'react-dom', '@types/react', '@types/react-dom'].map(name => `${name}@${version(name)}`)]);
  writeFileSync(join(temp, 'consumer.tsx'), `
import { createTheme, HomeIcon, AnimatedStarIcon, ContinuousSpinnerIcon, type IconProps as RootIconProps } from '@lincoln-howard-jr/react-icons';
import { Path, Start, LineTo, Close } from '@lincoln-howard-jr/react-icons/components/Path';
import { dimensions, type IconProps } from '@lincoln-howard-jr/react-icons/icons/IconProps';
import { HomeIcon as SubpathHome } from '@lincoln-howard-jr/react-icons/icons/home';
import { AnimatedStarIcon as SubpathAnimated } from '@lincoln-howard-jr/react-icons/icons/animated';
import { ContinuousSpinnerIcon as SubpathContinuous } from '@lincoln-howard-jr/react-icons/icons/animated/continuous';
const props: IconProps = { color: 'purple', weight: 'thin' };
const theme = createTheme(props);
export const icons = <><HomeIcon {...props}/><SubpathHome/><AnimatedStarIcon/><SubpathAnimated/>
  <ContinuousSpinnerIcon/><SubpathContinuous/><theme.home/>
  <svg viewBox={\`0 0 \${dimensions.width} \${dimensions.height}\`}><Path {...props}>
    <Start x={10} y={10}/><LineTo x={90} y={90}/><Close/>
  </Path></svg></>;
`);
  // Check both Node's export-map resolution and browser bundler resolution.
  for (const [module, resolution] of [['Node16', 'Node16'], ['ESNext', 'Bundler']]) {
    run(join(root, 'node_modules/.bin/tsc'), ['--noEmit', '--strict', '--skipLibCheck', 'false',
      '--target', 'ES2022', '--jsx', 'react-jsx', '--module', module, '--moduleResolution', resolution, 'consumer.tsx']);
  }
  writeFileSync(join(temp, 'runtime.cjs'), `
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const library = require('@lincoln-howard-jr/react-icons');
const { Path, Start, LineTo, Close } = require('@lincoln-howard-jr/react-icons/components/Path');
const { dimensions } = require('@lincoln-howard-jr/react-icons/icons/IconProps');
const { HomeIcon } = require('@lincoln-howard-jr/react-icons/icons/home');
assert.equal(HomeIcon, library.HomeIcon);
assert.equal(dimensions.width, 1024);
let rendered = 0;
for (const [name, Component] of Object.entries(library)) {
  if (name === 'createTheme') continue;
  const Icon = name.startsWith('gen') ? Component({ color: 'purple' }) : Component;
  assert.match(renderToStaticMarkup(React.createElement(Icon, { color: 'purple' })), /<svg/);
  rendered++;
}
assert.ok(rendered > 0);
assert.match(renderToStaticMarkup(React.createElement(library.createTheme({}).home)), /<svg/);
assert.match(renderToStaticMarkup(React.createElement(Path, {},
  React.createElement(Start, { x: 10, y: 10 }), React.createElement(LineTo, { x: 90, y: 90 }),
  React.createElement(Close))), /<path/);
console.log('Packed CommonJS SSR: ' + rendered + ' icon/factory exports passed');
`);
  run(process.execPath, ['runtime.cjs']);
  writeFileSync(join(temp, 'runtime.mjs'), `
import assert from 'node:assert/strict';
import { HomeIcon, createTheme } from '@lincoln-howard-jr/react-icons';
import { Path } from '@lincoln-howard-jr/react-icons/components/Path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
assert.equal(typeof Path, 'function');
assert.match(renderToStaticMarkup(createElement(HomeIcon)), /<svg/);
assert.match(renderToStaticMarkup(createElement(createTheme({}).home)), /<svg/);
console.log('Packed ESM import and SSR passed');
`);
  run(process.execPath, ['runtime.mjs']);
  console.log(`Package smoke test passed: ${pack.filename} (${pack.files.length} files)`);
} finally {
  rmSync(temp, { recursive: true, force: true });
}
