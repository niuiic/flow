/** Item of Iterable or AsyncIterable */
export type UniversalIterableItem<T extends Iterable<unknown> | AsyncIterable<unknown>> = T extends Iterable<infer U>
  ? U
  : T extends AsyncIterable<infer U>
  ? Awaited<U>
  : never

/** Item of Iterable */
export type IterableItem<T extends Iterable<unknown>> = T extends Iterable<infer U> ? U : never

/** T is AsyncIterable ? Promise<Awaited<R>> : R */
export type IterableReturnValue<
  T extends UniversalIterable<unknown>,
  R = UniversalIterableItem<T>
> = T extends AsyncIterable<unknown> ? Promise<Awaited<R>> : T extends Iterable<unknown> ? R : never

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
