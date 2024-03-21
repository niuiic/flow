import type { IsTuple, Primitive } from './basic'
import type { AnyFunction } from './function'

type ImmutableArray<T, Ignore = never> = ReadonlyArray<Immutable<T, Ignore>>
type ImmutableMap<K, V, Ignore = never> = ReadonlyMap<Immutable<K, Ignore>, Immutable<V, Ignore>>
type ImmutableSet<T, Ignore = never> = ReadonlySet<Immutable<T, Ignore>>
type ImmutableObject<T, Ignore = never> = { readonly [K in keyof T]: Immutable<T[K], Ignore> }
type ImmutableTuple<T, Ignore = never> = T extends [infer First, ...infer Rest]
  ? [ImmutableTuple<Rest, Ignore>] extends [never]
    ? readonly [Immutable<First, Ignore>]
    : readonly [Immutable<First, Ignore>, ...ImmutableTuple<Rest, Ignore>]
  : never

/** Make types to readonly, work recursively */
export type Immutable<T, Ignore = never> = T extends T
  ? T extends Primitive | AnyFunction | Ignore
    ? T
    : T extends Array<infer U>
      ? IsTuple<T> extends true
        ? ImmutableTuple<T, Ignore>
        : ImmutableArray<U, Ignore>
      : T extends Map<infer K, infer V>
        ? ImmutableMap<K, V, Ignore>
        : T extends Set<infer M>
          ? ImmutableSet<M, Ignore>
          : ImmutableObject<T, Ignore>
  : never
