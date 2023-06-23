import { Include } from '../../types/include.js'

/**
 * Check whether `args` is undefined.
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]); // false
 * isArray(undefined); // true
 * isArray(null); // false
 * ```
 *
 * {@link #Repo/tests/functions/strict/isUndefined.spec.ts | More examples}
 */
function isUndefined<A>(args: A): args is Include<A, undefined> {
  return args === undefined
}

export { isUndefined }
