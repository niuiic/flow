import { FixedPromise } from 'src/types/basic.js'
import { isPromise } from 'util/types'

/**
 * Delay the `value` by `wait` time.
 *
 * `value` should not be a promise.
 *
 * @example
 * ```ts
 * console.log(await delay(1000, 'hello')) // print hello after 1s
 * ```
 *
 * {@link #Repo/tests/functions/strict/delay.spec.ts | More examples}
 */
function delay(wait: number): Promise<void>

function delay<A>(wait: number, value: A): A extends Promise<unknown> ? never : FixedPromise<A>

function delay<A>(wait: number, value?: A): Promise<A | undefined> {
  return new Promise((resolve, reject) => {
    if (isPromise(value)) {
      value.catch(reject)

      setTimeout(() => {
        resolve(value)
      }, wait)
    }
  })
}

export { delay }
