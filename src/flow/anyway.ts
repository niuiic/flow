import { MaybePromise, ResultReturnValue } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { Result } from './result.js'

/**
 * Call `fn` anyway.
 *
 * @example
 * ```typescript
 * const userInfo = (await anyway(queryUserInfo, err(userId))).unwrap() // throw an error
 * // with flow
 * const data = (await flow(ok(filePath), andThen(readFileToStr), anyway(closeIO))).unwrap()
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/flow/anyway.spec.ts | More examples}
 */
function anyway<A, R extends MaybePromise<Result<unknown>>>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => R,
  result: Result<A>
): ResultReturnValue<R>
function anyway<A, R extends MaybePromise<Result<unknown>>>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => R
): (result: Result<A>) => ResultReturnValue<R>

function anyway<A, R extends MaybePromise<Result<unknown>>>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => R,
  result?: Result<A>
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
): ((result: Result<A>) => ResultReturnValue<R>) | ResultReturnValue<R> {
  if (result === undefined) {
    return (result) => anyway(fn, result)
  }

  if (result.isSuccess()) {
    const res = fn({
      success: true,
      data: result.unwrap()
    })
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

  return fn({
    success: false,
    err: result.error()!
  }) as ResultReturnValue<R>
}

export { anyway }
