# Flow

A functional library for TypeScript/JavaScript.

## Features

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

## Documentation

[Document Online](https://niuiic.github.io/flow/)

Generate documents by `pnpm doc`.
