import { MaybePromise } from 'src/types/index.js'
import { Result, err } from './result.js'

/**
 * Call `fn` if `result` is success.
 *
 * @example
 * ```ts
 * const userInfo = (await andThen(queryUserInfo, ok(userId))).unwrap()
 * // with flow
 * const userInfo = (await flow(ok(userId), andThen(queryUserInfo))).unwrap()
 * ```
 *
 * {@link #Repo/tests/flow/andThen.spec.ts | More examples}
 */
function andThen<T, R extends Result<unknown>>(fn: (data: T) => R, result: Result<T>): R
function andThen<T, R extends Result<unknown>>(fn: (data: T) => R): (result: Result<T>) => R
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
