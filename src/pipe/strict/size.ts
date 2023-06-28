import { IterableReturnValue, UniversalIterable } from 'src/types/index.js'
import { isAsyncIterable, isIterable } from 'src/utils.js'
import { each } from './each.js'

function sync<A extends Iterable<unknown>>(iterable: A) {
  let count = 0
  each(() => count++, iterable)
  return count
}

async function async<A extends AsyncIterable<unknown>>(asyncIterable: A) {
  let count = 0
  await each(() => count++, asyncIterable)
  return count
}

/**
 * Returns size of iterable/asyncIterable
 *
 * @example
 * ```ts
 * console.log(size([1, 2, 3])) // 3
 * ```
 *
 * {@link #Repo/tests/pipe/strict/size.spec.ts | More examples}
 */
function size<A extends UniversalIterable>(iterable: A): IterableReturnValue<A, number> {
  if (isIterable(iterable)) {
    return sync(iterable) as any
  }

  if (isAsyncIterable(iterable)) {
    return async(iterable) as any
  }

  throw new TypeError('"iterable" must be type of Iterable or AsyncIterable')
}

export { size }
