import { gt } from 'src/index.js'

describe('gt', () => {
  it('should be able to compare numbers', () => {
    expect(gt(1, 2)).toEqual(false)
  })

  it('should be able to compare strings', () => {
    expect(gt('a', 'b')).toEqual(false)
  })

  it('should be able to compare dates', () => {
    expect(gt(new Date(), new Date())).toEqual(false)
  })

  it('should return a function if only one parameter provided', () => {
    expect(typeof gt(1)).toEqual('function')
  })
})
