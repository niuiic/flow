import { MaybePromise } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { Result, err, ok } from './result.js'

/**
 * Call `fn` if `result` is failure.
 *
 * @example
 * ```ts
 * const userInfo = (await errThen(queryUserInfo, err(userId))).unwrap() // throw an error
 * // with flow
 * const userInfo = (await flow(ok(userId), andThen(queryUserInfo), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link #Repo/tests/flow/errThen.spec.ts | More examples}
 */
function errThen<T>(fn: (err: string) => Promise<unknown>, result: Result<T>): MaybePromise<Result<T>>
function errThen<T>(fn: (err: string) => Promise<unknown>): (result: Result<T>) => MaybePromise<Result<T>>
function errThen<T>(fn: (err: string) => unknown, result: Result<T>): Result<T>
function errThen<T>(fn: (err: string) => unknown): (result: Result<T>) => Result<T>

function errThen<T>(
  fn: (err: string) => MaybePromise<unknown>,
  result?: Result<T>
): MaybePromise<Result<T>> | ((result: Result<T>) => MaybePromise<Result<T>>) {
  if (result === undefined) {
    return (result) => errThen(fn, result)
  }

  if (result.isError()) {
    const res = fn(result.error()!)
    if (isPromise(res)) {
      return res.then<Result<T>>(() => err(result.error()!))
    }
    return err(result.error()!)
  }

  return ok(result.unwrap())
}

export { errThen }
