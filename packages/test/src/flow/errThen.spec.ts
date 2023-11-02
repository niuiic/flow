import { expectType } from '#/utils'
import type { MaybePromise, Result } from 'fx-flow'
import { err, errThen, ok } from 'fx-flow'

expectType<(result: Result<unknown>) => Result<unknown>>(errThen(() => {}))
expectType<Result<number>>(errThen(() => {}, ok(1)))
expectType<Result<unknown>>(errThen(() => {}, err('')))
expectType<MaybePromise<Result<number>>>(errThen(async () => ok(1), ok(1)))

describe('errThen', () => {
  it('should not call "fn" if "result" is success', () => {
    const fn = jest.fn()
    errThen(fn, ok(1))
    expect(fn).not.toHaveBeenCalled()
  })

  it('should call "fn" if "result" is failure', () => {
    const fn = jest.fn()
    errThen(fn, err(''))
    expect(fn).toHaveBeenCalled()
  })

  it('should return "result"', () => {
    const fn = () => ok(1)
    const result1 = ok('')
    expect(errThen(fn, result1)).toEqual(result1)
    const result2 = err('')
    expect(errThen(fn, result2)).toEqual(result2)
  })

  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof errThen(fn)).toEqual('function')
  })
})
