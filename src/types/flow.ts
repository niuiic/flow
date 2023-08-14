import { Result } from 'src/flow/result.js'
import { Tail } from './basic.js'
import { FixedPromise, MaybePromise } from './promise.js'

export type FnReturnValue = MaybePromise<Result<unknown>>

export interface FlowState {
  done: boolean
  log: 'NONE' | 'INFO' | 'ERROR'
}

export type Modifier = (flowState: Partial<FlowState>) => void

/** T = \[...Rest, Last\], any one of Rest is Promise ? MaybePromise<Last> : Last */
export type FlowReturnValue<T extends unknown[], Depth0 = true> = T extends [infer First, infer Second, ...infer Rest]
  ? [Promise<never>] extends [First]
    ? [First] extends [Promise<any>]
      ? // First is Promise<unknown>
        Depth0 extends true
        ? FixedPromise<Tail<T>>
        : MaybePromise<Tail<T>>
      : // First is MaybePromise<unknown>
        MaybePromise<Tail<T>>
    : FlowReturnValue<[Second, ...Rest], false>
  : T[0]
