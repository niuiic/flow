import type { Iteration } from './iteration'
import type { IterationMap } from './iterationMap'

export type Prev<I extends Iteration> = IterationMap[I[2]]
