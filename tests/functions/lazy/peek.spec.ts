import { each, peek, pipe, toAsync } from 'src/index.js'

describe('peek', () => {
  describe('sync', () => {
    it('should call the passed "fn"', () => {
      let sum = 0
      pipe(
        [1, 2, 3, 4],
        peek((v) => {
          sum = sum + v
        }),
        each(console.log)
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
        each(console.log)
      ).then(() => {
        expect(sum).toEqual(10)
      })
    })
  })
})
