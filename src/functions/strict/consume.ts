import { IterableReturnValue, UniversalIterable } from 'src/types/iterable.js'
import { range } from '../lazy/range.js'
import { isAsyncIterable, isIterable } from '../utils.js'

function sync<T>(iterable: Iterable<T>, length: number) {
  const iterator = iterable[Symbol.iterator]()

  for (const _ of range(length)) {
    if (iterator.next().done) {
      return
    }
  }
}

async function async<T>(iterable: AsyncIterable<T>, length: number) {
  const iterator = iterable[Symbol.asyncIterator]()
  for await (const _ of range(length)) {
    if ((await iterator.next()).done) {
      return
    }
  }
}

/**
 * Consumes the given `length` of Iterable/AsyncIterable.
 *
 * @example
 * ```ts
 * pipe(userList, toAsync, peek(queryUserInfo), consume(Infinity))
 * ```
 *
 * {@link #Repo/tests/functions/strict/consume.spec.ts | More examples}
 */
function consume<A extends UniversalIterable>(length: number, iterable: A): IterableReturnValue<A, void>
function consume<A extends UniversalIterable>(length: number): (iterable: A) => IterableReturnValue<A, void>

function consume<A extends UniversalIterable>(
  length: number,
  iterable?: A
): IterableReturnValue<A, void> | ((iterable: A) => IterableReturnValue<A, void>) {
  if (iterable === undefined) {
    return (iterable: A) => consume(length, iterable)
  }

  if (isIterable(iterable)) {
    return sync(iterable, length) as IterableReturnValue<A, void>
  }

  if (isAsyncIterable(iterable)) {
    return async(iterable, length) as IterableReturnValue<A, void>
  }

  throw new TypeError('"iterable" must be type of Iterable or AsyncIterable')
}

export { consume }
