export type MenuLinks = { link: string; label: string }[]

export interface PaginationLink {
  url: string
  text?: string
  srLabel?: string
}

export interface SiteMeta {
  title: string
  description?: string
  ogImage?: string | undefined
  articleDate?: string | undefined
}

export interface SocialLink {
  name:
    | 'coolapk'
    | 'telegram'
    | 'github'
    | 'bilibili'
    | 'twitter'
    | 'zhihu'
    | 'steam'
    | 'netease_music'
    | 'mail'
    | 'linkedin'
  url: string
}

export type ShareItem = 'weibo' | 'x' | 'bluesky'

export type TimelineEvent = {
  date: string
  content: string
}
