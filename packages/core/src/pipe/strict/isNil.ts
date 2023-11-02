import type { Include } from '@/types'
import { isNull } from './isNull'
import { isUndefined } from './isUndefined'

/**
 * Check whether `args` is null or undefined.
 *
 * @example
 * ```typescript
 * isArray([1, 2, 3]); // false
 * isArray(null); // true
 * isArray(undefined); // true
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isNil.spec.ts | More examples}
 */
function isNil<A>(args: A): args is Include<A, boolean> {
  return isNull(args) || isUndefined(args)
}

export { isNil }
