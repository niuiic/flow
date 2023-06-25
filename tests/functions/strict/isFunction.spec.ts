import { isFunction } from 'src/index.js'

describe('isFunction', () => {
  it('should return false if type of "args" is not a function', () => {
    expect(isFunction(1)).toEqual(false)
  })

  it('should return true if "args" is a function', () => {
    expect(isFunction(() => {})).toEqual(true)
  })
})
