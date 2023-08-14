import { add, expectType } from 'src/index.js'

expectType<number>(add(1, 1))

describe('add', () => {
  describe('sync', () => {
    it('should be able to calculate the sum of string', () => {
      expect(add('a', 'b')).toEqual('ab')
    })

    it('should be able to calculate the sum of number', () => {
      expect(add(1, 3)).toEqual(4)
    })
  })

  describe('async', () => {
    it('should be able to work for async data', () => {
      add(Promise.resolve(1), 2).then((res) => {
        expect(res).toEqual(3)
      })
    })
  })
})
