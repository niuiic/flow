import { expectType } from '#/utils'
import { each, toAsync } from 'fx-flow'

expectType<void>(each(() => {}, [1, 2, 3]))

describe('each', () => {
  describe('sync', () => {
    it('should apply "fn" on each item of "iterable"', () => {
      let res = 0
      each(
        (v) => {
          res += v
        },
        [1, 2, 3, 4, 5]
      )
      expect(res).toEqual(15)
    })
  })

  describe('async', () => {
    it('should work for async iterable', () => {
      let res = 0
      each(
        (v) => {
          res += v
        },
        toAsync([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
      ).then(() => {
        expect(res).toEqual(6)
      })
    })

    it('should wait for async functions', () => {
      let res = 0
      each(
        async (v) => {
          res += v
        },
        toAsync([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
      ).then(() => {
        expect(res).toEqual(6)
      })
    })
  })
})
