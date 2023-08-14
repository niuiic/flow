import { concat, concurrent, delay, expectType, map, pipe, toArray, toAsync } from 'src/index.js'

expectType<Iterable<number>>(concat([1], []))
expectType<(iterable: Iterable<number>) => Iterable<number>>(concat([1]))
expectType<(iterable: AsyncIterable<number>) => AsyncIterable<number>>(concat([1]))

describe('concat', () => {
  describe('sync', () => {
    it('should work for sync iterables', () => {
      expect(Array.from(concat([1, 2, 3], [4, 5, 6]))).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should return a function if "iterable2" not passed', () => {
      expect(typeof concat([1, 2])).toEqual('function')
    })
  })

  describe('async', () => {
    it('should work for async iterables', () => {
      toArray(concat([1, 2, 3], toAsync([4, 5, 6]))).then((res) => {
        expect(res).toEqual([1, 2, 3, 4, 5, 6])
      })
    })

    it("should be concatenated given two 'AsyncIterable' concurrently", async () => {
      const fn = jest.fn()
      setTimeout(fn, 300)
      const res = await pipe(
        [map((a) => delay(100, a), toAsync([1, 2, 3])), map((a) => delay(100, a), toAsync([4, 5, 6]))],
        ([a, b]) => concat(a, b),
        concurrent(2),
        toArray
      )
      expect(fn).toBeCalled()
      expect(res).toEqual([1, 2, 3, 4, 5, 6])
    }, 350)
  })
})
