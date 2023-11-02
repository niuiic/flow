import type { Include } from '@/types'

/**
 * Check whether `args` is an array.
 *
 * @example
 * ```typescript
 * isArray([1, 2, 3]); // true
 * isArray(2); // false
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isArray.spec.ts | More examples}
 */
function isArray<A>(args: A): args is Include<A, unknown[] | Readonly<unknown[]>> {
  return Array.isArray(args)
}

export { isArray }
