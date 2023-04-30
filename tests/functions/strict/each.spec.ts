import { each } from 'src/index.js'

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
    it('should wait for async functions', () => {
      let res = 0
      each(
        async (v) => {
          res += v
        },
        [1, 2, 3, 4, 5]
      )
      expect(res).toEqual(15)
    })
  })
})
