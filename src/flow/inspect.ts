import { MaybePromise } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { Result, err, ok } from './result.js'

/**
 * Inject a function to check the progress.
 *
 * @example
 * ```typescript
 * // with flow
 * const userInfo = (await flow(ok(userId), andThen(queryUserInfo), inspect(isQuerySuccess), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link #Repo/tests/flow/into.spec.ts | More examples}
 */
function inspect<A>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => Promise<unknown>,
  result: Result<A>
): MaybePromise<Result<A>>
function inspect<A>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => Promise<unknown>
): (result: Result<A>) => MaybePromise<Result<A>>
function inspect<A>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => unknown,
  result: Result<A>
): Result<A>
function inspect<A>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => unknown
): (result: Result<A>) => Result<A>

function inspect<A>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => unknown,
  result?: Result<A>
): MaybePromise<Result<A>> | ((result: Result<A>) => MaybePromise<Result<A>>) {
  if (result === undefined) {
    return (result) => inspect(fn, result)
  }

  let res
  if (result.isSuccess()) {
    res = fn({
      success: true,
      data: result.unwrap()
    })
  } else {
    res = fn({
      success: false,
      err: result.error()!
    })
  }

  if (isPromise(res)) {
    return res.then(() => (result.isSuccess() ? ok(result.unwrap()) : err(result.error()!)))
  }

  return result.isSuccess() ? ok(result.unwrap()) : err(result.error()!)
}

export { inspect }
