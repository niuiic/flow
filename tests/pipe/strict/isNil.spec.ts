import { isNil } from 'src/index.js'

describe('isNil', () => {
  it('should return false if type of "args" is not undefined or null', () => {
    expect(isNil('')).toEqual(false)
  })

  it('should return true if "args" is undefined or null', () => {
    expect(isNil(undefined)).toEqual(true)
    expect(isNil(null)).toEqual(true)
  })
})
