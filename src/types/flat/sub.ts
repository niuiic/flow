import { Cast } from './cast.js'
import { _IsNegative } from './isNegative.js'
import { Iteration } from './iteration.js'
import { IterationOf } from './iterationOf.js'
import { Next } from './next.js'
import { Pos } from './pos.js'
import { Prev } from './prev.js'

type _SubPositive<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubPositive<Prev<N1>, Prev<N2>>
  1: N1
  2: number
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0]

type SubPositive<N1 extends Iteration, N2 extends Iteration> = _SubPositive<N1, N2> extends infer X
  ? Cast<X, Iteration>
  : never

type _SubNegative<N1 extends Iteration, N2 extends Iteration> = {
  0: _SubNegative<Next<N1>, Next<N2>>
  1: N1
  2: number
}[Pos<N2> extends 0 ? 1 : number extends Pos<N2> ? 2 : 0]

type SubNegative<N1 extends Iteration, N2 extends Iteration> = _SubNegative<N1, N2> extends infer X
  ? Cast<X, Iteration>
  : never

export type _Sub<N1 extends Iteration, N2 extends Iteration> = {
  0: SubPositive<N1, N2>
  1: SubNegative<N1, N2>
}[_IsNegative<N2>]

export type Sub<N1 extends number, N2 extends number> = N1 extends unknown
  ? N2 extends unknown
    ? _Sub<IterationOf<N1>, IterationOf<N2>>[0]
    : never
  : never
