import { expectType } from '#/utils'
import type { MaybePromise, Result } from 'fx-flow'
import { andThen, err, flow, ok } from 'fx-flow'

expectType<(result: Result<unknown>) => Result<number>>(andThen(() => ok(1)))
expectType<Result<number>>(andThen(() => ok(1), ok(1)))
expectType<Result<number>>(andThen(() => ok(1), err('')))
expectType<MaybePromise<Result<number>>>(andThen(async () => ok(1), ok(1)))
expectType<MaybePromise<Result<number>>>(
  flow(
    ok(1),
    andThen(() => ok(Promise.resolve(1)))
  )
)

describe('andThen', () => {
  it('should call "fn" if "result" is success', () => {
    const fn = jest.fn()
    andThen(() => {
      fn()
      return ok()
    }, ok(1))
    expect(fn).toHaveBeenCalled()
  })

  it('should not call "fn" if "result" is failure', () => {
    const fn = jest.fn()
    andThen(fn, err(''))
    expect(fn).not.toHaveBeenCalled()
  })

  it('should return the result of "fn" if "result" is success, or return "result"', () => {
    const fn = () => ok(1)
    expect(andThen(fn, ok(''))).toEqual(ok(1))
    const result = err('')
    expect(andThen(fn, result)).toEqual(result)
  })

  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof andThen(fn)).toEqual('function')
  })

  it('should work for async functions', async () => {
    expect(
      await flow(
        ok(1),
        andThen(async () => ok(2))
      )
    ).toEqual(ok(2))
  })
})
