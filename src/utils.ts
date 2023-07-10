import { FixedPromise, Iter } from 'src/types/index.js'

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

export class IterableTypeException extends Error {
  constructor() {
    super('"iterable" must be type of Iterable or AsyncIterable')
  }
}

export class IterableAsyncFnException extends Error {
  constructor() {
    super('Iterable cannot work with async function')
  }
}

export class FlowMissModifierException extends Error {
  constructor() {
    super('"modifier" is required')
  }
}

export function* empty() {}
