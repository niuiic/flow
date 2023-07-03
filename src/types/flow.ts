import { Tail } from './basic.js'
import { MaybePromise } from './promise.js'

/** T = \[...Rest, Last\], any one of Rest is Promise ? MaybePromise<Last> : Last */
export type FlowReturnValue<T extends unknown[]> = T extends [infer First, infer Second, ...infer Rest]
  ? [Promise<any>] extends [First]
    ? MaybePromise<Tail<T>>
    : FlowReturnValue<[Second, ...Rest]>
  : T[0]
