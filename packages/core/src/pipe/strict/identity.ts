/**
 * Return the same value as the given argument.
 *
 * @example
 * ```typescript
 * identity(5); // 5
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/identity.spec.ts | More examples}
 */
function identity<A>(args: A) {
  return args
}

export { identity }
