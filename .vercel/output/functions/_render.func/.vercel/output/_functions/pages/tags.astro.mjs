import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CAl8CNfY.mjs';
import 'kleur/colors';
import { a as $$Button, c as cn, b as $$BaseLayout } from '../chunks/Label_HfPJPtS8.mjs';
import { g as getAllCollections, c as getUniqueTagsWithCount } from '../chunks/collections_BdQ8ixvP.mjs';
import '../chunks/linkPreview_D2g-DTnW.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllCollections();
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    description: "A list of all the topics I've written about in my posts",
    title: "All Tags"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "back" })} <h1 class="mb-6 mt-6 text-3xl font-medium sm:mt-10">Tags</h1> ${allTags.length > 0 ? renderTemplate`<ul class="animate flex flex-wrap gap-4"> ${allTags.map(([tag, val]) => renderTemplate`<li> ${renderComponent($$result2, "Button", $$Button, { "href": `/tags/${tag}`, "style": "pill", "class": cn(
    "items-start gap-x-1",
    val > 2 ? "rounded-2xl px-3.5 py-1 text-xl" : val > 1 && "text-lg"
  ) }, { "default": ($$result3) => renderTemplate`${tag}<span${addAttribute(val > 2 ? "text-base" : "text-xs", "class")}>${val}</span> ` })} </li>`)} </ul>` : renderTemplate`<p>Any tag yet.</p>`} </div> ` })}`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
