import { Iteration } from './iteration.js'
import { IterationMap } from './iterationMap.js'

export type Prev<I extends Iteration> = IterationMap[I[2]]
