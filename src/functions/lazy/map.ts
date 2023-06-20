import { IteratorReturnValue, UniversalIterable } from 'src/types/iterable.js'
import { isAsyncIterable, isIterable, isPromise } from '../utils.js'

function sync<A, R>(fn: (args: A) => R, iterable: Iterable<A>): IterableIterator<R> {
  const iterator = iterable[Symbol.iterator]()

  return {
    next() {
      const { done, value } = iterator.next()
      if (done) {
        return {
          done: true,
          value: undefined
        }
      }

      const res = fn(value)
      if (isPromise(res)) {
        throw new TypeError('Iterable cannot work with async function')
      }

      return {
        done: false,
        value: res
      }
    },
    [Symbol.iterator]() {
      return this
    }
  }
}

function async<A, R>(fn: (args: A) => R, iterable: AsyncIterable<A>): AsyncIterableIterator<Awaited<R>> {
  const iterator = iterable[Symbol.asyncIterator]()

  return {
    async next(concurrent) {
      const { done, value } = await iterator.next(concurrent)
      if (done) {
        return { done, value }
      }
      const res = fn(value)

      return {
        done: false,
        value: (isPromise(res) ? await res : res) as Awaited<R>
      }
    },
    [Symbol.asyncIterator]() {
      return this
    }
  }
}

/**
 * Returns Iterable/AsyncIterable of values mapped by `fn`.
 *
 * @example
 * ```ts
 * pipe(
 *  [1, 2, 3, 4],
 *  map(a => a + 10),
 *  toArray,
 * ); // [11, 12, 13, 14]
 * ```
 *
 * {@link #Repo/tests/functions/lazy/map.spec.ts | More examples}
 */
function map<A, R>(fn: (args: A) => R, iterable: Iterable<A>): IterableIterator<R>
function map<A, R>(fn: (args: A) => R, iterable: AsyncIterable<A>): AsyncIterableIterator<Awaited<R>>
function map<A, R>(fn: (args: A) => R): (iterable: UniversalIterable<A>) => IteratorReturnValue<UniversalIterable<R>>

function map<A, R>(
  fn: (args: A) => R,
  iterable?: UniversalIterable<A>
):
  | ((iterable: UniversalIterable<A>) => IteratorReturnValue<UniversalIterable<R>>)
  | IteratorReturnValue<UniversalIterable<R>> {
  if (iterable === undefined) {
    return (iterable: UniversalIterable<A>) => map(fn, iterable as any) as IteratorReturnValue<UniversalIterable<R>>
  }

  if (isIterable(iterable)) {
    return sync(fn, iterable)
  }

  if (isAsyncIterable(iterable)) {
    return async(fn, iterable)
  }

  throw new TypeError('"iterable" must be type of Iterable or AsyncIterable')
}

export { map }
