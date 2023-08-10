import { expectType, isString } from 'src/index.js'

expectType<boolean>(isString(''))
expectType<boolean>(isString(undefined))

describe('isString', () => {
  it('should return false if type of "args" is not a string', () => {
    expect(isString(1)).toEqual(false)
  })

  it('should return true if "args" is a string', () => {
    expect(isString('')).toEqual(true)
  })
})
