import { MaybePromise } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { Result, err, ok } from './result.js'

type IfThenReturnValue<A, R> = R extends Promise<unknown> ? MaybePromise<Result<A>> : Result<A>

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
 * {@link https://github.com/niuiic/flow/blob/main/tests/flow/ifThen.spec.ts | More examples}
 */
function ifThen<A, B extends A>(
  guard: (data: A) => data is B,
  fn: (data: B) => Promise<unknown>,
  result: Result<A>
): MaybePromise<Result<A>>
function ifThen<A, B extends A>(guard: (data: A) => data is B, fn: (data: B) => unknown, result: Result<A>): Result<A>
function ifThen<A>(
  guard: (data: A) => boolean,
  fn: (data: A) => Promise<unknown>,
  result: Result<A>
): MaybePromise<Result<A>>
function ifThen<A>(guard: (data: A) => boolean, fn: (data: A) => unknown, result: Result<A>): Result<A>
function ifThen<A, B extends A, R>(
  guard: (data: A) => data is B,
  fn: (data: B) => R
): (result: Result<A>) => IfThenReturnValue<A, R>
function ifThen<A, R>(guard: (data: A) => boolean, fn: (data: A) => R): (result: Result<A>) => IfThenReturnValue<A, R>

function ifThen<A>(
  guard: (data: A) => boolean,
  fn: (data: A) => unknown,
  result?: Result<A>
): MaybePromise<Result<A>> | ((result: Result<A>) => MaybePromise<Result<A>>) {
  if (result === undefined) {
    return (result) => ifThen(guard, fn, result)
  }

  if (result.isError()) {
    return err(result.error()!)
  }

  if (guard(result.unwrap())) {
    const res = fn(result.unwrap())
    if (isPromise(res)) {
      return res.then(() => ok(result.unwrap()))
    }
    return ok(result.unwrap())
  }

  return ok(result.unwrap())
}

export { ifThen }
