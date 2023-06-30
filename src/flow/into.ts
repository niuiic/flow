import { Result, err, ok } from './result.js'

/**
 * Convert data of `result`.
 *
 * @example
 * ```ts
 * const userInfo = (await ifThen((userId) => userId > 1, queryUserInfo, into(injectUserId, ok()))).unwrap()
 * // with flow
 * const userInfo = (await flow(ok(userId), into(injectUserName), andThen(queryUserInfo), ifThen(isNotAdmin, printUserInfo), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link #Repo/tests/flow/into.spec.ts | More examples}
 */
function into<A, R>(fn: (data: A) => R, result: Result<A>): Result<R>
function into<A, R>(fn: (data: A) => R): (result: Result<A>) => Result<R>

function into<A, R>(fn: (data: A) => R, result?: Result<A>): Result<R> | ((result: Result<A>) => Result<R>) {
  if (result === undefined) {
    return (result) => into(fn, result)
  }

  if (result.isSuccess()) {
    return ok(fn(result.unwrap()))
  }

  return err(result.error()!)
}

export { into }
