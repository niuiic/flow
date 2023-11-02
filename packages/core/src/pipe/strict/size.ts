import type { IterableReturnValue, UniversalIterable } from '@/types'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'
import { each } from './each'

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
 * ```typescript
 * console.log(size([1, 2, 3])) // 3
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/size.spec.ts | More examples}
 */
function size<A extends UniversalIterable>(iterable: A): IterableReturnValue<A, number> {
  if (isIterable(iterable)) {
    return sync(iterable) as any
  }

  if (isAsyncIterable(iterable)) {
    return async(iterable) as any
  }

  throw new IterableTypeException()
}

export { size }
