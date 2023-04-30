import { Iter } from 'src/types/iterable.js'

export function isPromise<A>(args: Promise<A> | A): args is Promise<A> {
  if (args instanceof Promise) {
    return true
  }

  if (
    args !== null &&
    typeof args === 'object' &&
    typeof (args as any).then === 'function' &&
    typeof (args as any).catch === 'function'
  ) {
    return true
  }

  return false
}

export function isIterable<T = unknown>(args: Iter<T> | unknown): args is Iterable<T> {
  return typeof (args as any)?.[Symbol.iterator] === 'function'
}

export function isAsyncIterable<T = unknown>(args: Iter<T> | unknown): args is AsyncIterable<T> {
  return typeof (args as any)?.[Symbol.asyncIterator] === 'function'
}
