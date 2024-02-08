import typescript from '@rollup/plugin-typescript'
import { join } from 'path'
import { defineConfig } from 'rollup'
import { dts } from 'rollup-plugin-dts'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      dir: './dist/esm',
      name: 'fx-flow',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    },
    plugins: [
      typescript({
        tsconfig: join(process.cwd(), 'tsconfig.json')
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      dir: './dist/cjs',
      name: 'fx-flow',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    plugins: [
      typescript({
        tsconfig: join(process.cwd(), 'tsconfig.cjs.json')
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      dir: './dist/type',
      name: 'fx-flow',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [
      dts({
        tsconfig: join(process.cwd(), 'tsconfig.json')
      })
    ]
  }
])
