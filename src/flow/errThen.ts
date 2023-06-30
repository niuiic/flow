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
function errThen<A>(fn: (err: string) => Promise<unknown>, result: Result<A>): MaybePromise<Result<A>>
function errThen<A>(fn: (err: string) => Promise<unknown>): (result: Result<A>) => MaybePromise<Result<A>>
function errThen<A>(fn: (err: string) => unknown, result: Result<A>): Result<A>
function errThen<A>(fn: (err: string) => unknown): (result: Result<A>) => Result<A>

function errThen<A>(
  fn: (err: string) => MaybePromise<unknown>,
  result?: Result<A>
): MaybePromise<Result<A>> | ((result: Result<A>) => MaybePromise<Result<A>>) {
  if (result === undefined) {
    return (result) => errThen(fn, result)
  }

  if (result.isError()) {
    const res = fn(result.error()!)
    if (isPromise(res)) {
      return res.then<Result<A>>(() => err(result.error()!))
    }
    return err(result.error()!)
  }

  return ok(result.unwrap())
}

export { errThen }
