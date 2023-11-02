import { expectType } from '#/utils'
import { tap, toAsync } from 'fx-flow'

expectType<Iterable<number>>(tap(() => {}, [1, 2, 3]))
expectType<AsyncIterable<number>>(tap(() => {}, toAsync([1, 2, 3])))

describe('tap', () => {
  describe('sync', () => {
    it('should call "fn" and return the original value', () => {
      expect(tap(() => {}, [1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should return a function if "args" is not passed', () => {
      expect(typeof tap(() => {})).toEqual('function')
    })

    it('should work for async value', () => {
      const value = Promise.resolve(1)
      expect(tap(() => {}, value)).toEqual(value)
    })
  })
})
