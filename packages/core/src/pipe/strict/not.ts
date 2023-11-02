/**
 * Returns the opposite value of `args`
 *
 * @example
 * ```typescript
 * console.log(not(undefined)) // true
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/not.spec.ts | More examples}
 */
function not(args: unknown): boolean {
  return !args
}

export { not }
