import type { UserConfig } from '@farmfe/core'
import path from 'node:path'

const config: UserConfig = {
  compilation: {
    input: {
      index: 'src/index.ts'
    },
    output: {
      path: 'dist/cjs',
      entryFilename: '[entryName].cjs',
      format: 'cjs'
    },
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src')
      }
    },
    partialBundling: {
      enforceResources: [
        {
          name: 'index',
          test: ['.+']
        }
      ]
    },
    minify: true,
    sourcemap: true,
    presetEnv: false
  }
}

export default config
