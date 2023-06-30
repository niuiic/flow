import { some, toAsync } from 'src/index.js'

describe('some', () => {
  describe('sync', () => {
    it('should return false "iterable" has no item', () => {
      expect(some((a) => a % 2 !== 0, [])).toEqual(false)
    })

    it('should return true if any of values satisfies "fn"', () => {
      expect(some((a) => a % 2 !== 0, [1, 4, 6, 8, 10])).toEqual(true)
    })

    it('should return false if none of values satisfies "fn"', () => {
      expect(some((a) => a % 2 !== 0, [2, 4, 6, 8, 10])).toEqual(false)
    })

    it('should return a function if "iterable" is not passed', () => {
      expect(typeof some(() => true)).toEqual('function')
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      some((a) => a % 2 !== 0, toAsync([1, 4, 6, 8, 10])).then((res) => {
        expect(res).toEqual(true)
      })

      some((a) => a % 2 !== 0, toAsync([2, 4, 6, 8, 10])).then((res) => {
        expect(res).toEqual(false)
      })
    })
  })
})
