import {
  IteratorResolve,
  IteratorReturnValue,
  MaybePromise,
  Reject,
  UniversalIterable,
  UniversalIterableItem
} from 'src/types/index.js'
import {
  IterableAsyncFnException,
  IterableTypeException,
  call,
  isAsyncIterable,
  isIterable,
  isPromise
} from 'src/utils.js'
import { Concurrent, concurrent as concurrentFn, isConcurrent } from './concurrent.js'

async function* asyncSequential<A>(
  fn: (args: A) => MaybePromise<unknown>,
  iterable: AsyncIterable<A>
): AsyncIterableIterator<A> {
  for await (const v of iterable) {
    if (await fn(v)) {
      yield v
    }
  }
}

function asyncConcurrent<A>(iterable: AsyncIterable<[unknown, A]>): AsyncIterableIterator<A> {
  const iterator = iterable[Symbol.asyncIterator]()
  const taskResults: A[] = []
  let prevItem = Promise.resolve()
  let nextCallCount = 0
  let resolvedItemCount = 0
  let iterFinished = false
  const settlementQueue: [IteratorResolve<A>, Reject][] = []

  const resolveTaskResults = () => {
    while (taskResults.length > 0 && nextCallCount > resolvedItemCount) {
      const taskResult = taskResults.shift()!
      const [resolve] = settlementQueue.shift()!
      resolve({ done: false, value: taskResult })
      resolvedItemCount++
    }
  }

  const performTasks = (concurrent: Concurrent) => {
    const nextItem = iterator.next(concurrent as any)
    prevItem = prevItem
      .then(() => nextItem)
      .then(({ done, value }) => {
        if (done) {
          while (settlementQueue.length > 0) {
            const [resolve] = settlementQueue.shift()!
            resolve({ done: true, value: undefined })
          }
          iterFinished = true
          return
        }
        const [satisfyCondition, itemValue] = value
        if (satisfyCondition) {
          taskResults.push(itemValue)
        }
        recur(concurrent)
      })
      .catch((reason: unknown) => {
        iterFinished = true
        while (settlementQueue.length > 0) {
          const [, reject] = settlementQueue.shift()!
          reject(reason)
        }
      })
  }

  const recur = (concurrent: Concurrent) => {
    if (iterFinished || nextCallCount === resolvedItemCount) {
      return
    }
    if (taskResults.length > 0) {
      resolveTaskResults()
    } else {
      performTasks(concurrent)
    }
  }

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    next(concurrent) {
      nextCallCount++
      if (iterFinished) {
        return { done: true, value: undefined }
      }
      return new Promise((resolve, reject) => {
        settlementQueue.push([resolve, reject])
        recur(concurrent as any)
      })
    }
  } as AsyncIterableIterator<A>
}

function toFilterIterator<A>(
  fn: (args: A) => unknown,
  iterable: AsyncIterable<A>
): AsyncIterableIterator<[unknown, A]> {
  const iterator = iterable[Symbol.asyncIterator]()
  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next(concurrent) {
      const { done, value } = await iterator.next(concurrent)

      if (done) {
        return {
          done: true,
          value: undefined
        } as IteratorReturnResult<undefined>
      }

      return call(
        fn(value),
        (args) =>
          ({
            done,
            value: [Boolean(args), value]
          } as IteratorYieldResult<[unknown, A]>)
      )
    }
  }
}

function async<A>(fn: (args: A) => MaybePromise<unknown>, iterable: AsyncIterable<A>): AsyncIterableIterator<A> {
  let iterator: AsyncIterator<A>

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next(concurrent: any) {
      if (iterator === undefined) {
        if (isConcurrent(concurrent)) {
          iterator = asyncConcurrent(concurrentFn(concurrent.length, toFilterIterator(fn, iterable)))
        } else {
          iterator = asyncSequential(fn, iterable)
        }
      }
      return iterator.next(concurrent)
    }
  }
}

function* sync<A>(fn: (data: A) => unknown, iterable: Iterable<A>) {
  for (const v of iterable) {
    const res = fn(v)

    if (isPromise(res)) {
      throw new IterableAsyncFnException()
    }

    if (res) {
      yield v
    }
  }
}

/**
 * Filter `iterable` with `fn`.
 *
 * @example
 * ```typescript
 * const iterator =  filter((v) => v > 2, [1, 3, 4])
 * iterator.next().value = 3
 * iterator.next().value = 4
 * iterator.next().done = true
 * ```
 *
 * {@link #Repo/tests/pipe/lazy/filter.spec.ts | More examples}
 */
function filter<A, B extends A>(fn: (args: A) => args is B, iterable: Iterable<A>): IterableIterator<B>
function filter<A>(fn: (args: A) => unknown, iterable: Iterable<A>): IterableIterator<A>

function filter<A, B extends A>(fn: (args: A) => args is B, iterable: AsyncIterable<A>): AsyncIterableIterator<B>
function filter<A>(fn: (args: A) => MaybePromise<unknown>, iterable: AsyncIterable<A>): AsyncIterableIterator<A>

function filter<A extends UniversalIterable, B extends UniversalIterableItem<A>>(
  fn: (args: UniversalIterableItem<A>) => args is B
): (iterable: A) => IteratorReturnValue<A, B>
function filter<A, B extends UniversalIterable<A>>(
  fn: (args: A) => B extends AsyncIterable<A> ? MaybePromise<unknown> : unknown
): (iterable: B) => IteratorReturnValue<B, A>

function filter<A, B extends UniversalIterable<A>>(
  fn: (args: A) => MaybePromise<unknown>,
  iterable?: B
): IteratorReturnValue<B, A> | ((iterable: B) => IteratorReturnValue<B, A>) {
  if (iterable === undefined) {
    return (iterable) => filter(fn, iterable as any) as any
  }

  if (isIterable<A>(iterable)) {
    return sync(fn as any, iterable) as IteratorReturnValue<B, A>
  }

  if (isAsyncIterable<A>(iterable)) {
    return async(fn, iterable) as IteratorReturnValue<B, A>
  }

  throw new IterableTypeException()
}

export { filter }
