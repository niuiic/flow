import { size, toAsync } from 'src/index.js'

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
