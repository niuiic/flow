import type { Iteration } from './iteration'
import type { IterationMap } from './iterationMap'

export type Next<I extends Iteration> = IterationMap[I[3]]
