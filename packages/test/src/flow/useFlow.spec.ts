import { expectType } from '#/utils'
import type { Result } from 'fx-flow'
import { andThen, ok, useFlow } from 'fx-flow'

expectType<(initialValue: Result<number>) => Result<number>>(useFlow(andThen<number, Result<number>>(() => ok(1))))

describe('useFlow', () => {
  it('should return a function', () => {
    expect(typeof useFlow(andThen<number, Result<number>>(() => ok(1)))).toEqual('function')
  })

  it('should work as a "flow" wrapper', () => {
    expect(useFlow(andThen<number, Result<number>>(() => ok(1)))(ok(2)).unwrap()).toEqual(1)
  })
})
