import { not } from 'src/index.js'

describe('not', () => {
  it('should return true if input is undefined or null or NaN or 0 or ""', () => {
    const values = [undefined, null, NaN, 0, '']
    values.forEach((v) => {
      expect(not(v)).toEqual(true)
    })
  })

  it('should return false if input is not a falsy value', () => {
    const values = ['1', 1, {}]
    values.forEach((v) => {
      expect(not(v)).toEqual(false)
    })
  })
})
