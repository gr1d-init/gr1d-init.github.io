import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CAl8CNfY.mjs';
import 'kleur/colors';
import { a as $$Button, b as $$BaseLayout } from '../chunks/Label_HfPJPtS8.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    description: "Not found",
    title: "404"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-10 text-center sm:px-6 lg:px-8"> <h1 class="block text-7xl font-bold sm:text-9xl">404</h1> <p class="mt-3 text-muted-foreground">Oops, something went wrong.</p> <p class="">Sorry, we couldn't find your page.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Back to home", "href": "/", "style": "ahead", "class": "mt-5" })} </div> ` })}`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/404.astro", void 0);

const $$file = "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
