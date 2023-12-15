import type { MaybePromise } from '@/types'
import { isPromise } from '@/utils'
import type { Result } from './result'
import { err, ok } from './result'

/**
 * Map error if `result` is failure.
 *
 * @example
 * ```typescript
 * const queryUserInfo = () => flow(ok(userId), andThen(queryUserInfo), mapErr((err) => 'failed to query user info'))
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/mapErr.spec.ts | More examples}
 */
type ReturnValue<A, R extends MaybePromise<string>> = R extends Promise<string> ? MaybePromise<Result<A>> : Result<A>

function mapErr<A, R extends MaybePromise<string>>(fn: (err: string) => R, result: Result<A>): ReturnValue<A, R>
function mapErr<A, R extends MaybePromise<string>>(fn: (err: string) => R): (result: Result<A>) => ReturnValue<A, R>

function mapErr<A, R extends MaybePromise<string>>(
  fn: (err: string) => R,
  result?: Result<A>
): ReturnValue<A, R> | ((result: Result<A>) => ReturnValue<A, R>) {
  if (result === undefined) {
    return (result) => mapErr(fn, result)
  }

  if (result.isErr()) {
    const res = fn(result.error()!)
    if (isPromise(res)) {
      return res.then((res) => err<A>(res)) as ReturnValue<A, R>
    }
    return err(res)
  }

  return ok(result.unwrap())
}

export { mapErr }
