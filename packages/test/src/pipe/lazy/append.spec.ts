import { expectType } from '#/utils'
import { append, concurrent, delay, map, pipe, toArray, toAsync } from 'fx-flow'

expectType<Iterable<number>>(append(1, []))
expectType<(iterable: Iterable<number>) => Iterable<number>>(append(1))
expectType<(iterable: AsyncIterable<number>) => AsyncIterable<number>>(append(1))

describe('append', () => {
  describe('sync', () => {
    it('should work for sync iterable', () => {
      expect(Array.from(append(1, [4, 5, 6]))).toEqual([4, 5, 6, 1])
    })

    it('should return a function if "iterable" not passed', () => {
      expect(typeof append([1, 2])).toEqual('function')
    })
  })

  describe('async', () => {
    it('should work for async iterable', () => {
      toArray(append(1, toAsync([4, 5, 6]))).then((res) => {
        expect(res).toEqual([4, 5, 6, 1])
      })
    })

    it('should be appended concurrently', async () => {
      const fn = jest.fn()
      setTimeout(fn, 1000)
      const res = await pipe(
        toAsync([1, 2, 3]),
        map((a) => delay(1000, a)),
        append(4),
        append(Promise.resolve(5)),
        append(6),
        concurrent(3),
        toArray
      )
      expect(fn).toHaveBeenCalled()
      expect(res).toEqual([1, 2, 3, 4, 5, 6])
    }, 1050)
  })
})
