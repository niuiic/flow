import { isPromise, toStr } from '../utils'
import { err, ok, type Result } from './result'

type TryDoResult<T> = [T] extends [Promise<infer U>] ? Promise<Result<Awaited<U>>> : Result<T>

/**
 * Convert the result of `fn` to `Result`. Automatically catch error.
 *
 * @example
 * ```typescript
 * const obj = {}
 * tryDo(() => obj.a.b) // get a failure Result
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/tryDo.spec.ts | More examples}
 */
function tryDo<A>(fn: () => A): TryDoResult<A> {
  try {
    const res = fn()
    if (isPromise(res)) {
      return res.then((x) => ok(x)).catch((x) => err(toStr(x))) as TryDoResult<A>
    }
    return ok(res) as TryDoResult<A>
  } catch (error) {
    return err(toStr(error)) as TryDoResult<A>
  }
}

export { tryDo }
