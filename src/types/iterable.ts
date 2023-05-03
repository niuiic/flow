/** Item of Iterable or AsyncIterable */
export type IterableItem<T extends Iterable<unknown> | AsyncIterable<unknown>> = T extends
  | Iterable<infer U>
  | AsyncIterable<infer U>
  ? U
  : never

/** T is async ? Promise<Awaited<R>> : R */
export type IterableReturnValue<
  T extends UniversalIterable<unknown>,
  R = IterableItem<T>
> = T extends AsyncIterable<unknown> ? Promise<Awaited<R>> : T extends Iterable<unknown> ? R : never

/** Iterator or AsyncIterator */
export type UniversalIterator<T = unknown> = Iterator<T> | AsyncIterator<T>

/** Iterable or AsyncIterable */
export type UniversalIterable<T = unknown> = Iterable<T> | AsyncIterable<T>

/** Iterator or AsyncIterator or Iterable or AsyncIterable */
export type Iter<T> = UniversalIterator<T> | UniversalIterable<T>

/** T is async ? AsyncIterableIterator<Awaited<R>> : IterableIterator<Awaited<R>> */
export type IteratorReturnValue<T extends UniversalIterable, R = IterableItem<T>> = T extends Iterable<unknown>
  ? IterableIterator<R>
  : T extends AsyncIterable<unknown>
  ? AsyncIterableIterator<Awaited<R>>
  : never
