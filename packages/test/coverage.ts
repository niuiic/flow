import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

execSync('pnpm jest --coverage')

const file = join(process.cwd(), 'coverage/lcov.info')
const text = readFileSync(file).toString()
const absolutePath = join(process.cwd().split('/').slice(0, -1).join('/'), 'core')
writeFileSync(file, text.replace(/SF:\.\.\/core/g, `SF:${absolutePath}`))
