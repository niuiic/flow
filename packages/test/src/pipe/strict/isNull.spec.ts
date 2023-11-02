import { expectType } from '#/utils'
import { isNull } from 'fx-flow'

expectType<boolean>(isNull([1, 2, 3]))

describe('isNull', () => {
  it('should return false if type of "args" is not null', () => {
    expect(isNull('')).toEqual(false)
  })

  it('should return true if "args" is null', () => {
    expect(isNull(null)).toEqual(true)
  })
})
