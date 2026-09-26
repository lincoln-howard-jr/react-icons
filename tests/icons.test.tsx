import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement, type ComponentType } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { parseSVG } from 'svg-path-parser';
import * as library from '../index';
import type { IconProps } from '../icons/IconProps';

const exports = library as unknown as Record<string, ComponentType<IconProps>>;
const additions = [
  'home', 'arrowLeft', 'arrowRight', 'arrowUp', 'arrowDown', 'externalLink', 'refresh', 'undo', 'redo', 'link',
  'check', 'checkCircle', 'info', 'warning', 'error',
  'lock', 'unlock', 'login', 'logout', 'shield', 'key', 'eye', 'eyeOff',
  'folder', 'upload', 'save', 'archive', 'attachment', 'clipboard', 'printer',
  'image', 'camera', 'play', 'pause', 'stop', 'volume', 'volumeOff', 'microphone', 'video',
  'mail', 'phone', 'share',
  'cart', 'creditCard', 'tag',
  'list', 'table', 'columns', 'barChart', 'lineChart', 'pieChart',
  'wifi', 'globe', 'cloud', 'database', 'code', 'terminal', 'mapPin', 'heart', 'bookmark',
];

for (const key of additions) {
  const name = key[0].toUpperCase() + key.slice(1) + 'Icon';
  test(`${name}: public component, theme and factory preserve styling`, async () => {
    assert.equal(typeof exports[name], 'function', `${name} must be exported`);
    const module = await import(`../icons/${key}.tsx`);
    const props: IconProps = { color: '#123456', weight: 'thick', fill: true, fillColor: '#abcdef', className: 'test-icon' };
    const html = renderToStaticMarkup(createElement(exports[name], props));
    const theme = library.createTheme(props) as unknown as Record<string, ComponentType>;
    assert.equal(renderToStaticMarkup(createElement(theme[key])), html);
    assert.equal(renderToStaticMarkup(createElement(module[`gen${name}`](props))), html);
    assert.match(html, /<svg class="test-icon" viewBox="0 0 1024 1024"/);
    const paths = [...html.matchAll(/<path\b[^>]*>/g)];
    assert.ok(paths.length > 0);
    for (const [path] of paths) {
      for (const attr of ['class="test-icon"', 'stroke="#123456"', 'stroke-width="32"', 'fill="#abcdef"']) assert.ok(path.includes(attr), `${name}: ${attr}`);
      const d = path.match(/ d="([^"]+)"/)?.[1];
      assert.ok(d);
      assert.ok(parseSVG(d).length > 1);
      assert.doesNotMatch(d, /NaN|undefined|Infinity/);
    }
    for (const [weight, width] of [['thin', 16], ['normal', 24], ['thick', 32]] as const) {
      const outline = renderToStaticMarkup(createElement(exports[name], { weight, fillColor: 'red' }));
      assert.match(outline, new RegExp(`stroke-width="${width}"`));
      assert.match(outline, /fill="none"/);
      assert.match(outline, /stroke="black"/);
    }
    assert.match(renderToStaticMarkup(createElement(exports[name], { fill: true })), /fill="black"/);
  });
}

// Existing naming is retained: ChatBubbles (static), AnimatedChatIcon, ContinuousChatIcon.
const theme = library.createTheme({});
for (const [name, Component] of Object.entries(exports)) {
  if (name === 'createTheme' || name.startsWith('gen')) continue;
  test(`${name}: renders valid geometry and has an identical theme counterpart`, () => {
    const prefix = name.startsWith('Animated') ? 'animated' : name.startsWith('Continuous') ? 'continuous' : '';
    const base = name.replace(/^(Animated|Continuous)/, '').replace(/Icon$/, '');
    const key = base === 'ChatBubbles' ? 'chat' : base[0].toLowerCase() + base.slice(1);
    const group = (prefix ? theme[prefix] : theme) as unknown as Record<string, ComponentType>;
    assert.equal(typeof group[key], 'function');
    const props: IconProps = { color: '#123456', fill: true, fillColor: '#abcdef', weight: 'thin', className: 'catalog-test' };
    const styled = renderToStaticMarkup(createElement(Component, props));
    assert.match(styled, /<svg[^>]*class="[^"]*catalog-test/);
    for (const [path] of styled.matchAll(/<path\b[^>]*>/g)) {
      for (const attr of ['stroke="#123456"', 'fill="#abcdef"', 'stroke-width="16"', 'class="catalog-test"']) assert.ok(path.includes(attr), `${name}: ${attr}`);
    }
    const html = renderToStaticMarkup(createElement(Component));
    const themedHtml = renderToStaticMarkup(createElement(group[key]));
    // Animation instances intentionally generate unique CSS identifiers.
    const geometry = (markup: string) => [...markup.matchAll(/<path\b[^>]*>/g)].map(([path]) => path);
    assert.deepEqual(geometry(themedHtml), geometry(html));
    assert.match(html, /viewBox="0 0 1024 1024"/);
    const paths = [...html.matchAll(/<path\b[^>]* d="([^"]+)"/g)];
    assert.ok(paths.length > 0, name);
    for (const [, d] of paths) {
      const commands = parseSVG(d);
      assert.equal(commands[0].code, 'M');
      assert.ok(commands.length > 1);
      for (const command of commands) for (const value of Object.values(command)) {
        if (typeof value === 'number') assert.ok(Number.isFinite(value));
      }
    }
  });
}

test('catalog covers every static module and retains selective animation counts', async () => {
  const { readdir } = await import('node:fs/promises');
  const files = (await readdir(new URL('../icons', import.meta.url))).filter(name => name.endsWith('.tsx'));
  const keys = Object.keys(theme).filter(key => !['animated', 'continuous'].includes(key));
  assert.deepEqual(keys.sort(), files.map(name => name.replace('.tsx', '')).sort());
  assert.equal(keys.length, 92);
  assert.equal(Object.keys(theme.animated).length, 15);
  assert.equal(Object.keys(theme.continuous).length, 16);
  assert.equal(Object.keys(exports).filter(key => key !== 'createTheme' && !key.startsWith('gen')).length, 123);
});

test('refresh follows three circular quadrants without a looping arc', () => {
  const html = renderToStaticMarkup(createElement(library.RefreshIcon));
  const d = html.match(/ d="([^"]+)"/)![1];
  const arcs = parseSVG(d).filter(command => command.code === 'A');
  assert.equal(arcs.length, 3);
  for (const arc of arcs) {
    assert.ok('rx' in arc && 'ry' in arc && 'largeArc' in arc && 'sweep' in arc);
    assert.equal(arc.rx, 358.4);
    assert.equal(arc.ry, 358.4);
    assert.equal(arc.largeArc, false);
    assert.equal(arc.sweep, true);
  }
});
