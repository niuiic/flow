import { Result, err } from './result.js'

/**
 * Convert data of `result`.
 */
function into<T, R>(fn: (data: T) => Result<R>, result: Result<T>): Result<R>
function into<T, R>(fn: (data: T) => Result<R>): (result: Result<T>) => Result<R>

function into<T, R>(fn: (data: T) => Result<R>, result?: Result<T>): Result<R> | ((result: Result<T>) => Result<R>) {
  if (result === undefined) {
    return (result) => into(fn, result)
  }

  if (result.isSuccess()) {
    return fn(result.unwrap())
  }

  return err(result.error()!)
}

export { into }
