import { FixedPromise, IteratorReturnValue, UniversalIterable } from 'src/types/index.js'
import { IterableTypeException, isAsyncIterable, isIterable, isPromise } from 'src/utils.js'
import { concurrent as concurrentFn, isConcurrent } from './concurrent.js'

function* sync<A>(args: A, iterable: Iterable<A>) {
  yield* iterable
  yield args
}

function asyncSequential<A>(args: FixedPromise<A>, iterable: AsyncIterable<A>): AsyncIterableIterator<A> {
  const iterator = iterable[Symbol.asyncIterator]()
  let finished = false
  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next() {
      if (finished) {
        return { done: true, value: undefined }
      }
      const { value, done } = await iterator.next()
      if (finished) {
        return { done: true, value: undefined }
      }
      if (done) {
        finished = true
        return { done: false, value: await args }
      } else {
        return { done, value }
      }
    }
  }
}

function async<A>(args: FixedPromise<A>, iterable: AsyncIterable<A>): AsyncIterableIterator<A> {
  let iterator: AsyncIterator<A>

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next(concurrent: any) {
      if (iterator === undefined) {
        iterator = isConcurrent(concurrent)
          ? asyncSequential(args, concurrentFn(concurrent.length, iterable))
          : asyncSequential(args, iterable)
      }
      return iterator.next(concurrent)
    }
  }
}

/**
 * Return Iterable/AsyncIterable containing the contents of the given iterable, followed by the given element.
 *
 * @example
 * ```typescript
 * const iter = append(4, [1,2,3]);
 * iter.next() // {done: false, value: 1}
 * iter.next() // {done: false, value: 2}
 * iter.next() // {done: false, value: 3}
 * iter.next() // {done: false, value: 4}
 * iter.next() // {done: true, value: undefined}
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/append.spec.ts | More examples}
 */
function append<A, B extends UniversalIterable<Awaited<A>>>(
  args: A
): (iterable: B) => IteratorReturnValue<B, Awaited<A>>
function append<A>(args: A, iterable: Iterable<A>): IterableIterator<A>
function append<A>(args: A, iterable: AsyncIterable<A>): AsyncIterableIterator<A>

function append<A, B extends UniversalIterable<A>>(
  args: A,
  iterable?: B
): ((iterable: B) => IteratorReturnValue<B, A>) | IteratorReturnValue<B, A> {
  if (iterable === undefined) {
    return (iterable) => append(args, iterable as any) as IteratorReturnValue<B, A>
  }

  if (isAsyncIterable(iterable)) {
    return async(isPromise(args) ? args : Promise.resolve(args), iterable) as IteratorReturnValue<B, A>
  }

  if (isIterable(iterable)) {
    return sync(args, iterable) as IteratorReturnValue<B, A>
  }

  throw new IterableTypeException()
}

export { append }
