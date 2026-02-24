import {launch} from 'puppeteer';
import {renderToString} from 'react-dom/server.bun';
import {createTheme} from '../index';
import { JSX } from 'react';
import {existsSync, mkdirSync, writeFileSync} from 'fs';

const Icons = createTheme({});

function iconsFlat (iconObject: Record<string, typeof Icons[keyof typeof Icons]>): { name: string; component: () => JSX.Element }[] {
    return Object.keys(iconObject).reduce((acc, key) => {
        const component = iconObject[key as keyof typeof Icons];
        if (typeof component === 'function') {
            acc.push({ name: key, component });
        } else if (typeof component === 'object' && component !== null) {
            acc.push(...iconsFlat(component as Record<string, typeof Icons[keyof typeof Icons]>));
        }
        return acc;
    }, [] as { name: string; component: () => JSX.Element }[]);
}

async function generatePng(iconName: string, component: () => JSX.Element) {
    const Component = component;
    function Icon() {
        return (
            <Component />
        )
    }
    const browser = await launch({
        defaultViewport: {
            width: 64,
            height: 64
        }
    });
    const page = await browser.newPage({
        type: 'window',
        windowBounds: {
            width: 64,
            height: 64,
            left: 0,
            top: 0,
        }
    });
    const html = renderToString(<Icon />);
    await page.setContent(html);
    await page.screenshot({
        path: `examples/${iconName}.png`
    });
    await new Promise(resolve => setTimeout(resolve, 3000));
    await browser.close();
}

async function generateAllPngs() {
    const icons = iconsFlat(Icons);
    if (!existsSync('examples')) {
        mkdirSync('examples', { recursive: true });
    }
    await Promise.all(icons.map(icon => generatePng(icon.name, icon.component)));
}

async function generateMarkdownTable() {
    const icons = iconsFlat(Icons);
    const tableHeader = '| Icon | Name |\n| --- | --- |\n';
    const tableRows = icons.map(icon => `| ![${icon.name}](./${icon.name}.png) | ${icon.name} |`).join('\n');
    const markdown = tableHeader + tableRows;
    writeFileSync('examples/README.md', markdown);
}

generateAllPngs();
generateMarkdownTable();