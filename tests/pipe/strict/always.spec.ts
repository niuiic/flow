import { always } from 'src/index.js'

describe('always', () => {
  it('should return a function that returns the given value', () => {
    const obj = {}
    expect(always(obj)()).toEqual(obj)
  })
})
