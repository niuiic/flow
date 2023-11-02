import type { IterableReturnValue, UniversalIterable } from '@/types'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'
import { range } from '../lazy/range'

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
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/consume.spec.ts | More examples}
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
