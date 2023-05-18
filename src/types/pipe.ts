import { Tail } from './basic.js'

/** T = \[...Rest, Last\], any one of Rest is async ? Promise<Awaited<Last>> : Last */
export type PipeReturnValue<T extends unknown[]> = T extends [infer First, infer Second, ...infer Rest]
  ? First extends Promise<unknown> | AsyncIterable<unknown>
    ? Promise<Awaited<Tail<T>>>
    : PipeReturnValue<[Second, ...Rest]>
  : T[0]
