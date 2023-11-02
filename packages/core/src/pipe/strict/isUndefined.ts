import type { Include } from '@/types'

/**
 * Check whether `args` is undefined.
 *
 * @example
 * ```typescript
 * isArray([1, 2, 3]); // false
 * isArray(undefined); // true
 * isArray(null); // false
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isUndefined.spec.ts | More examples}
 */
function isUndefined<A>(args: A): args is Include<A, undefined> {
  return args === undefined
}

export { isUndefined }
