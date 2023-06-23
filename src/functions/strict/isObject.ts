import { Include } from '../../types/include.js'

/**
 * Check whether `args` is an object.
 *
 * @example
 * ```ts
 * isObject({}); // true
 * isObject([1, 2, 3]); // true
 * isObject(() => {}); // true
 * isObject(null); // false
 * isObject(123); // false
 * ```
 *
 * {@link #Repo/tests/functions/strict/isObject.spec.ts | More examples}
 */
function isObject<A>(args: A): args is Include<A, object> {
  const type = typeof args
  return args != null && (type === 'object' || type === 'function')
}

export { isObject }
