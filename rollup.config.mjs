import typescript from '@rollup/plugin-typescript'
import path from 'path'
import { defineConfig } from 'rollup'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.module),
      name: pkg.name,
      format: 'es',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [
      typescript({
        outDir: path.dirname(pkg.module),
        declarationDir: path.dirname(pkg.module),
        exclude: ['./tests/**/*.spec.ts', './cli/**/*.ts']
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      name: pkg.name,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [
      typescript({
        outDir: path.dirname(pkg.main),
        declarationDir: path.dirname(pkg.main),
        exclude: ['./tests/**/*.spec.ts', './cli/**/*.ts']
      })
    ]
  }
])
