/**
 * Returns the opposite value of `args`
 *
 * @example
 * ```ts
 * console.log(not(undefined)) // true
 * ```
 *
 * {@link #Repo/tests/functions/strict/not.spec.ts | More examples}
 */
function not(args: unknown): boolean {
  return !args
}

export { not }
