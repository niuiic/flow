import {
  IterableItem,
  IterableReturnValue,
  MaybePromise,
  UniversalIterable,
  UniversalIterableItem
} from 'src/types/index.js'
import { IterableTypeException, isAsyncIterable, isIterable } from 'src/utils.js'
import { map } from '../lazy/map.js'
import { takeUntil } from '../lazy/takeUntil.js'
import { not } from './not.js'
import { pipe } from './pipe.js'
import { reduce } from './reduce.js'

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
 * {@link #Repo/tests/pipe/strict/every.spec.ts | More examples}
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
