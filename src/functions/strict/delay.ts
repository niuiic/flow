import { isPromise } from 'util/types'

/**
 * Delay the `value` by `wait` time.
 *
 * @example
 * ```ts
 * console.log(await delay(1000, 'hello')) // 1000
 * ```
 *
 * {@link #Repo/tests/functions/strict/delay.spec.ts | More examples}
 */
function delay(wait: number): Promise<void>

function delay<A>(wait: number, value: A): Promise<A>

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
