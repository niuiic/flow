import { Equal, Expect, IsNever } from 'src/index.js'

export type Test = [Expect<Equal<IsNever<never>, true>>]
