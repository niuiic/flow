import { Include } from 'src/types/index.js'

/**
 * Check whether `args` is number.
 *
 * @example
 * ```typescript
 * isNumber(2); // true
 * isNumber("a"); // false
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/isNumber.spec.ts | More examples}
 */
function isNumber<A>(args: A): args is Include<A, number> {
  return typeof args === 'number'
}

export { isNumber }
