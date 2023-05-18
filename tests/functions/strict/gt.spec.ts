import { gt } from 'src/index.js'

describe('gt', () => {
  it('should be able to compare numbers', () => {
    expect(gt(1, 2)).toEqual(false)
    expect(gt(2)(1)).toEqual(true)
  })

  it('should be able to compare strings', () => {
    expect(gt('a', 'b')).toEqual(false)
  })

  it('should be able to compare dates', () => {
    expect(gt(new Date(), new Date())).toEqual(false)
  })

  it('should throw an error if "a" and "b" have different types', () => {
    expect(() => gt(1 as any, new Date())).toThrow()
  })
})
