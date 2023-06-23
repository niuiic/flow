import { call, isAsyncIterable, isIterable } from '../../functions/utils.js'
import { FixedPromise, MaybePromise } from '../../types/basic.js'
import { AnyFunction } from '../../types/function.js'
import { IterableReturnValue, UniversalIterable, UniversalIterableItem } from '../../types/iterable.js'

type FnReturenValue<A extends UniversalIterable, R = A> = A extends AsyncIterable<unknown> ? MaybePromise<R> : R
type PrevRes<A extends UniversalIterable, R = UniversalIterableItem<A>> = A extends AsyncIterable<unknown>
  ? Awaited<R>
  : R

function sync<A, R>(fn: (prevRes: R, args: A) => R, initialRes: R, iterable: Iterable<A>): R {
  let res = initialRes
  for (const v of iterable) {
    res = fn(res, v)
  }
  return res
}

async function async<A, R>(
  fn: (prevRes: R, args: A) => R,
  initialRes: FixedPromise<R>,
  iterable: AsyncIterable<A>
): FixedPromise<R> {
  let res: MaybePromise<R> = initialRes
  for await (const v of iterable) {
    res = await call(res, (prevRes: R) => fn(prevRes, v))
  }
  return res as Awaited<R>
}

/**
 * 'reduce' boils down a list of values into a single value.
 *
 * @example
 * ```ts
 * console.log(reduce((a, b) => a + b, [1, 2, 3, 4])) // 10
 * ```
 *
 * {@link #Repo/tests/functions/strict/reduce.spec.ts | More examples}
 */
// no item
function reduce<A extends readonly []>(fn: AnyFunction, iterable: A): undefined
function reduce<A extends readonly [], R>(fn: AnyFunction, initialRes: R, iterable: A): R

// same type for args and return value
function reduce<A extends UniversalIterable>(
  fn: (prevRes: PrevRes<A>, args: UniversalIterableItem<A>) => FnReturenValue<A>,
  iterable: A
): IterableReturnValue<A>
function reduce<A extends UniversalIterable>(
  fn: (prevRes: PrevRes<A>, args: UniversalIterableItem<A>) => FnReturenValue<A>
): (iterable: A) => IterableReturnValue<A>

// different type for args and return value
function reduce<A extends UniversalIterable, R>(
  fn: (prevRes: PrevRes<A, R>, args: UniversalIterableItem<A>) => FnReturenValue<A, R>,
  iterable: A
): IterableReturnValue<A, R>
function reduce<A extends UniversalIterable, R>(
  fn: (prevRes: PrevRes<A, R>, args: UniversalIterableItem<A>) => FnReturenValue<A, R>
): (iterable: A) => IterableReturnValue<A, R>

// with initialRes
function reduce<A extends UniversalIterable, R>(
  fn: (prevRes: PrevRes<A, R>, args: UniversalIterableItem<A>) => FnReturenValue<A, R>,
  initialRes: R,
  iterable: A
): IterableReturnValue<A, R>
function reduce<A extends UniversalIterable, R>(
  fn: (prevRes: PrevRes<A, R>, args: UniversalIterableItem<A>) => FnReturenValue<A, R>,
  initialRes: R
): (iterable: A) => IterableReturnValue<A, R>

function reduce<A extends UniversalIterable, R>(
  fn: (prevRes: PrevRes<A, R>, args: UniversalIterableItem<A>) => R,
  initialResOrIterable?: MaybePromise<R> | A,
  iterable?: A
): MaybePromise<R | undefined> | ((iterable: A) => IterableReturnValue<A, R>) {
  type FixedFn = <T1, T2>(prevRes: T1, args: T2) => T1

  if (iterable === undefined) {
    if (initialResOrIterable === undefined) {
      return (iterable: A) => reduce(fn, iterable) as IterableReturnValue<A, R>
    }

    if (isIterable(initialResOrIterable)) {
      const iterator = initialResOrIterable[Symbol.iterator]()
      const { done, value } = iterator.next()
      if (done) {
        return undefined
      }
      return sync(fn as FixedFn, value as R, {
        [Symbol.iterator]() {
          return iterator
        }
      })
    }

    if (isAsyncIterable<A>(initialResOrIterable)) {
      const iterator = initialResOrIterable[Symbol.asyncIterator]()
      return iterator.next().then(({ done, value }) => {
        if (done) {
          return undefined
        }
        return async(fn as FixedFn, value as unknown as FixedPromise<R>, {
          [Symbol.asyncIterator]() {
            return iterator
          }
        })
      })
    }

    throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")
  }

  if (isIterable<A>(iterable)) {
    return sync(fn as FixedFn, initialResOrIterable as R, iterable)
  }

  if (isAsyncIterable<A>(iterable)) {
    return async(fn as FixedFn, Promise.resolve(initialResOrIterable) as FixedPromise<R>, iterable)
  }

  throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")
}

export { reduce }
