import type { MaybePromise } from '@/types'
import { isPromise } from '@/utils'
import type { Result } from './result'
import { err, ok } from './result'

/**
 * Inject a function to the progress without side effect.
 *
 * @example
 * ```typescript
 * // with flow
 * const userInfo = (await flow(ok(userId), inject(doSometingElse), andThen(queryUserInfo), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/inject.spec.ts | More examples}
 */
function inject<A>(
  fn: (args: { ok: true; data: A } | { ok: false; err: string }) => Promise<unknown>,
  result: Result<A>
): Promise<Result<A>>
function inject<A>(
  fn: (args: { ok: true; data: A } | { ok: false; err: string }) => Promise<unknown>
): (result: Result<A>) => Promise<Result<A>>
function inject<A>(
  fn: (args: { ok: true; data: A } | { ok: false; err: string }) => unknown,
  result: Result<A>
): Result<A>
function inject<A>(
  fn: (args: { ok: true; data: A } | { ok: false; err: string }) => unknown
): (result: Result<A>) => Result<A>

function inject<A>(
  fn: (args: { ok: true; data: A } | { ok: false; err: string }) => unknown,
  result?: Result<A>
): MaybePromise<Result<A>> | ((result: Result<A>) => MaybePromise<Result<A>>) {
  if (result === undefined) {
    return (result) => inject(fn, result)
  }

  let res
  try {
    if (result.isOk()) {
      res = fn({
        ok: true,
        data: result.unwrap()
      })
    } else {
      res = fn({
        ok: false,
        err: result.error()!
      })
    }
  } catch {
    return result.isOk() ? ok(result.unwrap()) : err(result.error()!)
  }

  if (isPromise(res)) {
    return res
      .then(() => (result.isOk() ? ok(result.unwrap()) : err(result.error()!)))
      .catch(() => (result.isOk() ? ok(result.unwrap()) : err(result.error()!))) as MaybePromise<Result<A>>
  }

  return result.isOk() ? ok(result.unwrap()) : err(result.error()!)
}

export { inject }
