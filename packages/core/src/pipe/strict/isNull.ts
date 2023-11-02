import type { Include } from '@/types'

/**
 * Check whether `args` is null.
 *
 * @example
 * ```typescript
 * isArray([1, 2, 3]); // false
 * isArray(undefined); // false
 * isArray(null); // true
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isNull.spec.ts | More examples}
 */
function isNull<A>(args: A): args is Include<A, null> {
  return args === null
}

export { isNull }
