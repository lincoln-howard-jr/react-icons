import { launch } from 'puppeteer';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createTheme } from '../index';

async function main() {
    const icons = Object.entries(createTheme({}))
        .filter((entry): entry is [string, () => React.JSX.Element] => typeof entry[1] === 'function')
        .sort(([a], [b]) => a.localeCompare(b));
    mkdirSync('examples', { recursive: true });
    const browser = await launch({ defaultViewport: { width: 64, height: 64 } });
    try {
        const page = await browser.newPage();
        for (const [name, Icon] of icons) {
            await page.setContent(`<!doctype html><html><head><style>html,body{margin:0;width:64px;height:64px;background:white}svg{display:block;width:64px;height:64px}</style></head><body>${renderToStaticMarkup(createElement(Icon))}</body></html>`);
            await page.screenshot({ path: `examples/${name}.png` });
        }
        const intro = '# Icon examples\n\nGenerated from the static React components with `npm run generate-png`. Do not edit this catalog or the PNGs by hand.\n\n[Quick start](../README.md) · [Usage reference](../docs/usage.md) · [Generation setup](../docs/development.md#generate-icon-examples)\n\nAnimation groups are excluded because PNGs are static snapshots. Names below are `createTheme` keys.\n\n';
        const rows = icons.map(([name]) => `| ![${name}](./${name}.png) | \`${name}\` |`).join('\n');
        writeFileSync('examples/README.md', `${intro}| Icon | Theme key |\n| --- | --- |\n${rows}\n`);
        console.log(`Generated ${icons.length} PNG icons and examples/README.md`);
    } finally {
        await browser.close();
    }
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
