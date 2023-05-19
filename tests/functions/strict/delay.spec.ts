import { delay } from 'src/functions/strict/delay.js'

describe('delay', () => {
  it('should delay "value" by "wait" time', () => {
    let res = 0
    delay(100, 1).then((v) => {
      res = v
    })
    setTimeout(() => {
      expect(res).toEqual(0)
    }, 10)
    setTimeout(() => {
      expect(res).toEqual(1)
    }, 200)
  })
})
