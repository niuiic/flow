import { expectType, isFunction } from 'src/index.js'

expectType<boolean>(isFunction([1, 2, 3]))

describe('isFunction', () => {
  it('should return false if type of "args" is not a function', () => {
    expect(isFunction(1)).toEqual(false)
  })

  it('should return true if "args" is a function', () => {
    expect(isFunction(() => {})).toEqual(true)
  })
})
