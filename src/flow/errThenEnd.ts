import { MaybePromise } from 'src/types/index.js'
import { FlowMissModifierException, isPromise } from 'src/utils.js'
import { Modifier } from './flow.js'
import { Result, err, ok } from './result.js'

/**
 * Call `fn` if `result` is failure, then exit flow.
 *
 * @example
 * ```typescript
 * const userInfo = (await flow(ok(filePath), andThen(readFileToStr), errThenEnd(notify), andThen(calcLineCount))).unwrapOr(0)
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/flow/errThenEnd.spec.ts | More examples}
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

  if (result.isError()) {
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
