import type { IteratorReturnValue, UniversalIterable, UniversalIterableItem } from '@/types'
import { IterableAsyncFnException, IterableTypeException, isAsyncIterable, isIterable, isPromise } from '@/utils'

function sync<A, R>(fn: (args: A) => R, iterable: Iterable<A>): IterableIterator<R> {
  const iterator = iterable[Symbol.iterator]()

  return {
    next() {
      const { done, value } = iterator.next()
      if (done) {
        return { done, value }
      }

      const res = fn(value)
      if (isPromise(res)) {
        throw new IterableAsyncFnException()
      }

      return {
        done,
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
        done,
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
 * ```typescript
 * pipe(
 *  [1, 2, 3, 4],
 *  map(a => a + 10),
 *  toArray,
 * ); // [11, 12, 13, 14]
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/map.spec.ts | More examples}
 */
function map<A, R>(fn: (args: A) => R, iterable: Iterable<A>): IterableIterator<R>
function map<A, R>(fn: (args: A) => R, iterable: AsyncIterable<A>): AsyncIterableIterator<Awaited<R>>
function map<A extends UniversalIterable, R>(
  fn: (args: UniversalIterableItem<A>) => R
): (iterable: A) => IteratorReturnValue<A, R>

function map<A extends UniversalIterable, R>(
  fn: (args: UniversalIterableItem<A>) => R,
  iterable?: A
): ((iterable: A) => IteratorReturnValue<A, R>) | IteratorReturnValue<A, R> {
  if (iterable === undefined) {
    return (iterable) => map(fn, iterable as any) as IteratorReturnValue<A, R>
  }

  if (isIterable(iterable)) {
    return sync(fn, iterable as Iterable<any>) as IteratorReturnValue<A, R>
  }

  if (isAsyncIterable(iterable)) {
    return async(fn, iterable as AsyncIterable<any>) as IteratorReturnValue<A, R>
  }

  throw new IterableTypeException()
}

export { map }
