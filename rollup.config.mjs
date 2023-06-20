import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: './dist',
    format: 'cjs'
  },
  plugins: [
    typescript({
      sourceMap: false,
      exclude: ['./tests/**/*.spec.ts', './cli/**/*.ts']
    })
  ]
}
