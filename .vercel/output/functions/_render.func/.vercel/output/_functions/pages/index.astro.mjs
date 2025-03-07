import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot } from '../chunks/astro/server_CAl8CNfY.mjs';
import 'kleur/colors';
import { c as cn, a as $$Button, e as $$Label, f as $$Card, b as $$BaseLayout } from '../chunks/Label_HfPJPtS8.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CKTK6YY9.mjs';
import { s as siteConfig } from '../chunks/linkPreview_D2g-DTnW.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_brzTNDxz.mjs';
import 'clsx';
import { g as getAllCollections, s as sortMDByDate } from '../chunks/collections_BdQ8ixvP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://astro-theme-pure.vercel.app");
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Quote;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "quote-component", "quote-component", { "class": cn("not-prose inline-block", className) }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row items-center gap-x-3 rounded-full border border-border px-4 py-2 text-sm shadow-sm"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p id="quote-sentence" class="font-medium text-muted-foreground">No logs, No traces...</p> </div> ` })}`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/components/advanced/Quote.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-pure.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("animate flex flex-col gap-y-5 md:flex-row md:gap-y-0", className), "class")}> <div class="text-xl font-semibold md:min-w-36"> <h2>${title}</h2> </div> <div class="flex flex-1 flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/components/home/Section.astro", void 0);

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex flex-row flex-wrap gap-x-4 gap-y-2 md:w-4/5"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/components/home/SkillLayout.astro", void 0);

const avatar = new Proxy({"src":"/_astro/avatar.DMQvoGYP.png","width":2507,"height":2507,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/assets/avatar.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const languages = ["C", "C++", "Python", "Assembly", "Shell"];
  const ctf = ["RE", "Pwn", "Forensics"];
  const linguistics = ["Malay", "Chinese", "English"];
  const MAX_POSTS = 10;
  const allPosts = await getAllCollections();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" }, "highlightColor": "#659EB966" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col items-center"> <section class="animate mb-10 flex flex-col items-center gap-y-7" id="content-header"> ${renderComponent($$result2, "Image", $$Image, { "src": avatar, "alt": "profile", "class": "h-28 w-auto rounded-full border p-1", "loading": "eager" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl font-bold">${siteConfig.author}</h1> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "Malaysia" }, { "icon": ($$result3) => renderTemplate`<svg class="size-5"> <use href="/icons/social.svg#mingcute-location-line"></use> </svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Github", "as": "a", "href": "https://github.com/gr1d-init", "target": "_blank" }, { "icon": ($$result3) => renderTemplate`<svg class="size-5"> <use href="/icons/social.svg#mingcute-github-line"></use> </svg>` })} </div> </div>  </section> <div id="content" class="flex flex-col gap-y-10 md:w-4/5 lg:w-5/6"> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">🚩CTF Player / ⚡EE Student</p> <p class="text-muted-foreground">
Currently pursuing my Bachelor's Degree in Electrical Engineering.
</p> <p class="text-muted-foreground">
Active CTF player in Reverse Engineering, Binary Exploitation and Forensics.
</p> ${renderComponent($$result3, "Button", $$Button, { "title": "More about me", "class": "w-fit self-end", "href": "/about", "style": "ahead" })} ` })} ${allPostsByDate.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Posts" }, { "default": ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-1.5 sm:gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ${renderComponent($$result3, "Button", $$Button, { "title": "More posts", "class": "w-fit self-end", "href": "/blog", "style": "ahead" })} ` })}`}  ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "as": "a", "heading": "University of Technology Malaysia (UTM)", "subheading": "Bachelor of Electrical Engineering with Honours", "date": "September 2024 - Present", "href": "https://www.utm.my/" }, { "default": ($$result4) => renderTemplate` <img class="absolute end-0 z-0 m-0 -my-3 h-full w-1/3 object-cover opacity-40" src="/images/utmlogo.svg"> ${renderTemplate`<ul class="ms-4 list-disc text-muted-foreground"> <li>
Naval ROTU Officer Cadet
</li> </ul>`}` })} ` })}  ${renderComponent($$result2, "Section", $$Section, { "title": "Skills" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Languages", "skills": languages })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "CTFs", "skills": ctf })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Linguistics", "skills": linguistics })} ` })} </div> </div> ${renderComponent($$result2, "Quote", $$Quote, { "class": "mt-12" })} ` })}`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/index.astro", void 0);

const $$file = "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
