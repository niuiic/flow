import { execSync } from 'child_process'
import { existsSync, statSync } from 'fs'
import { join } from 'path'
import { fileName, getRootPath, walkDir } from './fs.js'

const eslint = () => {
  const error = execSync(`pnpm eslint -f unix --ext .ts ${getRootPath()}`).toString()
  if (error !== '') {
    throw new Error(error)
  }
}

const checkTests = () => {
  const rootPath = getRootPath()
  const sourceDir = join(rootPath, 'src/functions')
  const testDir = join(rootPath, 'tests/functions')
  const missingTests: string[] = []
  ;[(join(sourceDir, 'lazy'), join(sourceDir, 'strict'))].forEach((dir) => {
    walkDir(dir, (path) => {
      if (statSync(path).isDirectory()) {
        return
      }
      if (fileName(path) === 'index') {
        return
      }
      const relativePath = path.slice(sourceDir.length + 1)
      if (!existsSync(join(testDir, relativePath.replace('.ts', '.spec.ts')))) {
        missingTests.push(relativePath)
      }
    })
  })

  if (missingTests.length > 0) {
    throw new Error(`Tests for [${missingTests.join(', ')}] are missing.`)
  }
}

const checkTs = () => {
  const error = execSync(`pnpm tsc -p ${join(getRootPath(), 'tsconfig.json')} --noEmit`).toString()
  if (error !== '') {
    throw new Error(error)
  }
}

const jobs = [eslint, checkTs, checkTests]

export const lint = () => {
  const errors: string[] = []
  jobs.forEach((job) => {
    try {
      job()
    } catch (err) {
      errors.push(err as string)
    }
  })
  if (errors.length > 0) {
    throw new Error(errors.join('\n\n'))
  }
}
