import { Include } from 'src/types/index.js'

/**
 * Check whether `args` is boolean.
 *
 * @example
 * ```typescript
 * isArray([1, 2, 3]); // false
 * isArray(false); // true
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/isBoolean.spec.ts | More examples}
 */
function isBoolean<A>(args: A): args is Include<A, boolean> {
  return typeof args === 'boolean'
}

export { isBoolean }
