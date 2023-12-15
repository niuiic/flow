import type { UserConfig } from '@farmfe/core'
import dts from '@farmfe/js-plugin-dts'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const chunks: {
  name: string
  test: string[]
}[] = []

const walkDir = (dirPath: string, cb: (filePath: string) => void) => {
  const items = readdirSync(dirPath)
  items.forEach((item) => {
    const itemPath = join(dirPath, item)
    const isDir = statSync(itemPath).isDirectory()
    if (isDir) {
      walkDir(itemPath, cb)
    } else {
      cb(itemPath)
    }
  })
}

const collectChunks = (filePath: string) => {
  if (filePath.includes('index.ts')) {
    return
  }
  let matchedText = filePath.match(/src\/([^\.]+).+/)
  if (matchedText) {
    chunks.push({
      name: matchedText[1].replace(/\//g, '_'),
      test: [matchedText[1]]
    })
  }
}

const workDirs = ['src/flow', 'src/pipe'].map((x) => join(process.cwd(), x))

workDirs.forEach((dirPath) => walkDir(dirPath, collectChunks))

const config: UserConfig = {
  compilation: {
    input: {
      index: 'src/index.ts'
    },
    output: {
      path: 'dist/esm',
      entryFilename: '[entryName].mjs',
      format: 'esm'
    },
    resolve: {
      alias: {
        '@/': join(process.cwd(), 'src')
      }
    },
    partialBundling: {
      enforceResources: chunks
    },
    minify: true,
    sourcemap: true,
    presetEnv: false
  },
  plugins: [
    dts({
      tsConfigPath: join(process.cwd(), 'tsconfig.json')
    })
  ]
}

export default config
