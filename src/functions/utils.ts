import { AnyFunction, FixedPromise } from '../types/basic.js'
import { Iter } from '../types/iterable.js'

export function isPromise<A>(args: unknown): args is FixedPromise<A> {
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

export function call<A, F extends (args: Awaited<A>) => any>(
  args: A,
  fn: F
): A extends Promise<unknown> ? FixedPromise<ReturnType<F>> : ReturnType<F> {
  return isPromise(args) ? args.then(fn as any) : fn(args as any)
}

export function isFunction(args: unknown): args is AnyFunction {
  return typeof args === 'function'
}

export function isNumber(args: unknown): args is number {
  return typeof args === 'number'
}

export function isString(args: unknown): args is string {
  return typeof args === 'string'
}
