import { FixedPromise } from 'src/types/index.js'
import { isPromise } from '../utils.js'

/**
 * Delay the `value` by `wait` time.
 *
 * @example
 * ```ts
 * console.log(await delay(1000, 'hello')) // print hello after 1s
 * ```
 *
 * {@link #Repo/tests/functions/strict/delay.spec.ts | More examples}
 */
function delay(wait: number): Promise<void>

function delay<A>(wait: number, value: A): FixedPromise<A>

function delay<A>(wait: number, value?: A): Promise<A | undefined> {
  return new Promise((resolve, reject) => {
    if (isPromise(value)) {
      value.catch(reject)
    }
    setTimeout(() => {
      resolve(value)
    }, wait)
  })
}

export { delay }
