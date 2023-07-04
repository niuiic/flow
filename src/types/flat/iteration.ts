import { IterationMap } from './iterationMap.js'

export type Iteration = [
  value: number,
  sign: '-' | '0' | '+',
  prev: keyof IterationMap,
  next: keyof IterationMap,
  oppo: keyof IterationMap
]
