import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, s as spreadAttributes } from './astro/server_CAl8CNfY.mjs';
import 'kleur/colors';
import { b as $$BaseLayout, a as $$Button, c as cn } from './Label_HfPJPtS8.mjs';
import { $ as $$TOC, a as $$BackToTop } from './TOC_Bh3Mx0GL.mjs';
import { i as integrationConfig } from './linkPreview_D2g-DTnW.mjs';
import { $ as $$Image } from './_astro_assets_CKTK6YY9.mjs';

const $$Astro$1 = createAstro("https://astro-theme-pure.vercel.app");
const $$CommonPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommonPage;
  const { title, headings, info, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title }, ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} <div class="mt-6 w-full items-start gap-x-10 md:flex"> ${!!headings?.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "class": "animate top-24 z-10 min-w-40 basis-60 max-md:hidden md:sticky md:order-2", "headings": headings })}`} <article class="flex-1"> <div id="content-header"> <h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl"> ${title} </h1> </div> <div id="content"${addAttribute(cn("mt-8 max-w-none md:min-w-[45ch]", integrationConfig.typography.class), "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </div> <div class="mt-8 w-full items-start gap-x-10 md:flex"> <div class="mt-8 flex-1 text-muted-foreground md:min-w-[50ch]"> ${renderSlot($$result2, $$slots["bottom"])} </div> <div class="min-w-40 basis-60"> ${renderSlot($$result2, $$slots["bottom-sidebar"])} </div> </div> ${renderComponent($$result2, "BackToTop", $$BackToTop, { "header": "content-header", "content": "content" })} <br> </div> ` })}`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/layouts/CommonPage.astro", void 0);

const $$Astro = createAstro("https://astro-theme-pure.vercel.app");
const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, project, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg": () => import('./alex-tyson-2BAXJ7ha74s-unsplash_JX_jgHpr.mjs'),"/src/assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg": () => import('./angelica-teran-Bk9hpaXHK4o-unsplash_CA83hpae.mjs'),"/src/assets/projects/cyberx.png": () => import('./cyberx_6RQeBI71.mjs'),"/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg": () => import('./kseniia-zapiatkina-yATU3rg8tNI-unsplash_CX4HW6A0.mjs'),"/src/assets/projects/tldm.png": () => import('./tldm__BpKNU5L.mjs'),"/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg": () => import('./wen-qiao-g_w8I64FiO0-unsplash_MWXYVHvv.mjs')

});
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("animate", className), "class")}${spreadAttributes(props)}> <div class="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${project.map((project2) => {
    var imagePath = null;
    if (project2.image) {
      imagePath = "/src/assets/projects/" + project2.image;
      if (!images[imagePath])
        throw new Error(
          `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif}"`
        );
    }
    return renderTemplate`<div class="relative overflow-hidden rounded-xl border border-border"> ${imagePath && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "absolute end-0 z-0 m-0 h-full w-1/2 object-cover opacity-40", "src": images[imagePath](), "alt": project2.name, "loading": "lazy", "style": {
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      msMaskImage: "-ms-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      WebkitMaskImage: "-webkit-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
    } })}`} <div${addAttribute(cn(
      "relative z-10 flex flex-col gap-y-2 px-3 py-1.5 sm:px-4 sm:py-3",
      imagePath && "me-20"
    ), "class")}> <a class="line-clamp-1 font-medium text-foreground no-underline transition-colors"${addAttribute(project2.links?.[0]?.href ?? "#", "href")} target="_blank"> ${project2.name} </a> <div class="line-clamp-2 leading-snug text-muted-foreground sm:h-12"> ${project2.description} </div> <div class="flex flex-row items-center gap-x-2 sm:gap-x-3"> ${project2.links?.map((link) => {
      const iconId = link.type === "github" ? "mingcute-github-2-line" : link.type === "site" ? "mingcute-earth-2-line" : link.type === "doc" ? "mingcute-document-3-line" : link.type === "release" ? "mingcute-package-2-line" : null;
      return renderTemplate`<a${addAttribute(link.href, "href")} class="rounded-full bg-muted p-1 text-muted-foreground transition-colors sm:p-1.5"${addAttribute(link.type, "aria-label")} target="_blank"> <svg class="size-5"> <use${addAttribute(`/icons/project.svg#${iconId}`, "href")}></use> </svg> </a>`;
    })} </div> </div> </div>`;
  })} </div> </div>`;
}, "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/components/projects/ProjectSection.astro", void 0);

export { $$ProjectSection as $, $$CommonPage as a };
