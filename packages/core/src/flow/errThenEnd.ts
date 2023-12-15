import type { MaybePromise, Modifier } from '@/types'
import { FlowMissModifierException, isPromise } from '@/utils'
import type { Result } from './result'
import { err, ok } from './result'

/**
 * Call `fn` if `result` is failure, then exit flow.
 *
 * @example
 * ```typescript
 * const userInfo = (await flow(ok(filePath), andThen(readFileToStr), errThenEnd(notify), andThen(calcLineCount))).unwrapOr(0)
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/errThenEnd.spec.ts | More examples}
 */
function errThenEnd<A>(
  fn: (err: string) => Promise<unknown>,
  result: Result<A>,
  modifier: Modifier
): MaybePromise<Result<A>>
function errThenEnd<A>(
  fn: (err: string) => Promise<unknown>
): (result: Result<A>, modifier: Modifier) => MaybePromise<Result<A>>
function errThenEnd<A>(fn: (err: string) => unknown, result: Result<A>, modifier: Modifier): Result<A>
function errThenEnd<A>(fn: (err: string) => unknown): (result: Result<A>, modifier: Modifier) => Result<A>

function errThenEnd<A>(
  fn: (err: string) => MaybePromise<unknown>,
  result?: Result<A>,
  modifier?: Modifier
): MaybePromise<Result<A>> | ((result: Result<A>, modifier: Modifier) => MaybePromise<Result<A>>) {
  if (result === undefined) {
    return (result: Result<A>, modifier: Modifier) => errThenEnd(fn, result, modifier)
  }

  if (modifier === undefined) {
    throw new FlowMissModifierException()
  }

  if (result.isErr()) {
    modifier({ done: true })
    const res = fn(result.error()!)
    if (isPromise(res)) {
      return res.then(() => err(result.error()!))
    }
    return err(result.error()!)
  }

  return ok(result.unwrap())
}

export { errThenEnd }
