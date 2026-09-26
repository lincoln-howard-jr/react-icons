import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createTheme } from '../index';

// Keep generated review artifacts out of the source tree by default.
const output = resolve(process.argv[2] || '/tmp/react-icons-gallery');
mkdirSync(output, { recursive: true });
const theme = createTheme({ color: '#172554', weight: 'normal' });
const entries = Object.entries(theme).filter((entry): entry is [string, () => React.JSX.Element] => typeof entry[1] === 'function').sort(([a], [b]) => a.localeCompare(b));
const cards = entries.map(([key, Icon]) => `<article><div>${renderToStaticMarkup(createElement(Icon))}</div><code>${key}</code></article>`).join('\n');
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>React icons contact sheet</title><style>
body{font:16px system-ui;margin:32px;background:#f8fafc;color:#172554}h1{margin-bottom:4px}main{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:12px}article{background:white;border:1px solid #cbd5e1;border-radius:8px;padding:12px;text-align:center}article div{height:70px}svg{width:64px;height:64px}code{font-size:12px}p{margin-bottom:24px}
</style></head><body><h1>App development icon catalog</h1><p>${entries.length} static icons · actual React server rendering · normal stroke · no fill</p><main>${cards}</main></body></html>`;
writeFileSync(resolve(output, 'index.html'), html);
console.log(`Rendered ${entries.length} static icons to ${resolve(output, 'index.html')}`);
