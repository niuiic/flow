import { MaybePromise } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { Result } from './result.js'

/**
 * Inject a function to the progress without side effect.
 *
 * @example
 * ```typescript
 * // with flow
 * const userInfo = (await flow(ok(userId), inject(doSometingElse), andThen(queryUserInfo), errThen(notify))).unwrapOr(defaultUserInfo)
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/flow/inject.spec.ts | More examples}
 */
function inject<A>(fn: () => Promise<unknown>, result: Result<A>): Promise<Result<A>>
function inject<A>(fn: () => Promise<unknown>): (result: Result<A>) => Promise<Result<A>>
function inject<A>(fn: () => unknown, result: Result<A>): Result<A>
function inject<A>(fn: () => unknown): (result: Result<A>) => Result<A>

function inject<A>(
  fn: () => unknown,
  result?: Result<A>
): MaybePromise<Result<A>> | ((result: Result<A>) => MaybePromise<Result<A>>) {
  if (result === undefined) {
    return (result) => inject(fn, result)
  }

  let res
  if (isPromise(result)) {
    res = result.then(() => fn())
  } else {
    res = fn()
  }

  if (isPromise(res)) {
    return res.then(() => result)
  }
  return result
}

export { inject }
