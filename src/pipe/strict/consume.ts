import { IterableReturnValue, UniversalIterable } from 'src/types/index.js'
import { IterableTypeException, isAsyncIterable, isIterable } from 'src/utils.js'
import { range } from '../lazy/range.js'

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
 * ```typescript
 * pipe(userList, toAsync, peek(queryUserInfo), consume(Infinity))
 * ```
 *
 * {@link #Repo/tests/pipe/strict/consume.spec.ts | More examples}
 */
function consume<A extends UniversalIterable>(iterable: A, length?: number): IterableReturnValue<A, void>

function consume<A extends UniversalIterable>(iterable: A, length = Infinity): IterableReturnValue<A, void> {
  if (isIterable(iterable)) {
    return sync(iterable, length) as IterableReturnValue<A, void>
  }

  if (isAsyncIterable(iterable)) {
    return async(iterable, length) as IterableReturnValue<A, void>
  }

  throw new IterableTypeException()
}

export { consume }
