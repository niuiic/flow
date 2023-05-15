import { isAsyncIterable, isIterable, isPromise } from 'src/functions/utils.js'
import { Immutable } from 'src/types/immutable.js'
import { IterableItem, IterableReturnValue, UniversalIterable } from 'src/types/iterable.js'

function sync<A, R = unknown>(fn: (args: A) => R, iterable: Iterable<A>): void {
  for (const v of iterable) {
    fn(v)
  }
}

async function async<A, R = unknown>(fn: (args: A) => R, iterable: AsyncIterable<A>): Promise<void> {
  for await (const v of iterable) {
    const res = fn(v)
    if (isPromise(res)) {
      await res
    }
  }
}

/**
 * Iterates over Iterable/AsyncIterable, applying each in turn to 'fn'.
 *
 * @example
 * ```ts
 * each(console.log, [1, 2, 3]); // log 1, 2, 3
 * ```
 *
 * {@link #Repo/tests/functions/strict/each.spec.ts | More examples}
 */
function each<A, R = unknown>(fn: (args: Immutable<A>) => R, iterable: Iterable<A>): void
function each<A, R = unknown>(fn: (args: Immutable<A>) => R, iterable: AsyncIterable<A>): Promise<void>
function each<A extends UniversalIterable, R = unknown>(
  fn: (args: Immutable<IterableItem<A>>) => R
): (iterable: A) => IterableReturnValue<A, void>

function each<A extends Iterable<unknown> | AsyncIterable<unknown>, B>(
  fn: (args: Immutable<IterableItem<A>>) => B,
  iterable?: A
): void | Promise<void> | ((iterable: A) => IterableReturnValue<A, void>) {
  if (iterable === undefined) {
    return (iterable: A): IterableReturnValue<A, void> => each(fn, iterable as any) as IterableReturnValue<A, void>
  }

  if (isIterable<IterableItem<A>>(iterable)) {
    return sync(fn, iterable as any)
  }

  if (isAsyncIterable<IterableItem<A>>(iterable)) {
    return async(fn, iterable as any)
  }

  throw new TypeError('"iterable" must be type of Iterable or AsyncIterable')
}

export { each }
