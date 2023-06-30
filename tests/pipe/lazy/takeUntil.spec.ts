import { concurrent, delay, each, map, pipe, takeUntil, toArray, toAsync } from 'src/index.js'

describe('takeUntil', () => {
  describe('sync', () => {
    it('should work for iterable', () => {
      expect(toArray(takeUntil((v) => v > 2, [1, 2, 3, 4]))).toEqual([1, 2])
    })

    it('should return a function if "iterable" is not passed', () => {
      expect(typeof takeUntil(() => true)).toEqual('function')
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      pipe(
        [1, 2, 3, 4],
        toAsync,
        takeUntil((v) => v > 2),
        toArray
      ).then((res) => {
        expect(res).toEqual([1, 2])
      })
    })

    it('should work with concurrent', () => {
      let sum = 0

      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8],
        toAsync,
        takeUntil((v) => v === 5),
        map((v) => delay(10, v)),
        concurrent(2),
        each((v) => (sum = sum + v))
      ).then(() => {
        expect(sum).toEqual(10)
      })
    })
  })
})
