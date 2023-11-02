import { expectType } from '#/utils'
import { size, toAsync } from 'fx-flow'

expectType<number>(size([1, 2, 3]))
expectType<Promise<number>>(size(toAsync([1, 2, 3])))

describe('size', () => {
  it('should work for iterable', () => {
    expect(size([1, 2])).toEqual(2)
  })

  it('should work for async iterable', () => {
    size(toAsync([1, 2, Promise.resolve(3)])).then((res) => {
      expect(res).toEqual(3)
    })
  })
})
