import { Iteration } from './iteration.js'
import { IterationOf } from './iterationOf.js'

export type _IsNegative<N extends Iteration> = {
  '-': 1
  '+': 0
  '0': 0
}[N[1]]

type IsNegative<N extends number> = _IsNegative<IterationOf<N>>

export { IsNegative }
