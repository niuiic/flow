import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }
import tsConfig from './tsconfig.json' assert { type: 'json' }

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
        exclude: ['./tests/**/*.spec.ts', './cli/**/*.ts']
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/es5',
      name: pkg.name,
      format: 'es',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [
      typescript({
        outDir: 'dist/es5',
        exclude: ['./tests/**/*.spec.ts', './cli/**/*.ts']
      }),
      getBabelOutputPlugin({
        presets: ['@babel/preset-env']
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.types),
      name: pkg.name,
      format: 'es',
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: tsConfig.compilerOptions.baseUrl,
          paths: tsConfig.compilerOptions.paths
        }
      })
    ]
  }
])
