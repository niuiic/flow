import { apply } from 'src/index.js'

describe('apply', () => {
  it('should return a function if "args" is not passed', () => {
    expect(typeof apply(console.log)).toEqual('function')
  })

  it('should apply "fn" to "args"', () => {
    expect(apply(Math.max, [1, 2, 3, 4, 5])).toEqual(5)
  })
})
