import { expectType } from '#/utils'
import { last, range, toAsync } from 'fx-flow'

expectType<number | undefined>(last([1, 2, 3]))
expectType<number>(last([1, 2, 3] as const))

describe('last', () => {
  describe('sync', () => {
    it('should return last item of "iterable"', () => {
      const result = last(range(5))
      expect(result).toEqual(4)
      const result2 = last([1, 2, 3, 4])
      expect(result2).toEqual(4)
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      const result = last(toAsync(range(5)))
      result.then((result) => {
        expect(result).toEqual(4)
      })
    })
  })
})
