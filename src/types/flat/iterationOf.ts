import { IterationMap } from './iterationMap.js'

export type IterationOf<N extends number> = `${N}` extends keyof IterationMap
  ? IterationMap[`${N}`]
  : IterationMap['__']
