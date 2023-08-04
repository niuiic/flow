import { MaybePromise, ResultReturnValue } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { Result, err } from './result.js'

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
 * {@link https://github.com/niuiic/flow/blob/main/tests/flow/andThen.spec.ts | More examples}
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

  if (result.isSuccess()) {
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
