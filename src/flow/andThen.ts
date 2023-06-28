import { MaybePromise } from 'src/index.js'
import { Result, err } from './result.js'

/**
 * Call `fn` if `result` is success.
 */
function andThen<T, R extends Result<unknown>>(fn: (data: T) => MaybePromise<R>, result: Result<T>): MaybePromise<R>
function andThen<T, R extends Result<unknown>>(fn: (data: T) => MaybePromise<R>): (result: Result<T>) => MaybePromise<R>

function andThen<T, R extends Result<unknown>>(
  fn: (data: T) => MaybePromise<R>,
  result?: Result<T>
): MaybePromise<R> | ((result: Result<T>) => MaybePromise<R>) {
  if (result === undefined) {
    return (result) => andThen(fn, result)
  }

  if (result.isSuccess()) {
    return fn(result.unwrap())
  }

  return err(result.error()!) as R
}

export { andThen }
