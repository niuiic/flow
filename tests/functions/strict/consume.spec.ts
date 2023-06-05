import { consume, peek, pipe, toAsync } from 'src/index.js'

describe('consume', () => {
  describe('sync', () => {
    it('should work for iterable', () => {
      let sum = 0
      pipe(
        [1, 2, 3],
        peek((v) => {
          sum = sum + v
        }),
        consume(2)
      )
      expect(sum).toEqual(3)
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      let sum = 0
      pipe(
        [Promise.resolve(1), 2, 3],
        toAsync,
        peek((v) => {
          sum = sum + v
        }),
        consume(2)
      ).then(() => {
        expect(sum).toEqual(3)
      })
    })
  })
})
