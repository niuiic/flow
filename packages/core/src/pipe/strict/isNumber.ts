import type { Include } from '@/types'

/**
 * Check whether `args` is number.
 *
 * @example
 * ```typescript
 * isNumber(2); // true
 * isNumber("a"); // false
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isNumber.spec.ts | More examples}
 */
function isNumber<A>(args: A): args is Include<A, number> {
  return typeof args === 'number'
}

export { isNumber }
