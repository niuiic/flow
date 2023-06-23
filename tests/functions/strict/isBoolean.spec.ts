import { isBoolean } from 'src/index.js'

describe('isBoolean', () => {
  it('should return false if type of "args" is not boolean', () => {
    expect(isBoolean('')).toEqual(false)
  })

  it('should return true if "args" is true or false', () => {
    expect(isBoolean(true)).toEqual(true)
    expect(isBoolean(false)).toEqual(true)
  })
})
