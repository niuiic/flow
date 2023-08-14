import { expectType, map, toArray, toAsync } from 'src/index.js'

expectType<Iterable<number>>(map((v) => v + 1, [1]))
expectType<(iterable: Iterable<number>) => Iterable<number>>(map((v) => v + 1))

describe('map', () => {
  describe('sync', () => {
    it('should work for iterable', () => {
      expect(toArray(map((v) => v + 1, [1, 2, 3]))).toEqual([2, 3, 4])
    })

    it('should throw an error if iterable and async function are passed in together', () => {
      expect(() => map(async (v) => v + 1, [1, 2, 3]).next()).toThrow()
    })

    it('should throw an error if the argument is not an iterable/asyncIterable', () => {
      expect(() => map((v: number) => v + 1, { a: '' } as any)).toThrow()
    })

    it('should return a function if "iterable" is not passed', () => {
      expect(typeof map(() => 1)).toEqual('function')
    })
  })

  describe('async', () => {
    it('should work for asyncIterable and sync function', () =>
      toArray(map((v) => v + 1, toAsync([1, 2, 3]))).then((res) => expect(res).toEqual([2, 3, 4])))

    it('should work for asyncIterable and async function', () => {
      toArray(map((v) => Promise.resolve(v + 1), toAsync([1, 2, 3]))).then((res) => expect(res).toEqual([2, 3, 4]))
    })
  })
})
