export type AnyObject = Record<string | number | symbol, any>
export type EmptyObject = Record<string | number | symbol, never>
export type AnyFunction = (...args: any[]) => any
export type IsAny<T> = 1 extends T & 2 ? true : false

export type Expand<T> = T extends T
  ? T extends (...args: infer A) => Promise<infer R>
    ? (...args: Expand<A>) => Promise<Expand<R>>
    : T extends (...args: infer A) => infer R
    ? (...args: Expand<A>) => Expand<R>
    : T extends AnyObject
    ? {
        [K in keyof T]: Expand<T[K]>
      }
    : T
  : never
