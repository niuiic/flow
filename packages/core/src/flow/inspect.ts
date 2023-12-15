import type { MaybePromise } from '@/types'
import { isPromise } from '@/utils'
import type { Result } from './result'
import { err, ok } from './result'

/**
 * Inject a function to check the progress.
 *
 * @example
 * ```typescript
 * // with flow
 * const userInfo = (await flow(ok(userId), andThen(queryUserInfo), inspect(isQuerySuccess), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/inspect.spec.ts | More examples}
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
  if (result.isOk()) {
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
    return res.then(() => (result.isOk() ? ok(result.unwrap()) : err(result.error()!)))
  }

  return result.isOk() ? ok(result.unwrap()) : err(result.error()!)
}

export { inspect }
