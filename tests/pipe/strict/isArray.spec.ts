import { expectType, isArray } from 'src/index.js'

expectType<boolean>(isArray([1, 2, 3]))

describe('isArray', () => {
  it('should return false if type of "args" is not an array', () => {
    expect(isArray('')).toEqual(false)
  })

  it('should return true if "args" is an array', () => {
    expect(isArray([])).toEqual(true)
  })
})
