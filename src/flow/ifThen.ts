import { MaybePromise } from 'src/index.js'
import { isPromise } from 'util/types'
import { Result, err, ok } from './result.js'

/**
 * Call `fn` if `result` is success and `condition` is satisfied.
 */
function ifThen<T>(
  condition: (data: T) => boolean,
  fn: (data: T) => unknown,
  result: Result<T>
): MaybePromise<Result<T>>
function ifThen<T>(
  condition: (data: T) => boolean,
  fn: (data: T) => unknown
): (result: Result<T>) => MaybePromise<Result<T>>

function ifThen<T>(
  condition: (data: T) => boolean,
  fn: (data: T) => unknown,
  result?: Result<T>
): MaybePromise<Result<T>> | ((result: Result<T>) => MaybePromise<Result<T>>) {
  if (result === undefined) {
    return (result) => ifThen(condition, fn, result)
  }

  if (result.isError()) {
    return err(result.error()!)
  }

  if (condition(result.unwrap())) {
    const res = fn(result.unwrap())
    if (isPromise(res)) {
      return res.then(() => ok(result.unwrap()))
    }
    return ok(result.unwrap())
  }

  return ok(result.unwrap())
}

export { ifThen }
