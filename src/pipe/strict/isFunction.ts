import { AnyFunction, Include } from 'src/types/index.js'

/**
 * Check whether `args` is a function.
 *
 * @example
 * ```typescript
 * isFunction(() => {}); // true
 * isFunction(2); // false
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/isFunction.spec.ts | More examples}
 */
function isFunction<A>(args: A): args is Include<A, AnyFunction> {
  return typeof args === 'function'
}

export { isFunction }
