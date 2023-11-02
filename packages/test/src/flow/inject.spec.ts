import { expectType } from '#/utils'
import type { MaybePromise, Result } from 'fx-flow'
import { err, flow, inject, ok } from 'fx-flow'

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
    expect(fn1).toHaveBeenCalled()
    expect(fn2).toHaveBeenCalled()
  })

  it('should work for async functions', async () => {
    const fn = jest.fn()
    flow(
      Promise.resolve(ok(1)),
      inject(async () => fn())
    ).then(() => {
      expect(fn).toHaveBeenCalled()
    })
  })
})
