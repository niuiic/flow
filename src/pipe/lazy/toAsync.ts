import { isPromise } from 'src/utils.js'

/**
 * Returns AsyncIterable, it is used when you want to handle Promise values inside Iterable.
 *
 * @example
 * ```ts
 * let res = 0
 * for await (const v of toAsync([Promise.resolve(1), Promise.resolve(2), 3])) {
 *   res += v
 * }
 * console.log(res) // 6
 * ```
 *
 * {@link #Repo/tests/functions/lazy/toAsync.spec.ts | More examples}
 */
export function toAsync<T>(args: Iterable<T | Promise<T>>): AsyncIterableIterator<Awaited<T>> {
  const iterator = args[Symbol.iterator]()
  return {
    async next() {
      const { value, done } = iterator.next()
      if (isPromise(value)) {
        return value.then((value) => ({ done, value }))
      } else {
        return { done, value }
      }
    },
    [Symbol.asyncIterator]() {
      return this
    }
  }
}
