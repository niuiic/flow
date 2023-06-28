import { MaybePromise } from 'src/types/index.js'
import { isPromise } from 'util/types'
import { Result, err, ok } from './result.js'

/**
 * Inject a function to check the progress.
 */
function inspect<T>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => unknown,
  result: Result<T>
): MaybePromise<Result<T>>
function inspect<T>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => unknown
): (result: Result<T>) => MaybePromise<Result<T>>

function inspect<T>(
  fn: (args: { success: true; data: T } | { success: false; err: string }) => unknown,
  result?: Result<T>
): MaybePromise<Result<T>> | ((result: Result<T>) => MaybePromise<Result<T>>) {
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
