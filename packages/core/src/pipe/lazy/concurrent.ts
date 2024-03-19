import type { IteratorResolve, Reject } from '@/types'
import { isAsyncIterable } from '@/utils'

export class Concurrent {
  static of(length: number) {
    return new Concurrent(length)
  }

  /** number of concurrency */
  length: number

  constructor(length: number) {
    this.length = length
  }
}

export function isConcurrent(concurrent: unknown): concurrent is Concurrent {
  return concurrent instanceof Concurrent
}

/**
 * Concurrent is used to balance the load of multiple asynchronous requests.
 *
 * @example
 * ```typescript
 * await pipe(
 *   [1, 2, 3, 4, 5, 6],
 *   toAsync,
 *   map((a) => delay(1000, a)),
 *   concurrent(3),
 *   each(console.log), // log 1, 2, 3, 4, 5, 6
 * ); // takes 2 seconds
 * // Task 1, 2, 3 start together, and task 4, 5, 6 wait for all the three task finished, then start together.
 *
 * await pipe(
 *   [1, 2, 3, 4, 5, 6],
 *   toAsync,
 *   map((a) => delay(1000, a)),
 *   each(console.log), // log 1, 2, 3, 4, 5, 6
 * ); // takes 6 seconds
 * // Tasks start sequentially, each task starts after the previous one finished.
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/concurrent.spec.ts | More examples}
 */
function concurrent<A>(length: number, iterable: AsyncIterable<A>): AsyncIterableIterator<A>

function concurrent<A>(length: number): (iterable: AsyncIterable<A>) => AsyncIterableIterator<A>

function concurrent<A>(
  length: number,
  iterable?: AsyncIterable<A>
): AsyncIterableIterator<A> | ((iterable: AsyncIterable<A>) => AsyncIterableIterator<A>) {
  if (iterable === undefined) {
    return (iterable: AsyncIterable<A>) => concurrent(length, iterable)
  }

  if (!Number.isFinite(length) || length <= 0) {
    throw new RangeError('"length" must be positive integer')
  }

  if (!isAsyncIterable(iterable)) {
    throw new TypeError('Type of "iterable" must be AsyncIterable')
  }

  const iterator = iterable[Symbol.asyncIterator]()
  const taskResults: PromiseSettledResult<IteratorResult<A>>[] = []
  let prevGroup = Promise.resolve()
  // count of calling `next` method of the iterator
  let nextCallCount = 0
  // count of fulfilled(exclude rejected) tasks
  let resolvedItemCount = 0
  // all tasks are fulfilled or some task is rejected
  let iterFinished = false
  // whether previous group of tasks finished
  let groupTasksFinished = true
  const settlementQueue: [IteratorResolve<A>, Reject][] = []

  const resolveTaskResults = () => {
    while (taskResults.length > 0 && nextCallCount > resolvedItemCount) {
      const taskResult = taskResults.shift()!
      const [resolve, reject] = settlementQueue.shift()!
      if (taskResult.status === 'fulfilled') {
        resolvedItemCount++
        resolve(taskResult.value)
        if (taskResult.value.done) {
          iterFinished = true
        }
      } else {
        reject(taskResult.reason)
        iterFinished = true
        break
      }
    }
  }

  const performTasks = () => {
    if (groupTasksFinished) {
      const nextGroupTasks = Promise.allSettled(
        Array.from({ length }, () => iterator.next(Concurrent.of(length) as any))
      )
      groupTasksFinished = false
      prevGroup = prevGroup
        .then(() => nextGroupTasks)
        .then((results) => {
          taskResults.push(...results)
          groupTasksFinished = true
          recur()
        })
    } else {
      prevGroup = prevGroup.then(() => {
        if (!iterFinished && nextCallCount > resolvedItemCount) {
          performTasks()
        }
      })
    }
  }

  const recur = () => {
    if (iterFinished || nextCallCount === resolvedItemCount) {
      return
    }
    if (taskResults.length > 0) {
      resolveTaskResults()
    } else {
      performTasks()
    }
  }

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    next() {
      nextCallCount++
      if (iterFinished) {
        return { done: true, value: undefined }
      }
      return new Promise((resolve, reject) => {
        settlementQueue.push([resolve, reject])
        recur()
      })
    }
  } as AsyncIterableIterator<A>
}

export { concurrent }
