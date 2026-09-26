import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { parseSVG } from 'svg-path-parser';
import { Path, Start, LineTo, ArcTo, Close } from '../components/Path';
import { scale, rscale, rotate } from '../icons/IconProps';

test('percentage coordinates include padding; radii do not', () => {
  assert.equal(scale(0), 64);
  assert.equal(scale(50), 512);
  assert.equal(scale(100), 960);
  assert.equal(rscale(50), 448);
  assert.deepEqual(rotate(50, 50), { x: 50, y: 50 });
});

test('Path reduces declarative primitives to absolute SVG geometry', () => {
  const html = renderToStaticMarkup(<Path><Start x={0} y={0} /><LineTo x={100} y={50} /><ArcTo x={50} y={100} rx={50} /><Close /></Path>);
  const commands = parseSVG(html.match(/ d="([^"]+)"/)![1]);
  assert.deepEqual(commands, [
    { code: 'M', command: 'moveto', x: 64, y: 64 },
    { code: 'L', command: 'lineto', x: 960, y: 512 },
    { code: 'A', command: 'elliptical arc', rx: 448, ry: 448, xAxisRotation: 0, largeArc: false, sweep: true, x: 512, y: 960 },
    { code: 'Z', command: 'closepath' },
  ]);
  assert.match(html, /stroke-width="24" stroke="black" fill="none"/);
});

test('ArcTo preserves elliptical radii, rotation and explicit flags', () => {
  const html = renderToStaticMarkup(<Path color="red" fill fillColor="blue" weight="thin" className="arc"><Start x={10} y={20} /><ArcTo x={80} y={90} rx={25} ry={10} xAxisRotation={45} large sweep={false} /></Path>);
  const commands = parseSVG(html.match(/ d="([^"]+)"/)![1]);
  assert.deepEqual(commands[1], { code: 'A', command: 'elliptical arc', rx: 224, ry: 89.6, xAxisRotation: 45, largeArc: true, sweep: false, x: 780.8, y: 870.4 });
  assert.match(html, /class="arc" stroke-width="16" stroke="red" fill="blue"/);
});

test('multiple Start instructions preserve separate subpaths', () => {
  const html = renderToStaticMarkup(<Path><Start x={0} y={0} /><LineTo x={10} y={10} /><Start x={50} y={50} /><LineTo x={100} y={100} /></Path>);
  assert.deepEqual(parseSVG(html.match(/ d="([^"]+)"/)![1]).map(c => c.code), ['M', 'L', 'M', 'L']);
});
