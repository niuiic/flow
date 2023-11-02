import type { AsyncIterableItem, IterableItem, UniversalIterable } from './iterable'

/** T is AsyncIterable ? Promise<AsyncIterableItem<T>> : IterableItem<T> */
export type ArrayReturnValue<T extends UniversalIterable> = T extends Iterable<unknown>
  ? IterableItem<T>[]
  : T extends AsyncIterable<unknown>
  ? Promise<AsyncIterableItem<T>[]>
  : never
