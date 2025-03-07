import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cas9m1oj.mjs';
import { manifest } from './manifest_Czwms4_X.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/archives.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog/_---page_.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/robots.txt.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/search.astro.mjs');
const _page10 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page11 = () => import('./pages/tags.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/archives/index.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/[...page].astro", _page5],
    ["src/pages/projects/index.astro", _page6],
    ["src/pages/robots.txt.ts", _page7],
    ["src/pages/rss.xml.ts", _page8],
    ["src/pages/search/index.astro", _page9],
    ["src/pages/tags/[tag]/[...page].astro", _page10],
    ["src/pages/tags/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7ffc2d3b-ff79-4e07-9f60-5f5b839ec622",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
