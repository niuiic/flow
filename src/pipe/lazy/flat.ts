import { FlatReturnValue, IteratorResolve, Reject, UniversalIterable } from 'src/types/index.js'
import { IterableTypeException, empty, isAsyncIterable, isIterable } from 'src/utils.js'
import { last } from '../strict/last.js'
import { append } from './append.js'
import { concat } from './concat.js'
import { concurrent as concurrentFn, isConcurrent } from './concurrent.js'

function isFlatAble(args: unknown): args is Iterable<unknown> {
  return typeof args !== 'string' && isIterable(args)
}

function asyncSequential<A>(iterable: AsyncIterable<A>, depth: number): AsyncIterableIterator<A> {
  const iterator = iterable[Symbol.asyncIterator]()
  const iteratorStack: [first: AsyncIterator<A>, ...rest: Iterator<any>[]] = [iterator]
  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next() {
      const iterator = last(iteratorStack)
      if (!iterator) {
        return { done: true, value: undefined }
      }

      const { value, done } = await iterator.next()
      if (done) {
        iteratorStack.pop()
        return this.next()
      }

      if (isFlatAble(value) && iteratorStack.length < depth + 1) {
        iteratorStack.push(value[Symbol.iterator]())
        return this.next()
      }

      return {
        done: false,
        value
      }
    }
  }
}

function asyncConcurrent<A>(iterable: AsyncIterable<A>, depth: number): AsyncIterableIterator<A> {
  const iterator = iterable[Symbol.asyncIterator]()
  let prevItem = Promise.resolve()
  let flattenIterator = empty() as IterableIterator<A>
  let finished = false
  const settlementQueue: [IteratorResolve<A>, Reject][] = []

  const fillItem = async () => {
    const { done, value } = await iterator.next()
    if (done) {
      return false
    }

    if (isFlatAble(value)) {
      flattenIterator = concat(sync(value as Iterable<A>, depth - 1), flattenIterator)
    } else {
      flattenIterator = append(value, flattenIterator)
    }
    return true
  }

  const pullItem = async (): Promise<IteratorResult<A>> => {
    if (finished) {
      return { done: true, value: undefined }
    }

    const { value, done } = flattenIterator.next()
    if (done) {
      const hasItem = await fillItem()
      if (hasItem) {
        return pullItem()
      }

      return { done: true, value: undefined }
    }

    return { done: false, value }
  }

  const resolveItem = ({ done, value }: any) => {
    if (done || finished) {
      while (settlementQueue.length > 0) {
        const [resolve] = settlementQueue.shift()!
        resolve({ done: true, value: undefined })
      }
      return
    }

    const [resolve] = settlementQueue.shift()!
    resolve({ done, value })
  }

  const catchItem = (err: any) => {
    finished = true
    const [_, reject] = settlementQueue.shift()!
    reject(err)
  }

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next() {
      return new Promise((resolve, reject) => {
        settlementQueue.push([resolve, reject])

        prevItem = prevItem
          .then(() => pullItem())
          .then(resolveItem)
          .catch(catchItem)
      })
    }
  }
}

function async<A>(iterable: AsyncIterable<A>, depth: number): AsyncIterableIterator<A> {
  let iterator: AsyncIterator<A>
  return {
    async next(concurrent: any) {
      if (iterator === undefined) {
        iterator = isConcurrent(concurrent)
          ? asyncConcurrent(concurrentFn(concurrent.length, iterable), depth)
          : asyncSequential(iterable, depth)
      }
      return iterator.next(concurrent)
    },
    [Symbol.asyncIterator]() {
      return this
    }
  }
}

function sync<A>(iterable: Iterable<A>, depth: number): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]()
  const iteratorStack: [first: Iterator<A>, ...rest: Iterator<any>[]] = [iterator]

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      const iterator = last(iteratorStack)
      if (!iterator) {
        return { done: true, value: undefined }
      }

      const { value, done } = iterator.next()
      if (done) {
        iteratorStack.pop()
        return this.next()
      }

      if (isFlatAble(value) && iteratorStack.length < depth + 1) {
        iteratorStack.push(value[Symbol.iterator]())
        return this.next()
      }

      return {
        done: false,
        value
      }
    }
  }
}

/**
 * Return flattened Iterable/AsyncIterable.
 * If first argument is number, more perform flatten `flat(2, [[[1,2]]]) // [1,2]`.
 *
 * @example
 * ```typescript
 * const iter = flat([1,[2,3],[[4,5]]]);
 * iter.next() // {done:false, value: 1}
 * iter.next() // {done:false, value: 2}
 * iter.next() // {done:false, value: 3}
 * iter.next() // {done:false, value: [4, 5]}
 * iter.next() // {done:true, value: undefined}
 *
 * pipe(
 *  [1,[2, 3],[[4, 5]]],
 *  flat,
 *  toArray,
 * ); // [1, 2, 3, [4, 5]]
 *
 * await pipe(
 *  Promise.resolve([1,[2, 3],[[4, 5]]]),
 *  flat,
 *  toArray,
 * ); // [1, 2, 3, [4, 5]]
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/flat.spec.ts | More examples}
 */
function flat<A extends UniversalIterable, B extends number = 1>(iterable: A, depth?: B): FlatReturnValue<A, B>

function flat<A extends UniversalIterable, B extends number = 1>(iterable: A, depth = 1): FlatReturnValue<A, B> {
  if (isIterable(iterable)) {
    return sync(iterable, depth) as FlatReturnValue<A, B>
  }

  if (isAsyncIterable(iterable)) {
    return async(iterable, depth) as FlatReturnValue<A, B>
  }

  throw new IterableTypeException()
}

export { flat }
