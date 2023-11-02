import type { UniversalIterable, UniversalIterableItem } from './iterable'

export type ConcatReturnValue<
  A extends UniversalIterable,
  B extends UniversalIterable
> = A extends AsyncIterable<unknown>
  ? AsyncIterableIterator<UniversalIterableItem<A> | UniversalIterableItem<B>>
  : B extends AsyncIterable<unknown>
  ? AsyncIterableIterator<UniversalIterableItem<A> | UniversalIterableItem<B>>
  : IterableIterator<UniversalIterableItem<A> | UniversalIterableItem<B>>
