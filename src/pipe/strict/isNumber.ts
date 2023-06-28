import { Include } from 'src/types/index.js'

/**
 * Check whether `args` is number.
 *
 * @example
 * ```ts
 * isNumber(2); // true
 * isNumber("a"); // false
 * ```
 *
 * {@link #Repo/tests/pipe/strict/isNumber.spec.ts | More examples}
 */
function isNumber<A>(args: A): args is Include<A, number> {
  return typeof args === 'number'
}

export { isNumber }
