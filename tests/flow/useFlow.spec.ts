import { Result, andThen, expectType, ok, useFlow } from 'src/index.js'

expectType<(initialValue: Result<number>) => Result<number>>(useFlow(andThen<number, Result<number>>(() => ok(1))))

describe('useFlow', () => {
  it('should return a function', () => {
    expect(typeof useFlow(andThen<number, Result<number>>(() => ok(1)))).toEqual('function')
  })

  it('should work as a "flow" wrapper', () => {
    expect(useFlow(andThen<number, Result<number>>(() => ok(1)))(ok(2)).unwrap()).toEqual(1)
  })
})
