import { Include } from 'src/types/index.js'

/**
 * Check whether `args` is a string.
 *
 * @example
 * ```typescript
 * isString("a"); // true
 * isString(2); // false
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/isString.spec.ts | More examples}
 */
function isString<A>(args: A): args is Include<A, string> {
  return typeof args === 'string'
}

export { isString }
