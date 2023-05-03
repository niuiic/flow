import { isAsyncIterable, isIterable } from 'src/functions/utils.js'
import { IterableReturnValue } from 'src/types/iterable.js'

function sync(iterable: Iterable<number>) {
  let max = NaN
  for (const v of iterable) {
    if (Number.isNaN(v)) {
      return v
    }
    if (v > max || Number.isNaN(max)) {
      max = v
    }
  }

  return max
}

async function async(iterable: AsyncIterable<number>) {
  let max = NaN
  for await (const v of iterable) {
    if (Number.isNaN(v)) {
      return v
    }
    if (v > max || Number.isNaN(max)) {
      max = v
    }
  }

  return max
}

/**
 * return the largest item of the iterable/asyncIterable
 *
 * @example
 * ```ts
 * console.log(max([1, 2, 3])) // 3
 * ```
 *
 * {@link #Repo/tests/functions/strict/max.spec.ts | More examples}
 */
function max<A extends Iterable<number> | AsyncIterable<number>>(iterator: A): IterableReturnValue<A>

function max(iterable: Iterable<number> | AsyncIterable<number>) {
  if (isIterable(iterable)) {
    return sync(iterable)
  }
  if (isAsyncIterable(iterable)) {
    return async(iterable)
  }

  throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")
}

export { max }
