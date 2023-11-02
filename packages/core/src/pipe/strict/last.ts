import type { FixedPromise, UniversalIterable } from '@/types'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'
import { isArray } from './isArray'
import { isString } from './isString'
import { reduce } from './reduce'

type LastReturnValue<T> = T extends readonly [...rest: any, last: infer Last]
  ? Last
  : T extends readonly never[]
  ? undefined
  : T extends AsyncIterable<infer U>
  ? FixedPromise<U | undefined>
  : T extends Iterable<infer U>
  ? U | undefined
  : never

/**
 * Return the last element of iterable/asyncIterable
 *
 * @example
 * ```typescript
 * last([1, 2, 3, 4, 5]); // 5
 *
 * // with pipe
 * pipe(
 *  [1, 2, 3, 4, 5],
 *  last,
 * ); // 5
 *
 * await pipe(
 *  Promise.resolve([1, 2, 3, 4, 5]),
 *  last,
 * ); // 5
 *
 * // with toAsync
 * await pipe(
 *  [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
 *  toAsync,
 *  last,
 * ); // 3
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/last.spec.ts | More examples}
 */
function last<A extends UniversalIterable>(iterable: A): LastReturnValue<A>

function last<A>(iterable: UniversalIterable<A> | A[]) {
  if (isArray(iterable) || isString(iterable)) {
    return iterable[iterable.length - 1]
  }
  if (isIterable(iterable) || isAsyncIterable(iterable)) {
    return reduce((_, args) => args, iterable)
  }

  throw new IterableTypeException()
}

export { last }
