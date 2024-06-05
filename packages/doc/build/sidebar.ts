import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import type { DefaultTheme } from 'vitepress'

export const calcSidebarItems = () => {
  const file = join(process.cwd(), 'docs/api/typedoc-sidebar.json')
  const text = readFileSync(file).toString()
  const items = JSON.parse(text)
  writeFileSync(file, JSON.stringify(fixedItems(items)))
}

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
        link: x.link?.replace(/^\/docs/g, ''),
        items: childItems,
        collapsed: childItems.length > 0 ? true : undefined
      }
    })
