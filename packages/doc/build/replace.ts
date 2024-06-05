import { existsSync, lstatSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'fs'
import { join } from 'path'

export const replaceText = () => {
  const workDir = join(process.cwd(), 'docs/api')
  if (!existsSync(workDir)) {
    return
  }

  rmSync(join(workDir, 'index.md'))

  const walkDir = (root: string, cb: (file: string) => void) => {
    const children = readdirSync(root)
    children.forEach((child) => {
      const path = join(root, child)

      if (lstatSync(path).isDirectory()) {
        walkDir(path, cb)
        return
      }

      cb(path)
    })
  }

  walkDir(workDir, (file) => {
    const text = readFileSync(file).toString()
    writeFileSync(
      file,
      text
        .replace(
          `***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)`,
          ''
        )
        .replace(/\\</g, '<')
        .replace(/\\>/g, '>')
        .replace(/<([^>]*)>/g, '&lt;$1&gt;')
        .replace(/&lt;a(.*)&gt;(.*)&lt;\/a&gt;/g, '<a$1>$2</a>')
    )
  })
}
