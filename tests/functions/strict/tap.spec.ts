import { tap } from 'src/index.js'

describe('tap', () => {
  describe('sync', () => {
    it('should call "fn" and return the original value', () => {
      expect(tap(console.log, [1, 2, 3])).toEqual([1, 2, 3])
    })

    it('should work for async value', () => {
      const value = Promise.resolve(1)
      expect(tap(console.log, value)).toEqual(value)
    })
  })
})
