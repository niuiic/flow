import { expectType } from '#/utils'
import { isUndefined } from 'fx-flow'

expectType<boolean>(isUndefined(''))

describe('isUndefined', () => {
  it('should return false if type of "args" is not undefined', () => {
    expect(isUndefined('')).toEqual(false)
  })

  it('should return true if "args" is undefined', () => {
    expect(isUndefined(undefined)).toEqual(true)
  })
})
