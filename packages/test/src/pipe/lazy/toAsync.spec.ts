import { expectType } from '#/utils'
import { toAsync } from 'fx-flow'

expectType<AsyncIterable<number>>(toAsync([1]))

describe('toAsync', () => {
  it('should work for mixed iterable and asyncIterable', async () => {
    let res = 0
    for await (const v of toAsync([Promise.resolve(1), Promise.resolve(2), 3, 4])) {
      res += v
    }
    expect(res).toEqual(10)
  })
})
