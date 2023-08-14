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
import { identity } from './identity.js'
import { pipe } from './pipe.js'
import { reduce } from './reduce.js'

/**
 * Returns true if any of the values in Iterable/AsyncIterable pass the `fn` truth test.
 *
 * @example
 * ```typescript
 * some((a) => a % 2 !== 0, [2, 4, 6, 8, 10])
 * // false
 *
 * some((a) => a % 2 === 0, [2, 5, 6, 7, 10])
 * // true
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/some.spec.ts | More examples}
 */
function some<A extends UniversalIterable>(
  fn: (args: UniversalIterableItem<A>) => A extends AsyncIterable<unknown> ? MaybePromise<unknown> : unknown
): (iterable: A) => IterableReturnValue<A, boolean>

function some<A extends readonly []>(fn: (args: IterableItem<A>) => boolean, iterable: A): false

function some<A>(fn: (args: A) => unknown, iterable: Iterable<A>): boolean
function some<A>(fn: (args: A) => MaybePromise<unknown>, iterable: AsyncIterable<A>): Promise<boolean>

function some<A extends UniversalIterable>(
  fn: (args: UniversalIterableItem<A>) => A extends AsyncIterable<unknown> ? MaybePromise<unknown> : unknown,
  iterable?: A
): ((iterable: A) => IterableReturnValue<A, boolean>) | IterableReturnValue<A, boolean> {
  if (iterable === undefined) {
    return (iterable) => some(fn, iterable as any) as any
  }

  if (isIterable(iterable) || isAsyncIterable(iterable)) {
    return pipe(
      iterable,
      map(fn),
      takeUntil(identity),
      reduce((a, b) => a || b),
      Boolean
    ) as any
  }

  throw new IterableTypeException()
}

export { some }