export type Primitive = string | number | boolean | undefined | null

export type AnyObject = Record<string | number | symbol, any>

export type AnyFunction = (...args: any[]) => any

export type EmptyObject = Record<string | number | symbol, never>

export type IsAny<T> = 1 extends T & 2 ? true : false

export type IsNever<T> = [T] extends [never] ? true : false

export type IsUnion<T, A = T> = T extends T ? ([A] extends [T] ? false : true) : never

export type IsTuple<T> = [T] extends [any[]] ? (number extends T['length'] ? false : true) : false

export type Expand<T, Ignore = never> = T extends T
  ? T extends Ignore
    ? T
    : T extends (...args: infer A) => Promise<infer R>
    ? (...args: Expand<A>) => Promise<Expand<R>>
    : T extends (...args: infer A) => infer R
    ? (...args: Expand<A>) => Expand<R>
    : T extends object
    ? {
        [K in keyof T]: Expand<T[K]>
      }
    : T
  : never

export type Length<T extends unknown[]> = T['length']

export type Item<T extends unknown[]> = T[number]

export type Tail<T extends unknown[]> = T extends [...unknown[], infer Last] ? Last : never

export type Head<T extends unknown[]> = T extends [infer First, ...unknown[]] ? First : never

export type Append<T extends unknown[], U> = [...T, U]

export type Prepend<T extends unknown[], U> = [U, ...T]

export type FixedPromise<T> = Promise<Awaited<T>>

export type MaybePromise<T> = T | FixedPromise<T>
