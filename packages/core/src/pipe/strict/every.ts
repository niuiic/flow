import type { IterableItem, IterableReturnValue, MaybePromise, UniversalIterable, UniversalIterableItem } from '@/types'
import { IterableTypeException, isAsyncIterable, isIterable } from '@/utils'
import { map } from '../lazy/map'
import { takeUntil } from '../lazy/takeUntil'
import { not } from './not'
import { pipe } from './pipe'
import { reduce } from './reduce'

/**
 * Returns true if all values in Iterable/AsyncIterable pass the `fn` truth test.
 *
 * @example
 * ```typescript
 * every((a) => a % 2 === 0, [2, 4, 6, 8, 10])
 * // true
 *
 * every((a) => a % 2 === 0, [2, 5, 6, 7, 10])
 * // false
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/every.spec.ts | More examples}
 */
function every<A extends readonly []>(fn: (args: IterableItem<A>) => unknown, iterable: A): true

function every<A>(fn: (args: A) => unknown, iterable: Iterable<A>): boolean
function every<A>(fn: (args: A) => MaybePromise<unknown>, iterable: AsyncIterable<A>): Promise<boolean>

function every<A extends UniversalIterable>(
  fn: (args: UniversalIterableItem<A>) => A extends AsyncIterable<unknown> ? MaybePromise<unknown> : unknown
): (iterable: A) => IterableReturnValue<A, boolean>

function every<A extends UniversalIterable>(
  fn: (args: UniversalIterableItem<A>) => A extends AsyncIterable<unknown> ? MaybePromise<unknown> : unknown,
  iterable?: A
): ((iterable: A) => IterableReturnValue<A, boolean>) | IterableReturnValue<A, boolean> {
  if (iterable === undefined) {
    return (iterable) => every(fn, iterable as any) as any
  }

  if (isIterable(iterable) || isAsyncIterable(iterable)) {
    return pipe(
      iterable,
      map(fn),
      takeUntil(not),
      reduce((a, b) => a && b),
      (args) => args ?? true,
      Boolean
    ) as any
  }

  throw new IterableTypeException()
}

export { every }
