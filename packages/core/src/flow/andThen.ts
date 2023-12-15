import type { MaybePromise, ResultReturnValue } from '@/types'
import { isPromise } from '@/utils'
import type { Result } from './result'
import { err } from './result'

/**
 * Call `fn` if `result` is success.
 *
 * @example
 * ```typescript
 * const userInfo = (await andThen(queryUserInfo, ok(userId))).unwrap()
 * // with flow
 * const userInfo = (await flow(ok(userId), andThen(queryUserInfo))).unwrap()
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/andThen.spec.ts | More examples}
 */
function andThen<A, R extends MaybePromise<Result<unknown>>>(
  fn: (data: A) => R,
  result: Result<A>
): ResultReturnValue<R>
function andThen<A, R extends MaybePromise<Result<unknown>>>(
  fn: (data: A) => R
): (result: Result<A>) => ResultReturnValue<R>

function andThen<A, R extends MaybePromise<Result<unknown>>>(
  fn: (data: A) => R,
  result?: Result<A>
): ResultReturnValue<R> | ((result: Result<A>) => ResultReturnValue<R>) {
  if (result === undefined) {
    return (result) => andThen(fn, result)
  }

  if (result.isOk()) {
    const res = fn(result.unwrap())
    if (isPromise(res)) {
      return res.then((result) => {
        if (result.isPromise()) {
          return result.wait()
        }
        return result
      }) as ResultReturnValue<R>
    } else {
      if (res.isPromise()) {
        return res.wait() as ResultReturnValue<R>
      }
      return res as ResultReturnValue<R>
    }
  }

  return err(result.error()!) as ResultReturnValue<R>
}

export { andThen }
