import { Result, ok } from './result.js'

/**
 * Throw error with `err` if `result` is failure
 */
function expect<T>(err: string, result: Result<T>): Result<T>
function expect<T>(err: string): (result: Result<T>) => Result<T>

function expect<T>(err: string, result?: Result<T>): Result<T> | ((result: Result<T>) => Result<T>) {
  if (result === undefined) {
    return (result) => expect(err, result)
  }

  if (result.isError()) {
    throw new Error(err)
  }

  return ok(result.unwrap())
}

export { expect }
