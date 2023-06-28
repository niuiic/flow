import { Include } from 'src/types/index.js'

/**
 * Check whether `args` is null.
 *
 * @example
 * ```ts
 * isArray([1, 2, 3]); // false
 * isArray(undefined); // false
 * isArray(null); // true
 * ```
 *
 * {@link #Repo/tests/pipe/strict/isNull.spec.ts | More examples}
 */
function isNull<A>(args: A): args is Include<A, null> {
  return args === null
}

export { isNull }
