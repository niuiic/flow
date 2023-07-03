import { MaybePromise } from 'src/types/index.js'
import { isPromise } from 'src/utils.js'
import { FlowExitException } from './flow.js'
import { Result, ok } from './result.js'

/**
 * Call `fn` if `result` is failure, then exit flow.
 *
 * @example
 * ```typescript
 * const userInfo = (await flow(ok(filePath), andThen(readFileToStr), errThenEnd(notify), andThen(calcLineCount))).unwrapOr(0)
 * ```
 *
 * {@link #Repo/tests/flow/errThenEnd.spec.ts | More examples}
 */
function errThenEnd<A>(fn: (err: string) => Promise<unknown>, result: Result<A>): MaybePromise<Result<A>>
function errThenEnd<A>(fn: (err: string) => Promise<unknown>): (result: Result<A>) => MaybePromise<Result<A>>
function errThenEnd<A>(fn: (err: string) => unknown, result: Result<A>): Result<A>
function errThenEnd<A>(fn: (err: string) => unknown): (result: Result<A>) => Result<A>

function errThenEnd<A>(
  fn: (err: string) => MaybePromise<unknown>,
  result?: Result<A>
): MaybePromise<Result<A>> | ((result: Result<A>) => MaybePromise<Result<A>>) {
  if (result === undefined) {
    return (result) => errThenEnd(fn, result)
  }

  if (result.isError()) {
    const res = fn(result.error()!)
    if (isPromise(res)) {
      res.then(() => {})
    }
    throw new FlowExitException()
  }

  return ok(result.unwrap())
}

export { errThenEnd }
