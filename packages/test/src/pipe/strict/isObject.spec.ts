import { expectType } from '#/utils'
import { isObject } from 'fx-flow'

expectType<boolean>(isObject({}))
expectType<boolean>(isObject(undefined))

describe('isObject', () => {
  it('should return false if type of "args" is not an object', () => {
    expect(isObject(1)).toEqual(false)
    expect(isObject(null)).toEqual(false)
  })

  it('should return true if "args" is an object', () => {
    expect(isObject(() => {})).toEqual(true)
    expect(isObject({})).toEqual(true)
    expect(isObject([1, 2])).toEqual(true)
  })
})
