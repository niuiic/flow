import { MaybePromise } from 'src/index.js'
import { Result } from './result.js'

/**
 * Call `fn` anyway.
 */
function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => MaybePromise<Result<R>>,
  result: Result<T>
): MaybePromise<Result<R>>
function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => MaybePromise<Result<R>>
): (result: Result<T>) => MaybePromise<Result<R>>

function anyway<T, R>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => MaybePromise<Result<R>>,
  result?: Result<T>
): MaybePromise<Result<R>> | ((result: Result<T>) => MaybePromise<Result<R>>) {
  if (result === undefined) {
    return (result) => anyway(fn, result)
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
