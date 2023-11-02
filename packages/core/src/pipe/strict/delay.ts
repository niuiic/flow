import type { FixedPromise } from '@/types'
import { isPromise } from '@/utils'

/**
 * Delay the `value` by `wait` time.
 *
 * @example
 * ```typescript
 * console.log(await delay(1000, 'hello')) // print hello after 1s
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/delay.spec.ts | More examples}
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
