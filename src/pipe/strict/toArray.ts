import { ArrayReturnType, UniversalIterable } from 'src/types/index.js'
import { isAsyncIterable, isIterable } from 'src/utils.js'

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
 * ```ts
 * pipe(
 *   [1, 2, 3, 4, 5],
 *   map((a) => a + 10),
 *   filter((a) => a % 2 === 0),
 *   toArray
 * ) // [12, 14]
 * ```
 *
 * {@link #Repo/tests/functions/strict/toArray.spec.ts | More examples}
 */
function toArray<A extends UniversalIterable>(iterable: A): ArrayReturnType<A>

function toArray<A>(iterable: UniversalIterable<A>) {
  if (isAsyncIterable(iterable)) {
    return async(iterable)
  } else if (isIterable(iterable)) {
    return Array.from(iterable)
  }

  throw new TypeError('"iterable" must be type of Iterable or AsyncIterable')
}

export { toArray }
