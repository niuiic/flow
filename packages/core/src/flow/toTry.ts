import type { AnyFunction } from '../types'
import { tryDo } from './tryDo'

/**
 * Convert `fn` to `(...args) => tryDo(() => fn(...args))`
 *
 * @example
 * ```typescript
 * const obj = {}
 * toTry(() => obj.a.b)() // get a failure Result
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/toTry.spec.ts | More examples}
 */
function toTry<A extends AnyFunction>(fn: A) {
  return (...args: Parameters<A>) => tryDo(() => fn(...args) as ReturnType<A>)
}

export { toTry }
