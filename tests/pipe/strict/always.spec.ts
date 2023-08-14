import { always, expectType } from 'src/index.js'

expectType<() => true>(always(true))

describe('always', () => {
  it('should return a function that returns the given value', () => {
    const obj = {}
    expect(always(obj)()).toEqual(obj)
  })
})
