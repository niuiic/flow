import { concurrent, delay, each, expectType, filter, map, max, pipe, toAsync } from 'src/index.js'

expectType<Iterable<number>>(filter((v): v is number => v !== undefined, [1, 2, undefined]))
expectType<Iterable<number | undefined>>(filter((v) => v !== undefined, [1, 2, undefined]))
expectType<AsyncIterable<number>>(filter((v): v is number => v !== undefined, toAsync([1, 2, undefined])))

describe('filter', () => {
  describe('sync', () => {
    it('should be able to filter iterable', () => {
      expect(
        pipe(
          [1, 2, 3, 4],
          filter((v) => v < 2),
          max
        )
      ).toEqual(1)
    })

    it('should return a function if "iterable" is not passed', () => {
      expect(typeof filter(() => true)).toEqual('function')
    })
  })

  describe('async', () => {
    it('should be able to work with asyncIterable', () => {
      pipe(
        [1, 2, 3, 4],
        toAsync,
        filter((v) => v < 2),
        max
      ).then((res) => {
        expect(res).toEqual(1)
      })
    })

    it('should be able to work with concurrent', () => {
      let sum = 0

      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8],
        toAsync,
        filter((v) => v < 5),
        map((v) => delay(10, v)),
        concurrent(2),
        each((v) => (sum = sum + v))
      ).then(() => {
        expect(sum).toEqual(10)
      })
    })
  })
})
