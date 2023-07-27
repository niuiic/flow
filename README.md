<p align="center">
  <a href="https://flow.niuiic.com" target="_blank" rel="noopener noreferrer">
    <img width="180" src="./docs/public/logo.jpeg" alt="Flow logo">
  </a>
</p>

<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/@niuiic/flow.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/@niuiic/flow.svg" alt="node compatibility"></a>
  <a href="https://github.com/niuiic/flow/tree/main/.github/workflows"><img src="https://github.com/niuiic/flow/actions/workflows/test.yml/badge.svg" alt="test status"></a>
  <a href="https://github.com/niuiic/flow/tree/main/.github/workflows"><img src="https://github.com/niuiic/flow/blob/coverage/badge-lines.svg" alt="test coverage"></a>
</p>

# Flow

> Functional library for TypeScript/JavaScript.

- Lazy evaluation
- Pure function type restrictions

## Conventions

- Surround variable/function with \`\` in comments.
- Surround variable/function with \"\" in code(such as the content of Error).
- Fix wrong nested `Promise` type for user.
- Check type/range errors which may only occurs in js or is not type-constrained.
- Any sentence in code or comment should start with an upper letter or variable/function.
- Add `Immutable` type restriction for parameters of some callback.
- AsyncIterable should be iterated by `for await`.

[Read the Docs to Learn More](https://flow.niuiic.com).

## License

[MIT](LICENSE) License © 2023-PRESENT [niuiic](https://github.com/niuiic)
