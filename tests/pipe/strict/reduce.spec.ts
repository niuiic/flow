import { expectType, reduce, toAsync } from 'src/index.js'

expectType<number>(reduce((a, b) => a + b, [1, 2, 3]))
expectType<(iterable: Iterable<number>) => number>(reduce((a: number, b: number) => a + b))
expectType<(iterable: AsyncIterable<number>) => Promise<number>>(reduce((a: number, b: number) => a + b))

describe('reduce', () => {
  describe('sync', () => {
    it('should use first item as initialRes if it is not specified', () => {
      const res = reduce(
        (prevRes, args) => {
          return prevRes + args
        },
        [1, 2, 3, 4]
      )
      expect(res).toEqual(10)
    })

    it('should start with initialRes if it is specified', () => {
      const res = reduce(
        (prevRes, args) => {
          return prevRes + args
        },
        10,
        [1, 2, 3, 4]
      )
      expect(res).toEqual(20)
    })

    it('should work when type of return value and arguments are different', () => {
      const res = reduce(
        (prevRes, args) => {
          return prevRes + String(args)
        },
        '10',
        [1, 2, 3, 4]
      )
      expect(res).toEqual('101234')
    })
  })

  describe('async', () => {
    it('should work for async iterable and async callback', () => {
      reduce(
        async (prevRes, args) => {
          return prevRes + args
        },
        toAsync([Promise.resolve(1), Promise.resolve(2), 3, 4])
      ).then((res) => {
        expect(res).toEqual(10)
      })
    })

    it('should work for async iterable and sync callback', () => {
      reduce(
        (prevRes, args) => {
          return prevRes + args
        },
        toAsync([Promise.resolve(1), Promise.resolve(2), 3, 4])
      ).then((res) => {
        expect(res).toEqual(10)
      })
    })
  })
})
