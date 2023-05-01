export type IterableItem<T extends Iterable<unknown> | AsyncIterable<unknown>> = T extends
  | Iterable<infer U>
  | AsyncIterable<infer U>
  ? U
  : never

export type IterableReturnValue<
  T extends UniversalIterable<unknown>,
  R = IterableItem<T>
> = T extends AsyncIterable<unknown> ? Promise<Awaited<R>> : T extends Iterable<unknown> ? Awaited<R> : never

export type UniversalIterator<T = unknown> = Iterator<T> | AsyncIterator<T>

export type UniversalIterable<T = unknown> = Iterable<T> | AsyncIterable<T>

export type Iter<T> = UniversalIterator<T> | UniversalIterable<T>
