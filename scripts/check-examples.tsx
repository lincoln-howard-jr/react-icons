import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createTheme } from '../index';

const names = Object.entries(createTheme({})).filter(([, value]) => typeof value === 'function').map(([name]) => name).sort();
const files = readdirSync('examples').filter(name => name.endsWith('.png')).map(name => name.slice(0, -4)).sort();
assert.deepEqual(files, names, 'examples must cover every static theme icon');
const markdown = readFileSync('examples/README.md', 'utf8');
assert.match(markdown, /npm run generate-png/);
for (const name of names) {
  assert.ok(markdown.includes(`![${name}](./${name}.png)`), `missing ${name} in catalog`);
  const png = readFileSync(`examples/${name}.png`);
  assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(png.readUInt32BE(16), 64);
  assert.equal(png.readUInt32BE(20), 64);
}
console.log(`Verified ${names.length} PNG examples and catalog entries.`);
