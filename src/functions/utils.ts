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

export function call<A, F extends (args: A extends Promise<any> ? Awaited<A> : A) => any>(
  args: A,
  fn: F
): ReturnType<F> extends Promise<any>
  ? ReturnType<F>
  : A extends Promise<any>
  ? Promise<ReturnType<F>>
  : ReturnType<F> {
  return isPromise(args) ? args.then(fn as any) : fn(args as any)
}
