import { every } from 'src/index.js'

describe('every', () => {
  describe('sync', () => {
    it('should return true "iterable" has no item', () => {
      expect(every((a) => a % 2 !== 0, [])).toEqual(true)
    })

    it('should return true if all values satisfies "fn"', () => {
      expect(every((a) => a % 2 === 0, [2, 4, 6, 8, 10])).toEqual(true)
    })

    it('should return false if any of values does not satisfy "fn"', () => {
      expect(every((a) => a % 2 === 0, [1, 4, 6, 8, 10])).toEqual(false)
    })

    it('should return a function if "iterable" is not passed', () => {
      expect(typeof every(() => true)).toEqual('function')
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      // every((a) => a % 2 === 0, toAsync([2, 4, 6, 8, 10])).then((res) => {
      //   expect(res).toEqual(true)
      // })
      // every((a) => a % 2 === 0, toAsync([1, 4, 6, 8, 10])).then((res) => {
      //   expect(res).toEqual(false)
      // })
    })
  })
})
