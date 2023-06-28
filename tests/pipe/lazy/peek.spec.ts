import { consume, peek, pipe, toAsync } from 'src/index.js'

describe('peek', () => {
  describe('sync', () => {
    it('should call the passed "fn"', () => {
      let sum = 0
      pipe(
        [1, 2, 3, 4],
        peek((v) => {
          sum = sum + v
        }),
        consume(Infinity)
      )
      expect(sum).toEqual(10)
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      let sum = 0
      pipe(
        [Promise.resolve(1), 2, 3, 4],
        toAsync,
        peek((v) => {
          sum = sum + v
        }),
        consume(Infinity)
      ).then(() => {
        expect(sum).toEqual(10)
      })
    })
  })
})
