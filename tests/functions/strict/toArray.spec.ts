import { toArray } from 'src/functions/strict/toArray.js'
import { toAsync } from 'src/index.js'

describe('toAsync', () => {
  describe('sync', () => {
    it('should work for iterable', () => {
      expect(
        toArray(
          Object.entries({
            0: 1,
            1: 1,
            2: 1
          })
        )
      ).toEqual([
        ['0', 1],
        ['1', 1],
        ['2', 1]
      ])
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      toArray(toAsync([1, 2, 3])).then((res) => {
        expect(res).toEqual([1, 2, 3])
      })
    })
  })
})
