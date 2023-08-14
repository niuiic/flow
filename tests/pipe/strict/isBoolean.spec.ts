import { expectType, isBoolean } from 'src/index.js'

expectType<boolean>(isBoolean([1, 2, 3]))

describe('isBoolean', () => {
  it('should return false if type of "args" is not boolean', () => {
    expect(isBoolean('')).toEqual(false)
  })

  it('should return true if "args" is true or false', () => {
    expect(isBoolean(true)).toEqual(true)
    expect(isBoolean(false)).toEqual(true)
  })
})
