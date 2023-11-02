import type { Include } from '@/types'

/**
 * Check whether `args` is boolean.
 *
 * @example
 * ```typescript
 * isArray([1, 2, 3]); // false
 * isArray(false); // true
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isBoolean.spec.ts | More examples}
 */
function isBoolean<A>(args: A): args is Include<A, boolean> {
  return typeof args === 'boolean'
}

export { isBoolean }
