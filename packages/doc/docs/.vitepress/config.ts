import { DefaultTheme, defineConfig } from 'vitepress'
import apiSidebarItems from '../api/typedoc-sidebar.json'

const fixedItems = (items: DefaultTheme.SidebarItem[]): DefaultTheme.SidebarItem[] =>
  items
    .filter((x) => {
      if (!x.link && (!x.items || x.items.length === 0)) {
        return false
      }
      if (x.link && ['/api/index.md', '/api/modules.md'].includes(x.link)) {
        return false
      }
      return true
    })
    .map((x) => {
      const childItems = x.items ? fixedItems(x.items) : []
      return {
        ...x,
        text: x.text === '<internal>' ? '[internal]' : x.text,
        items: childItems,
        collapsed: childItems.length > 0 ? true : undefined
      }
    })

export default defineConfig({
  title: 'Fx-Flow',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  description: 'Fx-Flow',
  themeConfig: {
    siteTitle: 'Fx-Flow',
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/quickstart' },
      { text: 'API', link: '/api/flow/index' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'quickstart', link: '/guide/quickstart' },
          { text: 'lazy evaluation', link: '/guide/lazyEvaluation' },
          { text: 'pure function', link: '/guide/pureFunc' },
          { text: 'curry', link: '/guide/curry' },
          { text: 'debug', link: '/guide/debug' }
        ]
      },
      {
        text: 'API',
        items: fixedItems(apiSidebarItems as unknown as DefaultTheme.SidebarItem[])
      }
    ],
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/niuiic/fx-flow' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present niuiic'
    },
    search: {
      provider: 'local'
    }
  },
  ignoreDeadLinks: true,
  lastUpdated: true
})
