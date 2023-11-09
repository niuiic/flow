import type { IteratorReturnValue, UniversalIterable, UniversalIterableItem } from '@/types'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'

function sync<A>(iterable: Iterable<A>): IterableIterator<[number, A]> {
  const iterator = iterable[Symbol.iterator]()
  let index = -1

  return {
    next() {
      const { done, value } = iterator.next()
      if (done) {
        return { done, value }
      }

      index = index + 1

      return {
        done,
        value: [index, value]
      }
    },
    [Symbol.iterator]() {
      return this
    }
  }
}

function async<A>(iterable: AsyncIterable<A>): AsyncIterableIterator<[number, Awaited<A>]> {
  const iterator = iterable[Symbol.asyncIterator]()
  let index = -1

  return {
    async next(concurrent) {
      const { done, value } = await iterator.next(concurrent)
      if (done) {
        return { done, value }
      }

      index = index + 1

      return {
        done,
        value: [index, value as Awaited<A>]
      }
    },
    [Symbol.asyncIterator]() {
      return this
    }
  }
}

/**
 * Returns Iterable/AsyncIterable of values with index.
 *
 * @example
 * ```typescript
 * pipe(
 *  [1, 2],
 *  enumerate,
 *  toArray,
 * ); // [[0, 1], [1, 2]]
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/enumerate.spec.ts | More examples}
 */
function enumerate<A>(iterable: Iterable<A>): IterableIterator<[number, A]>
function enumerate<A>(iterable: AsyncIterable<A>): AsyncIterableIterator<[number, A]>
function enumerate<A extends UniversalIterable>(): (
  iterable: A
) => IteratorReturnValue<A, [number, UniversalIterableItem<A>]>

function enumerate<A extends UniversalIterable>(
  iterable?: A
):
  | ((iterable: A) => IteratorReturnValue<A, UniversalIterableItem<A>>)
  | IteratorReturnValue<A, UniversalIterableItem<A>> {
  if (iterable === undefined) {
    return (iterable) => enumerate(iterable as any) as IteratorReturnValue<A, UniversalIterableItem<A>>
  }

  if (isIterable(iterable)) {
    return sync(iterable as Iterable<any>) as IteratorReturnValue<A, UniversalIterableItem<A>>
  }

  if (isAsyncIterable(iterable)) {
    return async(iterable as AsyncIterable<any>) as IteratorReturnValue<A, UniversalIterableItem<A>>
  }

  throw new IterableTypeException()
}

export { enumerate }
