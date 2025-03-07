import type { CardListData, FooterConfig, IntegrationConfig, MenuLinks, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  // === Required meta properties ===
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'gr1d',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'gr1d-init',
  // Meta property used to generate your sitemap and canonical URLs in your final build
  site: 'https://gr1d-init.github.io',
  // Meta property used as the default description meta property
  description: 'No logs, no traces',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'en-US',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_US',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-US',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },

  // === Customize options ===
  blog: {
    pageSize: 8 // blog page size for pagination
  },

  content: {
    externalLinkArrow: true, // show external link arrow
    // Currently support weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
  }
}

// Footer configuration, which contains the registration and social links
// and will be used in Footer.astro
export const footerConfig: FooterConfig = {
  socialLinks: [
    {
      name: 'mail',
      url: 'mailto:gr1d_init@proton.me'
    },
    {
      name: 'github',
      url: 'https://github.com/gr1d-init'
    }
  ]
}

export const integrationConfig: IntegrationConfig = {
  // Tailwindcss typography
  typography: {
    // https://github.com/tailwindlabs/tailwindcss-typography
    class: 'prose prose-pure dark:prose-invert dark:prose-pure prose-headings:font-medium'
  },
}

export const menuLinks: MenuLinks = [
  {
    link: '/blog',
    label: 'Blog'
  },
  {
    link: '/projects',
    label: 'Projects'
  },
  {
    link: '/about',
    label: 'About'
  }
]
