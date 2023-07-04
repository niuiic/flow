import { execSync } from 'child_process'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { format } from './format.js'
import { fileName, fileSuffix, getRootPath } from './fs.js'

/** "path" should be relative to project root */
export const exportFn = (pathList: string[]) => {
  const rootDir = getRootPath()
  pathList.forEach((path) => {
    let exportContent = ''
    const fileOrDirList = readdirSync(join(rootDir, path))
    fileOrDirList.forEach((fd) => {
      const filePath = join(rootDir, path, fd)
      const stats = statSync(filePath)
      if (stats.isDirectory()) {
        exportContent += `export * from './${fd}/index.js'\\n`
      } else if (stats.isFile() && fileSuffix(filePath) === 'ts' && fileName(filePath) !== 'index') {
        exportContent += `export * from './${fileName(filePath)!}.js'\\n`
      }
    })
    execSync(`echo -e "${exportContent}" > ${join(path, 'index.ts')}`)
    format(join(path, 'index.ts'))
  })
}
