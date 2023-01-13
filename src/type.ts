type IsNever<T> = [T] extends [never] ? true : false

type IsAny<T> = 1 extends T & 2 ? true : false

type IsUnknown<T> = IsNever<T> extends true
  ? false
  : IsAny<T> extends true
  ? false
  : T extends unknown
  ? unknown extends T
    ? true
    : false
  : false

type NamedParams<T extends Function> = IsAny<T> extends true
  ? never
  : [T] extends [(args: infer P) => unknown]
  ? P
  : never

// include tuple and array with fixed length
type IsTuple<T> = IsAny<T> extends true
  ? false
  : [T] extends [unknown[]]
  ? number extends T['length']
    ? false
    : true
  : false

type IsArray<T> = IsAny<T> extends true
  ? false
  : [T] extends [Array<unknown>]
  ? IsTuple<T> extends true
    ? false
    : true
  : false

type IsReadonlyArray<T> = IsAny<T> extends true
  ? false
  : [T] extends [ReadonlyArray<unknown>]
  ? IsTuple<T> extends true
    ? false
    : true
  : false

type IsMap<T> = IsAny<T> extends true ? false : [T] extends [Map<unknown, unknown>] ? true : false

type IsReadonlyMap<T> = IsAny<T> extends true ? false : [T] extends [ReadonlyMap<unknown, unknown>] ? true : false

type IsSet<T> = IsAny<T> extends true ? false : [T] extends [Set<unknown>] ? true : false

type IsReadonlySet<T> = IsAny<T> extends true ? false : [T] extends [ReadonlySet<unknown>] ? true : false

type IsObject<T> = IsAny<T> extends true
  ? false
  : T extends Record<string | symbol | number, any>
  ? IsMap<T> extends true
    ? false
    : IsReadonlyMap<T> extends true
    ? false
    : IsSet<T> extends true
    ? false
    : IsReadonlySet<T> extends true
    ? false
    : IsArray<T> extends true
    ? false
    : IsTuple<T> extends true
    ? false
    : true
  : false

type IsEmptyObject<T> = IsAny<T> extends true ? false : T extends Record<string | symbol | number, never> ? true : false

type GetArrayItem<T> = T extends Array<infer R> ? R : never

type GetMapItem<T> = T extends Map<infer K, infer V> ? [K, V] : never

type GetSetItem<T> = T extends Set<infer R> ? R : never

type DeepReadonlyTuple<T, R extends readonly unknown[] = []> = [T] extends [[infer First, ...infer Rest]]
  ? DeepReadonlyTuple<Rest, readonly [DeepReadonly<First>, ...R]>
  : DeepReadonly<T>

type DeepReadonly<T> = IsAny<T> extends true
  ? T
  : IsNever<T> extends true
  ? T
  : IsArray<T> extends true
  ? ReadonlyArray<DeepReadonly<GetArrayItem<T>>>
  : IsTuple<T> extends true
  ? DeepReadonlyTuple<T>
  : IsMap<T> extends true
  ? ReadonlyMap<GetMapItem<T>[0], DeepReadonly<GetMapItem<T>[1]>>
  : IsSet<T> extends true
  ? ReadonlySet<DeepReadonly<GetSetItem<T>>>
  : IsEmptyObject<T> extends true
  ? T
  : IsObject<T> extends true
  ? {
      readonly [key in keyof T]: DeepReadonly<T[key]>
    }
  : T

// allowed types: string | number | ReadonlyArray | Array | Set | ReadonlySet | Map | ReadonlyMap | Object | Tuple
// return boolean/true if types are invalid, and return false if types are valid
type IsTypesInvalid<T> = T extends T
  ? IsAny<T> extends true
    ? true
    : IsNever<T> extends true
    ? true
    : IsUnknown<T> extends true
    ? true
    : false
  : false
type GetObjKeyValue<T> = IsObject<T> extends true
  ? keyof T extends infer K
    ? K extends keyof T
      ? T[K]
      : never
    : never
  : never
type IsParamsValid<T> = IsObject<T> extends true
  ? IsTypesInvalid<GetObjKeyValue<T>> extends false
    ? true
    : false
  : false
type IsFuncValid<T> = T extends (...args: infer P) => any
  ? P extends unknown[]
    ? P['length'] extends 1
      ? IsParamsValid<P[0]> extends true
        ? true
        : false
      : false
    : P
  : false
type PureFunc<F> = IsFuncValid<F> extends true
  ? F extends (...args: any) => any
    ? (args: DeepReadonly<NamedParams<F>>) => ReturnType<F>
    : never
  : never

// %%=========================== test ===========================%%
const func = (args: { info: { name: string; age: number } }) => `${args.info.name} is ${args.info.age} years old`

type Params = NamedParams<typeof func>

interface Test {
  name: string
  obj: {
    a: 1
    b: 2
  }
  tuple: [
    {
      a: 1
      b: 2
    },
    2,
    3,
    4
  ]
  arr: number[]
  map: Map<string, { a: 1; b: 2 }>
  set: Set<string>
  any: any
  never: never
  unknown: unknown
}

const add = <T>(args: { a: T; b: T }) => [args.a, args.b]

type Res1 = typeof add extends <T>(args: { a: T; b: T }) => any ? true : false

type Res2 = PureFunc<typeof func>

const a: Res2 = (args: {}): string => {
  return ''
}

type Res3 = IsFuncValid<typeof func>

type Res4 = [a: string, b: number] extends unknown[] ? true : false
