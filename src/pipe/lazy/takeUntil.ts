import { IteratorReturnValue, MaybePromise, UniversalIterable, UniversalIterableItem } from 'src/types/index.js'
import { IterableAsyncFnException, IterableTypeException, isAsyncIterable, isIterable, isPromise } from 'src/utils.js'
import { concurrent as concurrentFn, isConcurrent } from './concurrent.js'

function* sync<A>(fn: (args: A) => unknown, iterable: Iterable<A>) {
  for (const item of iterable) {
    yield item

    const res = fn(item)
    if (isPromise(res)) {
      throw new IterableAsyncFnException()
    }
    if (res) {
      break
    }
  }
}

function asyncSequential<A>(
  fn: (args: A) => MaybePromise<unknown>,
  iterable: AsyncIterable<A>
): AsyncIterableIterator<A> {
  const iterator = iterable[Symbol.asyncIterator]()
  let end = false

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next(concurrent) {
      if (end) {
        return { done: true, value: undefined }
      }

      const { done, value } = await iterator.next(concurrent)
      if (done || end) {
        return { done: true, value: undefined }
      }

      const satisfyCondition = await fn(value)
      if (end) {
        return { done: true, value: undefined }
      }
      if (satisfyCondition) {
        end = true
      }

      return { done: false, value }
    }
  }
}

function async<A>(fn: (args: A) => MaybePromise<unknown>, iterable: AsyncIterable<A>): AsyncIterableIterator<A> {
  let iterator: AsyncIterableIterator<A>
  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next(concurrent: any) {
      if (iterator === undefined) {
        if (isConcurrent(concurrent)) {
          iterator = asyncSequential(fn, concurrentFn(concurrent.length, iterable))
        } else {
          iterator = asyncSequential(fn, iterable)
        }
      }
      return iterator.next(concurrent)
    }
  }
}

/**
 * Take values from iterable/AsyncIterable until `fn` returns true
 *
 * @example
 * ```ts
 * const iterator =  filter((v) => v > 2, [1, 3, 4])
 * iterator.next().value = 1
 * iterator.next().value = 3
 * iterator.next().done = true
 * ```
 *
 * {@link #Repo/tests/pipe/lazy/takeUntil.spec.ts | More examples}
 */
function takeUntil<A>(fn: (args: A) => unknown, iterable: Iterable<A>): IterableIterator<A>
function takeUntil<A>(fn: (args: A) => MaybePromise<unknown>, iterable: AsyncIterable<A>): AsyncIterableIterator<A>
function takeUntil<A extends UniversalIterable>(
  fn: (args: UniversalIterableItem<A>) => A extends AsyncIterable<unknown> ? MaybePromise<unknown> : unknown
): (iterable: A) => IteratorReturnValue<A>

function takeUntil<A extends UniversalIterable>(
  fn: (args: UniversalIterableItem<A>) => A extends AsyncIterable<unknown> ? MaybePromise<unknown> : unknown,
  iterable?: A
): ((iterable: A) => IteratorReturnValue<A>) | IteratorReturnValue<A> {
  if (iterable === undefined) {
    return (iterable) => takeUntil(fn, iterable as any) as any
  }

  if (isIterable(iterable)) {
    return sync(fn as any, iterable as any) as any
  }

  if (isAsyncIterable(iterable)) {
    return async(fn, iterable as any) as any
  }

  throw new IterableTypeException()
}

export { takeUntil }
