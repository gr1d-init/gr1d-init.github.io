import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CAl8CNfY.mjs';
import 'kleur/colors';
import { $ as $$ProjectSection, a as $$CommonPage } from '../chunks/ProjectSection_Be5njDRh.mjs';
import { d as $$Collapse } from '../chunks/Label_HfPJPtS8.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const headings = [
    {
      depth: 2,
      slug: "ctfs",
      text: "CTF Writeups"
    },
    {
      depth: 2,
      slug: "milestone",
      text: "Milestone Projects"
    },
    {
      depth: 2,
      slug: "themes",
      text: "Themes"
    }
    /*
    {
      depth: 2,
      slug: 'theme',
      text: 'Theme'
    },
    {
      depth: 2,
      slug: 'programs',
      text: 'Programs'
    },
    {
      depth: 2,
      slug: 'learnings',
      text: 'Learnings'
    },
    {
      depth: 2,
      slug: 'others',
      text: 'Others'
    },
    {
      depth: 2,
      slug: 'gpg-signature',
      text: 'GPG Signature'
    },
    {
      depth: 2,
      slug: 'sponsorship',
      text: 'Sponsorship'
    }*/
  ];
  return renderTemplate(_a || (_a = __template(["", " <script type=\"module\" data-astro-rerun>\n  import { siteConfig } from '/src/site.config.ts'\n\n  const loadPageviewCount = async () => {\n    const pageviewCount = await import(`${siteConfig.npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageviewCount({\n      serverURL: siteConfig.commonPage.walineServerUrl,\n      path: window.location.pathname\n    })\n  }\n\n  loadPageviewCount()\n<\/script>"], ["", " <script type=\"module\" data-astro-rerun>\n  import { siteConfig } from '/src/site.config.ts'\n\n  const loadPageviewCount = async () => {\n    const pageviewCount = await import(\\`\\${siteConfig.npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageviewCount({\n      serverURL: siteConfig.commonPage.walineServerUrl,\n      path: window.location.pathname\n    })\n  }\n\n  loadPageviewCount()\n<\/script>"])), renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "info": { slug: "/projects", hideComment: true } }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2 id="ctfs">CTF Writeups</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "class": "my-2", "project": [
    {
      name: "Rust Learning",
      description: "Some notes and code about CWorld learning Rust",
      links: [{ type: "github", href: "https://github.com/cworld1/rust-learning" }]
    },
    {
      name: "CS 213 Learning",
      description: "Notes, code and experiences for Introduction to Computer Systems course",
      links: [
        {
          type: "github",
          href: "https://github.com/zhuozhiyongde/Introduction-To-Computer-System-2023Fall-PKU"
        }
      ]
    }
  ] })} <h2 id="milestone">Milestone Projects</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "\u{1F916} Arknights Telegram Bot",
      description: "Telegram Bot for Arknights",
      links: [
        { type: "github", href: "https://github.com/IJNKAWAKAZE/arknights_bot" },
        { type: "site", href: "https://t.me/PtiIopsis_bot" },
        {
          type: "doc",
          href: "https://github.com/IJNKAWAKAZE/arknights_bot/blob/main/docs/Development.md"
        }
      ]
    },
    {
      name: "\u{1F484} PKU Art",
      description: "A script to beautify pku course website",
      links: [
        { type: "github", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "site", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "doc", href: "https://docs.arthals.ink/docs/pku-art" }
      ]
    }
  ] })} ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Some old projects" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "Search Switcher",
      description: "Add links to each other in search engines",
      links: [{ type: "github", href: "https://github.com/cworld1/search-switcher" }]
    },
    {
      name: "Pure Baidu",
      description: "Baidu search page beautification module",
      links: [
        { type: "doc", href: "https://cworld0.com/blog/pure-baidu" },
        { type: "site", href: "https://userstyles.org/styles/173673/pure" }
      ]
    }
  ] })} ` })} <h2 id="themes">Themes</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "project": [
    {
      name: "\u{1F36D} Astro-theme-pure",
      description: "A simple, clean but powerful blog theme build by astro.",
      links: [
        { type: "github", href: "https://github.com/cworld1/astro-theme-pure" }
        /*{ type: 'site', href: 'https://github.com/cworld1/astro-theme-pure' },
        {
          type: 'doc',
          href: 'https://github.com/cworld1/astro-theme-pure/blob/main/src/content/post/customize/index.md'
        }*/
      ]
    }
  ] })} ` }));
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
