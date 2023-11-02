import type { AnyFunction, Include } from '@/types'

/**
 * Check whether `args` is a function.
 *
 * @example
 * ```typescript
 * isFunction(() => {}); // true
 * isFunction(2); // false
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isFunction.spec.ts | More examples}
 */
function isFunction<A>(args: A): args is Include<A, AnyFunction> {
  return typeof args === 'function'
}

export { isFunction }
