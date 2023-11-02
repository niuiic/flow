import type { UserConfig } from '@farmfe/core'
import dts from '@farmfe/js-plugin-dts'
import path from 'node:path'

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
  },
  plugins: [
    dts({
      tsConfigPath: './tsconfig.json'
    })
  ]
}

export default config
