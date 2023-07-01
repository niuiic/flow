import { MaybePromise } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { Result, err, ok } from './result.js'

/**
 * Call `fn` if `result` is success and `condition` is satisfied.
 *
 * @example
 * ```typescript
 * const userInfo = (await ifThen((userId) => userId > 1, queryUserInfo, ok(userId))).unwrap()
 * // with flow
 * const userInfo = (await flow(ok(userId), andThen(queryUserInfo), ifThen(isNotAdmin, printUserInfo), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link #Repo/tests/flow/ifThen.spec.ts | More examples}
 */
function ifThen<A, B extends A>(
  condition: (data: A) => data is B,
  fn: (data: B) => unknown,
  result: Result<A>
): MaybePromise<Result<A>>
function ifThen<A>(
  condition: (data: A) => boolean,
  fn: (data: A) => unknown,
  result: Result<A>
): MaybePromise<Result<A>>
function ifThen<A, B extends A>(
  condition: (data: A) => data is B,
  fn: (data: B) => unknown
): (result: Result<A>) => MaybePromise<Result<A>>
function ifThen<A>(
  condition: (data: A) => boolean,
  fn: (data: A) => unknown
): (result: Result<A>) => MaybePromise<Result<A>>

function ifThen<A>(
  condition: (data: A) => boolean,
  fn: (data: A) => unknown,
  result?: Result<A>
): MaybePromise<Result<A>> | ((result: Result<A>) => MaybePromise<Result<A>>) {
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
