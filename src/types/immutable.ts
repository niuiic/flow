import { AnyFunction, IsTuple, Primitive } from './basic.js'

type ImmutableArray<T> = ReadonlyArray<Immutable<T>>
type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>
type ImmutableSet<T> = ReadonlySet<Immutable<T>>
type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> }
type ImmutableTuple<T> = T extends [infer First, ...infer Rest]
  ? [ImmutableTuple<Rest>] extends [never]
    ? readonly [Immutable<First>]
    : readonly [Immutable<First>, ...ImmutableTuple<Rest>]
  : never

export type Immutable<T> = T extends T
  ? T extends Primitive | AnyFunction
    ? T
    : T extends Array<infer U>
    ? IsTuple<T> extends true
      ? ImmutableTuple<T>
      : ImmutableArray<U>
    : T extends Map<infer K, infer V>
    ? ImmutableMap<K, V>
    : T extends Set<infer M>
    ? ImmutableSet<M>
    : ImmutableObject<T>
  : never
