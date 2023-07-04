import { UniversalIterable, UniversalIterableItem } from './iterable.js'

export type ConcatReturnType<
  A extends UniversalIterable,
  B extends UniversalIterable
> = A extends AsyncIterable<unknown>
  ? AsyncIterableIterator<UniversalIterableItem<A> | UniversalIterableItem<B>>
  : B extends AsyncIterable<unknown>
  ? AsyncIterableIterator<UniversalIterableItem<A> | UniversalIterableItem<B>>
  : IterableIterator<UniversalIterableItem<A> | UniversalIterableItem<B>>
