import type { Include } from '@/types'

/**
 * Check whether `args` is a string.
 *
 * @example
 * ```typescript
 * isString("a"); // true
 * isString(2); // false
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isString.spec.ts | More examples}
 */
function isString<A>(args: A): args is Include<A, string> {
  return typeof args === 'string'
}

export { isString }
