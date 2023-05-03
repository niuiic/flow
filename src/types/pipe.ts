import { Tail } from './basic.js'

export type PipeReturnValue<T extends unknown[]> = T extends [infer First, infer Second, ...infer Rest]
  ? First extends Promise<unknown> | AsyncIterable<unknown>
    ? Promise<Tail<T>>
    : PipeReturnValue<[Second, ...Rest]>
  : T[0]
