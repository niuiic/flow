import { isAsyncIterable, isIterable } from 'src/functions/utils.js'
import { IterableItem, IteratorReturnValue, UniversalIterable } from 'src/types/iterable.js'

function* sync<A>(length: number, iterable: Iterable<A>): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]()
  while (length > 0) {
    length = length - 1
    const cur = iterator.next()
    if (cur.done === true) {
      break
    }
    yield cur.value
  }
}

function async<A>(length: number, iterable: AsyncIterable<A>): AsyncIterableIterator<A> {
  const iterator = iterable[Symbol.asyncIterator]()
  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next(concurrent) {
      if (length-- < 1) {
        return { done: true, value: undefined }
      }
      return iterator.next(concurrent)
    }
  }
}

/**
 * Returns IterableIterator/AsyncIterableIterator that take `length` values from iterable
 *
 * @example
 * ```ts
 * for (const v of take(2, [1, 2, 3, 4])) {
 *   console.log(v)
 * }
 * // 1, 2
 * ```
 *
 * {@link #Repo/tests/functions/lazy/take.spec.ts | More examples}
 */
function take<A>(length: number, iterable: Iterable<A>): IterableIterator<A>

function take<A>(length: number, iterable: AsyncIterable<A>): AsyncIterableIterator<Awaited<A>>

function take<A extends UniversalIterable>(length: number): (iterable: A) => IteratorReturnValue<A>

function take<A extends UniversalIterable>(
  length: number,
  iterable?: A
):
  | IterableIterator<IterableItem<A>>
  | AsyncIterableIterator<IterableItem<A>>
  | ((iterable: A) => IteratorReturnValue<A>) {
  if (length <= 0) {
    throw new Error('"length" must be greater than 0')
  }

  if (iterable === undefined) {
    return (iterable: A) => take(length, iterable as any) as IteratorReturnValue<A>
  }

  if (isIterable<IterableItem<A>>(iterable)) {
    return sync(length, iterable)
  }

  if (isAsyncIterable<IterableItem<A>>(iterable)) {
    return async(length, iterable)
  }

  throw new TypeError('"iterable" must be type of Iterable or AsyncIterable')
}

export { take }
