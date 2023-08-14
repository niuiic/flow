import { expectType, isUndefined } from 'src/index.js'

expectType<boolean>(isUndefined(''))

describe('isUndefined', () => {
  it('should return false if type of "args" is not undefined', () => {
    expect(isUndefined('')).toEqual(false)
  })

  it('should return true if "args" is undefined', () => {
    expect(isUndefined(undefined)).toEqual(true)
  })
})
