import { MaybePromise } from 'src/types/index.js'
import { Result, err } from './result.js'

/**
 * Call `fn` if `result` is success.
 *
 * @example
 * ```typescript
 * const userInfo = (await andThen(queryUserInfo, ok(userId))).unwrap()
 * // with flow
 * const userInfo = (await flow(ok(userId), andThen(queryUserInfo))).unwrap()
 * ```
 *
 * {@link #Repo/tests/flow/andThen.spec.ts | More examples}
 */
function andThen<A, R extends Result<unknown>>(fn: (data: A) => R, result: Result<A>): R
function andThen<A, R extends Result<unknown>>(fn: (data: A) => R): (result: Result<A>) => R
function andThen<A, R extends Result<unknown>>(fn: (data: A) => MaybePromise<R>, result: Result<A>): MaybePromise<R>
function andThen<A, R extends Result<unknown>>(fn: (data: A) => MaybePromise<R>): (result: Result<A>) => MaybePromise<R>

function andThen<A, R extends Result<unknown>>(
  fn: (data: A) => MaybePromise<R>,
  result?: Result<A>
): MaybePromise<R> | ((result: Result<A>) => MaybePromise<R>) {
  if (result === undefined) {
    return (result) => andThen(fn, result)
  }

  if (result.isSuccess()) {
    return fn(result.unwrap())
  }

  return err(result.error()!) as R
}

export { andThen }
