import { MaybePromise } from 'src/types/index.js'
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
 * {@link #Repo/tests/flow/anyway.spec.ts | More examples}
 */
function anyway<A, R>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => Result<R>,
  result: Result<A>
): Result<R>
function anyway<A, R>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => Result<R>
): (result: Result<A>) => Result<R>
function anyway<A, R>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => Promise<Result<R>>,
  result: Result<A>
): MaybePromise<Result<R>>
function anyway<A, R>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => Promise<Result<R>>
): (result: Result<A>) => MaybePromise<Result<R>>

function anyway<A, R>(
  fn: (args: { success: true; data: A } | { success: false; err: string }) => MaybePromise<Result<R>>,
  result?: Result<A>
): MaybePromise<Result<R>> | ((result: Result<A>) => MaybePromise<Result<R>>) {
  if (result === undefined) {
    return (result) => anyway(fn as () => any, result)
  }

  if (result.isSuccess()) {
    return fn({
      success: true,
      data: result.unwrap()
    })
  }

  return fn({
    success: false,
    err: result.error()!
  })
}

export { anyway }
