import { execSync } from 'child_process'
import { replaceText } from './replace'
import { calcSidebarItems } from './sidebar'

execSync('pnpm typedoc', {
  stdio: 'inherit'
})

replaceText()

calcSidebarItems()

execSync('pnpm vitepress build docs', {
  stdio: 'inherit'
})
