import type { ShareItem, SocialLink, TimelineEvent } from './common'

export interface SiteConfig {
  author: string
  title: string
  site: string
  description: string
  lang: string
  ogLocale: string
  date: {
    locale: string | string[] | undefined
    options: Intl.DateTimeFormatOptions
  }

  blog: {
    pageSize: number
  }

  content: {
    externalLinkArrow: boolean
    share: ShareItem[]
  }
}

export interface FooterConfig {
  registration?: {
    url: string
    text: string
  }
  socialLinks: SocialLink[]
}

export interface IntegrationConfig {
  typography: {
    class: string
  }
}
