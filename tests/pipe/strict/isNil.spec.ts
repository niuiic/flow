import { expectType, isNil } from 'src/index.js'

expectType<boolean>(isNil([1, 2, 3]))

describe('isNil', () => {
  it('should return false if type of "args" is not undefined or null', () => {
    expect(isNil('')).toEqual(false)
  })

  it('should return true if "args" is undefined or null', () => {
    expect(isNil(undefined)).toEqual(true)
    expect(isNil(null)).toEqual(true)
  })
})
