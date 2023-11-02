import type { IsNever } from 'fx-flow'

export type Test = [Expect<Equal<IsNever<never>, true>>]

describe('', () => it('', () => {}))
