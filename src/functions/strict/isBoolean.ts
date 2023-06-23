import { Include } from '../../types/include.js'

/**
 * Returns true if `a` is an Array.
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]); // true
 * isArray(2); // false
 * ```
 *
 * {@link #Repo/tests/functions/strict/isBoolean.spec.ts | More examples}
 */
function isBoolean<A>(args: A): args is Include<A, boolean> {
  return typeof args === 'boolean'
}

export { isBoolean }
