import type { MaybePromise } from '@/types'
import { isPromise } from '@/utils'
import type { Result } from './result'
import { err, ok } from './result'

type ReturnValue<T> = T extends Promise<infer R> ? MaybePromise<Result<R>> : Result<T>

/**
 * Convert data of `result`.
 *
 * @example
 * ```typescript
 * const injectUserId = () => 1
 * const userInfo = (await andThen(queryUserInfo, into(injectUserId, ok()))).unwrap()
 * // with flow
 * const userInfo = (await flow(ok(), into(injectUserId), andThen(queryUserInfo), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/into.spec.ts | More examples}
 */
function into<A, R>(fn: (data: A) => R, result: Result<A>): ReturnValue<R>
function into<A, R>(fn: (data: A) => R): (result: Result<A>) => ReturnValue<R>

function into<A, R>(fn: (data: A) => R, result?: Result<A>): ReturnValue<R> | ((result: Result<A>) => ReturnValue<R>) {
  if (result === undefined) {
    return (result) => into(fn, result)
  }

  if (result.isOk()) {
    const res = fn(result.unwrap())
    if (isPromise(res)) {
      return res.then((data) => ok(data)) as ReturnValue<R>
    } else {
      return ok(res) as ReturnValue<R>
    }
  }

  return err(result.error()!) as ReturnValue<R>
}

export { into }
