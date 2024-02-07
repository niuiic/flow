import { existsSync } from 'fs'
import { join } from 'path'

const rootDir = process.cwd().split('/').slice(0, -2).join('/')
const inputFiles = process.argv.slice(2).map((x) => join(rootDir, x))

const testDirMap = [
  ['packages/core/src/flow/', 'packages/test/src/flow/'],
  ['packages/core/src/pipe/lazy/', 'packages/test/src/pipe/lazy/'],
  ['packages/core/src/pipe/strict/', 'packages/test/src/pipe/strict/']
]

const missingTests = inputFiles.filter((x) => {
  const targetMap = testDirMap.find((y) => x.includes(y[0]))
  if (!targetMap) {
    return false
  }

  const mod = x.split(targetMap[0]).at(-1)?.split('/').shift()?.split('.')[0]
  if (!mod) {
    return false
  }

  return [join(rootDir, targetMap[1], mod, '.spec.ts'), join(rootDir, targetMap[1], mod)].every((x) => !existsSync(x))
})

if (missingTests.length > 0) {
  throw new Error(`tests for ${missingTests.join(', ')} are missing`)
}
