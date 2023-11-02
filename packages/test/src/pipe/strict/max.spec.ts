import { expectType } from '#/utils'
import { max, toAsync } from 'fx-flow'

expectType<number>(max([1, 2, 3]))

describe('max', () => {
  describe('sync', () => {
    it('should return largest item of the iterable', () => {
      expect(max([1, 2, 3])).toEqual(3)
    })

    it('should return NaN if iterable has no items', () => {
      expect(max([])).toEqual(NaN)
    })

    it('should return NaN if iterable contains NaN', () => {
      expect(max([1, 2, NaN])).toEqual(NaN)
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      max(toAsync([Promise.resolve(1), 2])).then((res) => {
        expect(res).toEqual(2)
      })
    })
  })
})
