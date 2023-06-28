import { isNull } from 'src/index.js'

describe('isNull', () => {
  it('should return false if type of "args" is not null', () => {
    expect(isNull('')).toEqual(false)
  })

  it('should return true if "args" is null', () => {
    expect(isNull(null)).toEqual(true)
  })
})
