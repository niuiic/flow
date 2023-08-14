import { MaybePromise, Result, err, expectType, flow, inject, ok } from 'src/index.js'

expectType<Result<number>>(
  flow(
    ok(1),
    inject(() => {})
  )
)
expectType<MaybePromise<Result<number>>>(
  flow(
    ok(1),
    inject(async () => {})
  )
)

describe('inject', () => {
  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof inject(fn)).toEqual('function')
  })

  it('should return "result"', () => {
    const result = err('')
    expect(inject(() => {}, result)).toEqual(result)
  })

  it('should call "fn"', () => {
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    inject(fn1, ok(1))
    inject(fn2, err(''))
    expect(fn1).toBeCalled()
    expect(fn2).toBeCalled()
  })

  it('should work for async functions', async () => {
    const fn = jest.fn()
    flow(
      Promise.resolve(ok(1)),
      inject(async () => fn())
    ).then(() => {
      expect(fn).toBeCalled()
    })
  })
})
