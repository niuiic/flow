import { identity } from 'src/index.js'

describe('identity', () => {
  it('should return "args"', () => {
    const args = [1, 2, 3, 4]
    expect(identity(args)).toEqual(args)
  })
})
