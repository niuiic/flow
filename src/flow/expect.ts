import { Result, ok } from './result.js'

/**
 * Throw error with `err` if `result` is failure
 *
 * @example
 * ```typescript
 * const userInfo = expect('error occurs', err('')) // throw an error
 * // with flow
 * const data = (await flow(ok(filePath), andThen(readFileToStr), expect('file should exists'))).unwrap()
 * ```
 *
 * {@link #Repo/tests/flow/expect.spec.ts | More examples}
 */
function expect<A>(err: string, result: Result<A>): Result<A>
function expect<A>(err: string): (result: Result<A>) => Result<A>

function expect<A>(err: string, result?: Result<A>): Result<A> | ((result: Result<A>) => Result<A>) {
  if (result === undefined) {
    return (result) => expect(err, result)
  }

  if (result.isError()) {
    throw new Error(err)
  }

  return ok(result.unwrap())
}

export { expect }
