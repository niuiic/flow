import { Include } from '../../types/basic.js'

/**
 * Check whether `args` is an array.
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]); // true
 * isArray(2); // false
 * ```
 *
 * {@link #Repo/tests/functions/strict/isArray.spec.ts | More examples}
 */
function isArray<A>(args: A): args is Include<A, unknown[] | Readonly<unknown[]>> {
  return Array.isArray(args)
}

export { isArray }
