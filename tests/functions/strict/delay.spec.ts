import { delay } from 'src/functions/strict/delay.js'

describe('delay', () => {
  it('should delay "value" by "wait" time', () => {
    let res = 0
    delay(2, 1).then((v) => {
      res = v
    })
    setTimeout(() => {
      expect(res).toEqual(0)
    }, 1)
  })

  it('should not wait if "value" is a promise', async () => {
    const fn = jest.fn()
    delay(2, Promise.resolve(1)).then(() => {
      fn()
    })
    setTimeout(() => {
      expect(fn).toBeCalled()
    }, 1)
  })
})
