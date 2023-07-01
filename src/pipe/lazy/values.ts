/**
 *
 * Returns an iterator of the own enumerable string keyed property values of object.
 *
 * @example
 * ```ts
 * [...values({ a: 1, b: "2", c: true })]
 * // [1, "2", true]
 * ```
 *
 * {@link #Repo/tests/pipe/lazy/values.spec.ts | More examples}
 */

function* values<A extends Record<string, unknown>>(args: A) {
  for (const key in args) {
    if (Object.prototype.hasOwnProperty.call(args, key)) {
      yield args[key]
    }
  }
}

export { values }
