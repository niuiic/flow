import { concurrent, delay, expectType, filter, flat, map, pipe, take, toArray, toAsync } from 'src/index.js'

expectType<Iterable<number>>(flat([1, [1, [1, [1, [1, [1]]]]]], Infinity))

describe('flat', () => {
  describe('sync', () => {
    it('should be flattened', () => {
      const acc = []
      for (const a of flat([[1, 2], 3, 4, 5, [6, 7]])) {
        acc.push(a)
      }
      expect(acc).toEqual([1, 2, 3, 4, 5, 6, 7])

      const res = [...flat([[1, 2], 3, 4, 5, [6, 7, [8, 9]]], 2)]
      expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('should be able to be used as a curried function in the pipeline', () => {
      const res = pipe(
        [1, 2, 3, [4, 5]],
        flat,
        map((a) => a + 10),
        toArray
      )

      expect(res).toEqual([11, 12, 13, 14, 15])
    })
  })

  describe('async', () => {
    it('should be flattened', async () => {
      const acc = []
      for await (const a of flat(toAsync([[1, 2], 3, 4, 5, [6, 7]]))) {
        acc.push(a)
      }
      expect(acc).toEqual([1, 2, 3, 4, 5, 6, 7])

      const res = await toArray(flat(toAsync([[1, 2], 3, 4, 5, [6, 7, [8, 9]]]), 2))
      expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('should be able to be used as a curried function in the pipeline', async () => {
      const res = await pipe(
        toAsync([1, 2, 3, [4, 5]]),
        flat,
        map((a) => a + 10),
        toArray
      )

      expect(res).toEqual([11, 12, 13, 14, 15])
    })

    it('should be flattened concurrently with filter', async () => {
      const res = await pipe(
        [[1], [2], [3], [4]],
        toAsync,
        (iter) => flat(iter, 2),
        map((a) => delay(1000, a)),
        filter((a) => a % 2 === 0),
        take(2),
        concurrent(4),
        toArray
      )

      expect(res).toEqual([2, 4])
    })

    it('should be able to handle an error', async () => {
      await expect(
        pipe(
          toAsync(
            (function* () {
              yield [1, 2, 3]
              throw new Error('err')
            })()
          ),
          map((a) => delay(1000, a)),
          flat,
          concurrent(2),
          toArray
        )
      ).rejects.toThrow('err')
    })

    it('should be able to handle errors', async () => {
      await expect(
        pipe(
          toAsync(
            (function* () {
              yield [1, 2, 3]
              yield [1, 2, 3]
              yield [1, 2, 3]
              yield [1, 2, 3]
            })()
          ),
          map(async (a) => {
            await delay(1000, a)
            throw new Error('err')
          }),
          flat,
          concurrent(4),
          toArray
        )
      ).rejects.toThrow('err')
    })
  })
})
