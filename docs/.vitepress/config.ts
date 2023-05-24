import { DefaultTheme, defineConfig } from 'vitepress'
import apiSidebarItems from '../api/typedoc-sidebar.json'

const existedItems: { text?: string; link?: string }[] = []

const fixedItems = (items: DefaultTheme.SidebarItem[]): DefaultTheme.SidebarItem[] =>
  items
    .filter((v) => {
      if (v.link === null && (!v.items || v.items.length === 0)) {
        return false
      }
      if (existedItems.find((v2) => v2.text === v.text && v2.link === v.link)) {
        return false
      }
      existedItems.push({
        text: v.text,
        link: v.link
      })
      return true
    })
    .map((v) => {
      const childItems = v.items ? fixedItems(v.items) : []
      return {
        ...v,
        text: v.text === '<internal>' ? '[internal]' : v.text,
        items: childItems,
        collapsed: childItems.length > 0 ? true : undefined
      }
    })

export default defineConfig({
  base: '/flow/',
  title: 'Flow',
  description: 'Flow',
  themeConfig: {
    nav: [{ text: 'API', link: '/api/index' }],
    sidebar: [
      {
        text: 'API',
        items: fixedItems(apiSidebarItems as unknown as DefaultTheme.SidebarItem[])
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/niuiic/flow' }]
  },
  ignoreDeadLinks: true
})
