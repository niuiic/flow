import { existsSync, lstatSync, readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

export const cleanLogo = () => {
  const workDir = join(process.cwd(), 'docs/api')
  if (!existsSync(workDir)) {
    return
  }

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
      text.replace(
        `***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)`,
        ''
      )
    )
  })
}
