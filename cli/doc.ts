import { execSync } from 'child_process'
import { join } from 'path'
import { getRootPath } from './fs.js'

export const cleanDoc = () => {
  const rootPath = getRootPath()
  try {
    execSync(
      `cd ${join(rootPath, 'docs/api')} &&` +
        'sed -zi "s/---\\n\\nGenerated using \\[TypeDoc\\].*//g" `grep -rl "Generated using \\[TypeDoc\\].*"`'
    )
  } catch {
    console.log('nothing to clean')
  }
}
