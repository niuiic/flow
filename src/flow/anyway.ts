import { MaybePromise } from 'src/index.js'
import { Result } from './result.js'

/**
 * Call `fn` anyway.
 *
 * @example
 * ```ts
 * const userInfo = (await anyway(queryUserInfo, err(userId))).unwrap() // throw an error
 * // with flow
 * const data = (await flow(ok(filePath), andThen(readFileToStr), anyway(closeIO))).unwrap()
 * ```
 *
 * {@link #Repo/tests/flow/anyway.spec.ts | More examples}
 */
function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => Result<R>,
  result: Result<T>
): Result<R>
function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => Result<R>
): (result: Result<T>) => Result<R>
function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => Promise<Result<R>>,
  result: Result<T>
): MaybePromise<Result<R>>
function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => Promise<Result<R>>
): (result: Result<T>) => MaybePromise<Result<R>>

function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => MaybePromise<Result<R>>,
  result?: Result<T>
): MaybePromise<Result<R>> | ((result: Result<T>) => MaybePromise<Result<R>>) {
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
