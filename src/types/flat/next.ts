import { Iteration } from './iteration.js'
import { IterationMap } from './iterationMap.js'

export type Next<I extends Iteration> = IterationMap[I[3]]
