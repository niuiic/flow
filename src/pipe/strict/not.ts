/**
 * Returns the opposite value of `args`
 *
 * @example
 * ```typescript
 * console.log(not(undefined)) // true
 * ```
 *
 * {@link #Repo/tests/pipe/strict/not.spec.ts | More examples}
 */
function not(args: unknown): boolean {
  return !args
}

export { not }
