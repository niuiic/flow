import { IterableReturnValue, UniversalIterable, UniversalIterableItem } from 'src/types/index.js'
import { IterableTypeException, isAsyncIterable, isIterable, isPromise } from 'src/utils.js'

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
 * Iterates over Iterable/AsyncIterable, applying each in turn to `fn`.
 *
 * @example
 * ```typescript
 * each(console.log, [1, 2, 3]); // log 1, 2, 3
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/each.spec.ts | More examples}
 */
function each<A, R = unknown>(fn: (args: A) => R, iterable: Iterable<A>): void

function each<A, R = unknown>(fn: (args: Awaited<A>) => R, iterable: AsyncIterable<A>): Promise<void>

function each<A, R = unknown>(
  fn: (args: Awaited<A>) => R
): (iterable: UniversalIterable<A>) => IterableReturnValue<UniversalIterable<A>, void>

function each<A extends UniversalIterable, R>(
  fn: (args: UniversalIterableItem<A>) => R,
  iterable?: A
): void | Promise<void> | ((iterable: A) => IterableReturnValue<A, void>) {
  type FixedFn = <T1, T2>(args: T1) => T2

  if (iterable === undefined) {
    return (iterable: A): IterableReturnValue<A, void> => each(fn, iterable as any) as IterableReturnValue<A, void>
  }

  if (isIterable<UniversalIterableItem<A>>(iterable)) {
    return sync(fn as FixedFn, iterable)
  }

  if (isAsyncIterable<UniversalIterableItem<A>>(iterable)) {
    return async(fn as FixedFn, iterable)
  }

  throw new IterableTypeException()
}

export { each }
