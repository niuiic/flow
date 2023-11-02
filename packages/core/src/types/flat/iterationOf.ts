import type { IterationMap } from './iterationMap'

export type IterationOf<N extends number> = `${N}` extends keyof IterationMap
  ? IterationMap[`${N}`]
  : IterationMap['__']
