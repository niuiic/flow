import { expectType } from '#/utils'
import { enumerate, toArray, toAsync } from 'fx-flow'

expectType<Iterable<[number, string]>>(enumerate(['']))

describe('enumerate', () => {
  describe('sync', () => {
    it('should work for iterable', () => {
      expect(toArray(enumerate([1, 2, 3]))).toEqual([
        [0, 1],
        [1, 2],
        [2, 3]
      ])
    })

    it('should throw an error if the argument is not an iterable/asyncIterable', () => {
      // eslint-disable-next-line max-nested-callbacks
      expect(() => enumerate({ a: '' } as any)).toThrow()
    })

    it('should return a function if "iterable" is not passed', () => {
      expect(typeof enumerate()).toEqual('function')
    })
  })

  describe('async', () => {
    it('should work for asyncIterable and sync function', () =>
      toArray(enumerate(toAsync([1, 2, 3]))).then((res) =>
        expect(res).toEqual([
          [0, 1],
          [1, 2],
          [2, 3]
        ])
      ))
  })
})
