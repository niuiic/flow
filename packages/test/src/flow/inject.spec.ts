import { expectType } from '#/utils'
import type { Result } from 'fx-flow'
import { andThen, err, flow, inject, ok } from 'fx-flow'

expectType<Result<number>>(
  flow(
    ok(1),
    inject(() => {})
  )
)
expectType<Promise<Result<number>>>(
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
    const result = err('error')
    expect(inject(() => {}, result)).toEqual(result)
  })

  it('should call "fn" whether the "result" is successful or not', () => {
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    inject(fn1, ok(1))
    inject(fn2, err(''))
    expect(fn1).toHaveBeenCalled()
    expect(fn2).toHaveBeenCalled()
  })

  it('should be completely executed before the next step', async () => {
    const fn = jest.fn()
    flow(
      Promise.resolve(ok(1)),
      inject(() => Promise.resolve(1).then(fn)),
      andThen(() => {
        expect(fn).toHaveBeenCalled()
        return ok()
      })
    )
  })

  it('should catch error and do not affect the following steps', () => {
    const fn = jest.fn()

    flow(
      ok(1),
      inject(() => {
        throw new Error()
      }),
      andThen(() => {
        fn()
        return ok()
      }),
      inject(() => {
        return new Promise((_, reject) => {
          reject(new Error())
        })
      }),
      andThen(() => {
        expect(fn).toHaveBeenCalled()
        return ok()
      })
    )
  })
})
