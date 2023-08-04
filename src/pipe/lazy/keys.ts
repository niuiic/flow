/**
 *
 * Returns an iterator of the own enumerable property names of object.
 *
 * @example
 * ```typescript
 * [...keys({ a: 1, b: "2", c: true })]
 * // ["a", "b", "c"]
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/keys.spec.ts | More examples}
 */

function* keys<A extends Record<string, unknown>>(args: A) {
  for (const key in args) {
    if (Object.prototype.hasOwnProperty.call(args, key)) {
      yield key
    }
  }
}

export { keys }
