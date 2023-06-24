import { Include } from 'src/types/index.js'

/**
 * Check whether `args` is a string.
 *
 * @example
 * ```ts
 * isString("a"); // true
 * isString(2); // false
 * ```
 *
 * {@link #Repo/tests/functions/strict/isString.spec.ts | More examples}
 */
function isString<A>(args: A): args is Include<A, string> {
  return typeof args === 'string'
}

export { isString }
