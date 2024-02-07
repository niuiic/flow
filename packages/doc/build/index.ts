import { execSync } from 'child_process'
import { cleanLogo } from './clean'
import { calcSidebarItems } from './sidebar'

execSync('pnpm typedoc')

cleanLogo()

calcSidebarItems()

execSync('pnpm vitepress build docs')
