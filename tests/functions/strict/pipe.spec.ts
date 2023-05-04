import { pipe, reduce, take, toAsync } from 'src/index.js'

describe('pipe', () => {
  describe('sync', () => {
    it('should be able to compose functions', () => {
      const res = pipe(
        [1, 2, 3, 4],
        reduce((a: number, b: number) => a + b)
      )
      expect(res).toEqual(10)
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      pipe(
        [1, 2, 3, Promise.resolve(4)],
        toAsync,
        reduce((a: number, b: number) => a + b)
      ).then((res) => {
        expect(res).toEqual(10)
      })
    })

    it('should be able to compose more functions', () => {
      pipe(
        [1, 2, 3, Promise.resolve(4)],
        toAsync,
        take(3),
        reduce((a: number, b: number) => a + b)
      ).then((res) => {
        expect(res).toEqual(6)
      })
    })
  })
})
