import { defineConfig } from 'vitepress'
import sidebarItems from '../api/typedoc-sidebar.json'

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
        items: sidebarItems
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
