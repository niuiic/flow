import type { ArrayReturnValue, UniversalIterable } from '@/types'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'

async function async<A>(iterable: AsyncIterable<A>): Promise<A[]> {
  const res: A[] = []
  for await (const item of iterable) {
    res.push(item)
  }
  return res
}

/**
 * Convert iterable/asyncIterable to an array.
 *
 * @example
 * ```typescript
 * pipe(
 *   [1, 2, 3, 4, 5],
 *   map((a) => a + 10),
 *   filter((a) => a % 2 === 0),
 *   toArray
 * ) // [12, 14]
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/toArray.spec.ts | More examples}
 */
function toArray<A extends UniversalIterable>(iterable: A): ArrayReturnValue<A>

function toArray<A>(iterable: UniversalIterable<A>) {
  if (isAsyncIterable(iterable)) {
    return async(iterable)
  } else if (isIterable(iterable)) {
    return Array.from(iterable)
  }

  throw new IterableTypeException()
}

export { toArray }
