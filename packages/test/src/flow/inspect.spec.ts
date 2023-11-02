import { expectType } from '#/utils'
import type { MaybePromise, Result } from 'fx-flow'
import { err, flow, inspect, ok } from 'fx-flow'

expectType<Result<number>>(
  flow(
    ok(1),
    inspect(() => {})
  )
)
expectType<MaybePromise<Result<number>>>(
  flow(
    ok(1),
    inspect(async () => {})
  )
)

describe('inspect', () => {
  it('should call "fn"', () => {
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    inspect(fn1, ok(1))
    inspect(fn2, err(''))
    expect(fn1).toHaveBeenCalled()
    expect(fn2).toHaveBeenCalled()
  })

  it('should return "result"', () => {
    const result = err('')
    expect(inspect(() => {}, result)).toEqual(result)
  })

  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof inspect(fn)).toEqual('function')
  })
})
