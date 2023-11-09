import { expectType } from '#/utils'
import { curry } from 'fx-flow'

const add = (args: { a: number; b: number }) => args.a + args.b

expectType<(args: { b: number }) => number>(curry(add, { a: 1 }))

describe('curry', () => {
  it('should be able to work for async data', () => {
    const curriedAdd = curry(add, { a: 1 })
    expect(curriedAdd({ b: 2 })).toEqual(3)
  })
})
