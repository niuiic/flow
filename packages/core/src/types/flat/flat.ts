import type { AsyncIterableItem, IterableItem, UniversalIterable } from '../iterable'
import type { Sub } from './sub'

type DeepFlat<A, B extends number = 0> = A extends UniversalIterable<infer U>
  ? B extends 0
    ? A
    : DeepFlat<U, Sub<B, 1>>
  : A

type DeepFlatSync<A, B extends number = 0> = A extends Iterable<infer U>
  ? B extends 0
    ? A
    : DeepFlat<U, Sub<B, 1>>
  : A

export type FlatReturnValue<A extends UniversalIterable, B extends number = 1> = A extends Iterable<unknown>
  ? IterableIterator<DeepFlatSync<IterableItem<A>, B>>
  : A extends AsyncIterable<unknown>
  ? AsyncIterableIterator<DeepFlat<Awaited<AsyncIterableItem<A>>, B>>
  : never
