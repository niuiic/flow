import { execSync } from 'child_process'
import { statSync } from 'fs'
import { join } from 'path'
import { format } from './format.js'
import { fileName, getRootPath, walkDir } from './fs.js'

/** "path" should be relative to project root */
export const exportFn = (pathList: string[]) => {
  pathList.forEach((path) => {
    let exportContent = ''
    walkDir(join(getRootPath(), path), (path) => {
      if (statSync(path).isFile() && fileName(path) !== 'index') {
        exportContent += `export * from './${fileName(path)!}.js'\\n`
      }
    })
    execSync(`echo -e "${exportContent}" > ${join(path, 'index.ts')}`)
    format(join(path, 'index.ts'))
  })
}
