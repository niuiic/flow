import { expectType } from '#/utils'
import { delay } from 'fx-flow'

expectType<Promise<string>>(delay(1, ''))

describe('delay', () => {
  it('should delay "value" by "wait" time', () => {
    let res = 0
    delay(200, 1).then((v) => {
      res = v
    })
    setTimeout(() => {
      expect(res).toEqual(0)
    }, 100)
  })

  it('should work for a promise', async () => {
    let res = 0
    delay(200, Promise.resolve(1)).then((v) => {
      res = v
    })
    setTimeout(() => {
      expect(res).toEqual(0)
    }, 100)
  })
})
