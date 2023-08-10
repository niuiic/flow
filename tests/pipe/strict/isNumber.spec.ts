import { expectType, isNumber } from 'src/index.js'

expectType<boolean>(isNumber(1))
expectType<boolean>(isNumber(undefined))

describe('isNumber', () => {
  it('should return false if type of "args" is not a number', () => {
    expect(isNumber('1')).toEqual(false)
  })

  it('should return true if "args" is a number', () => {
    expect(isNumber(0)).toEqual(true)
  })
})
