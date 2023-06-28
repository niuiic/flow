import { Tail } from './basic.js'
import { FixedPromise } from './promise.js'

/** T = \[...Rest, Last\], any one of Rest is async ? FixedPromise<Last> : Last */
export type FlowReturnValue<T extends unknown[]> = T extends [infer First, infer Second, ...infer Rest]
  ? First extends Promise<unknown>
    ? FixedPromise<Tail<T>>
    : FlowReturnValue<[Second, ...Rest]>
  : T[0]
