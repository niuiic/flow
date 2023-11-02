import type { FixedPromise } from './promise'

/** Item of Iterable or AsyncIterable */
export type UniversalIterableItem<T extends Iterable<unknown> | AsyncIterable<unknown>> = T extends Iterable<infer U>
  ? U
  : T extends AsyncIterable<infer U>
  ? Awaited<U>
  : never

/** Item of Iterable */
export type IterableItem<T extends Iterable<unknown>> = T extends Iterable<infer U> ? U : never

/** Item of AsyncIterable */
export type AsyncIterableItem<T extends AsyncIterable<unknown>> = T extends AsyncIterable<infer U> ? Awaited<U> : never

/** T is AsyncIterable ? FixedPromise<R> : R */
export type IterableReturnValue<
  T extends UniversalIterable,
  R = UniversalIterableItem<T>
> = T extends AsyncIterable<unknown> ? FixedPromise<R> : T extends Iterable<unknown> ? R : never

/** Iterator or AsyncIterator */
export type UniversalIterator<T = unknown> = Iterator<T> | AsyncIterator<T>

/** Iterable or AsyncIterable */
export type UniversalIterable<T = unknown> = Iterable<T> | AsyncIterable<T>

/** Iterator or AsyncIterator or Iterable or AsyncIterable */
export type Iter<T> = UniversalIterator<T> | UniversalIterable<T>

/** T is async(AsyncIterable) ? AsyncIterableIterator<Awaited<R>> : IterableIterator<R> */
export type IteratorReturnValue<T extends UniversalIterable, R = UniversalIterableItem<T>> = T extends Iterable<unknown>
  ? IterableIterator<R>
  : T extends AsyncIterable<unknown>
  ? AsyncIterableIterator<Awaited<R>>
  : never
