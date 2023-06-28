/**
 * Return a function that returns the given value.
 *
 * @example
 * ```ts
 * console.log(filter([1, 2, 3, 4], always(true))) // [1, 2, 3, 4]
 * ```
 *
 * {@link #Repo/tests/functions/strict/always.spec.ts | More examples}
 */
function always<A>(args: A): (...args: unknown[]) => A {
  return () => args
}

export { always }
