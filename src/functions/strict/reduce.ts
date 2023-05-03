import { call, isAsyncIterable, isIterable } from 'src/functions/utils.js'
import { Immutable } from 'src/types/immutable.js'
import { IterableReturnValue, UniversalIterable } from 'src/types/iterable.js'

function sync<A, R>(fn: (prevRes: R, args: A) => R, initialRes: R, iterable: Iterable<A>): R {
  let res = initialRes
  for (const v of iterable) {
    res = fn(res, v)
  }
  return res
}

async function async<A, R>(
  fn: (prevRes: R, args: A) => R,
  initialRes: Promise<R>,
  iterable: AsyncIterable<A>
): Promise<R> {
  let res = initialRes
  for await (const v of iterable) {
    res = await call(res, (res) => fn(res as R, v))
  }
  return res
}

/**
 * "reduce" boils down a list of values into a single value.
 *
 * @example
 * ```ts
 * console.log(reduce((a, b) => a + b, [1, 2, 3, 4])) // 10
 * ```
 *
 * {@link #Repo/tests/functions/strict/reduce.spec.ts | More examples}
 */

// same type for args and return value
function reduce<A>(fn: (prevRes: Immutable<A>, args: Immutable<A>) => A, iterable: Iterable<A>): A
function reduce<A>(
  fn: (prevRes: Immutable<A>, args: Immutable<A>) => A | Promise<A>,
  iterable: AsyncIterable<A>
): Promise<A>
function reduce<A>(
  fn: (prevRes: Immutable<A>, args: Immutable<A>) => A | Promise<A>
): (iterable: UniversalIterable<A>) => IterableReturnValue<UniversalIterable<A>>

// different type for args and return value
function reduce<A, R>(fn: (prevRes: Immutable<R>, args: Immutable<A>) => R, iterable: Iterable<A>): R
function reduce<A, R>(
  fn: (prevRes: Immutable<R>, args: Immutable<A>) => R | Promise<R>,
  iterable: AsyncIterable<A>
): Promise<R>
function reduce<A, R>(
  fn: (prevRes: Immutable<R>, args: Immutable<A>) => R | Promise<R>
): (iterable: AsyncIterable<A>) => IterableReturnValue<UniversalIterable<A>, R>

// with initialRes
function reduce<A, R>(fn: (prevRes: Immutable<R>, args: Immutable<A>) => R, initialRes: R, iterable: Iterable<A>): R
function reduce<A, R>(
  fn: (prevRes: Immutable<R>, args: Immutable<A>) => R | Promise<R>,
  initialRes: R | Promise<R>,
  iterable: AsyncIterable<A>
): Promise<R>
function reduce<A, R>(
  fn: (prevRes: Immutable<R>, args: Immutable<A>) => R,
  initialResOrIterable?: R | UniversalIterable<A>,
  iterable?: UniversalIterable<A>
):
  | R
  | undefined
  | Promise<R | undefined>
  | ((iterable: UniversalIterable<A>) => IterableReturnValue<UniversalIterable<A>, R>) {
  type FixedFn = (prevRes: R, args: A) => R

  if (iterable === undefined) {
    if (initialResOrIterable === undefined) {
      return (iterable: UniversalIterable<A>) =>
        reduce(fn, iterable as any) as IterableReturnValue<UniversalIterable<A>, R>
    }

    if (isIterable(initialResOrIterable)) {
      const iterator = initialResOrIterable[Symbol.iterator]()
      const { done, value } = iterator.next()
      if (done) {
        return undefined
      }
      return sync(
        fn as FixedFn,
        value as unknown as R,
        {
          [Symbol.iterator]() {
            return iterator
          }
        } as Iterable<A>
      )
    }

    if (isAsyncIterable<A>(initialResOrIterable)) {
      const iterator = initialResOrIterable[Symbol.asyncIterator]()
      return iterator.next().then(({ done, value }) => {
        if (done) {
          return undefined
        }
        return async(
          fn as FixedFn,
          value as unknown as Promise<R>,
          {
            [Symbol.asyncIterator]() {
              return iterator
            }
          } as AsyncIterable<A>
        )
      })
    }

    throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")
  }

  if (isIterable<A>(iterable)) {
    return sync(fn as FixedFn, initialResOrIterable as R, iterable)
  }

  if (isAsyncIterable<A>(iterable)) {
    return async(fn as FixedFn, Promise.resolve(initialResOrIterable as Promise<R>), iterable)
  }

  throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")
}

export { reduce }
