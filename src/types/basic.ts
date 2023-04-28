export type IsAny<T> = 1 extends T & 2 ? true : false

export type IsNever<T> = [T] extends [never] ? true : false

export type IsUnion<T, A = T> = T extends T ? ([A] extends [T] ? false : true) : never

export type IsTuple<T> = [T] extends [any[]] ? (number extends T['length'] ? false : true) : false

export type AnyObject = Record<string | number | symbol, any>

export type EmptyObject = Record<string | number | symbol, never>

export type AnyFunction = (...args: any[]) => any

export type Expand<T> = T extends T
  ? T extends (...args: infer A) => Promise<infer R>
    ? (...args: Expand<A>) => Promise<Expand<R>>
    : T extends (...args: infer A) => infer R
    ? (...args: Expand<A>) => Expand<R>
    : T extends object
    ? {
        [K in keyof T]: Expand<T[K]>
      }
    : T
  : never

export type Primitive = string | number | boolean | undefined | null
