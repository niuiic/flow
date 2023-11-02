import { expectType } from '#/utils'
import { includes, pipe, toAsync } from 'fx-flow'

expectType<boolean>(includes(1, [2, 1, 3]))
expectType<Promise<boolean>>(includes(1, toAsync([2, 1, 3])))

describe('includes', () => {
  describe('sync', () => {
    it('should work for iterable', () => {
      expect(includes(1, [1, 2, 3])).toEqual(true)
    })

    it('should return false if no item in iterable', () => {
      expect(includes(1, [])).toEqual(false)
    })

    it('should return a function if "iterable" is not passed', () => {
      expect(typeof includes(1)).toEqual('function')
    })

    it('should throw an error if "iterable" is not a iterable', () => {
      expect(() => includes(1, 1 as any)).toThrow()
    })
  })

  describe('async', () => {
    it('should work for async iterable', () => {
      pipe([1, 2, 3, 4], toAsync, includes(1)).then((res) => {
        expect(res).toEqual(true)
      })
    })
  })
})
