import { expectType, take, toAsync } from 'src/index.js'

expectType<Iterable<number>>(take(1, [1]))
expectType<AsyncIterable<number>>(take(1, toAsync([1])))

describe('take', () => {
  it('should work for iterable', () => {
    let res = 0
    for (const v of take(2, [1, 2, 3, 4])) {
      res += v
    }
    expect(res).toEqual(3)
  })

  it('should work for asyncIterable', async () => {
    let res = 0
    for await (const v of take(2, toAsync([1, 2, 3, Promise.resolve(6)]))) {
      res += v
    }
    expect(res).toEqual(3)
  })

  it('should throw an error if "length" is less than or equal to 0', () => {
    expect(() => take(0, [1, 2, 3])).toThrow()
    expect(() => take(-1, [1, 2, 3])).toThrow()
  })
})
