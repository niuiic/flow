import { MaybePromise, Result, andThen, anyway, err, errThenEnd, expectType, flow, ok } from 'src/index.js'

expectType<Result<number>>(
  flow(
    err<number>(''),
    errThenEnd(() => {})
  )
)
expectType<Result<number>>(
  flow(
    ok(1),
    errThenEnd(() => {})
  )
)
expectType<MaybePromise<Result<number>>>(
  flow(
    ok(1),
    errThenEnd(async () => {})
  )
)

describe('errThenEnd', () => {
  it('should not call "fn" if "result" is success', () => {
    const fn = jest.fn()
    flow(ok(1), errThenEnd(fn))
    expect(fn).not.toBeCalled()
  })

  it('should call "fn" if "result" is failure', () => {
    const fn = jest.fn()
    try {
      flow(err(''), errThenEnd(fn))
    } catch {
      expect(fn).toBeCalled()
    }
  })

  it('should exit flow', async () => {
    const fn = jest.fn()
    const fn2 = jest.fn()

    const error = (
      await flow(
        ok(1),
        andThen(() => err('error')),
        errThenEnd(async () => {
          fn2()
        }),
        anyway(() => {
          fn()
          return ok(3)
        })
      )
    ).error()
    expect(fn).not.toBeCalled()
    expect(fn2).toBeCalled()
    expect(error).toEqual('error')
  })

  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof errThenEnd(fn)).toEqual('function')
  })
})
