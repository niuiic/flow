import { expectType } from '#/utils'
import type { MaybePromise, Result } from 'fx-flow'
import { andThen, anyway, delay, err, errThen, errThenEnd, flow, log, ok } from 'fx-flow'

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
expectType<MaybePromise<Result<number>>>(
  flow(
    ok(1),
    andThen(() => ok(1).wait())
  )
)
expectType<Promise<Result<number>>>(
  flow(
    Promise.resolve(ok(1)),
    andThen(() => ok(1).wait())
  )
)
expectType<MaybePromise<Result<Promise<number>>>>(
  flow(
    ok(Promise.resolve(1)),
    errThenEnd(() => {})
  )
)

describe('flow', () => {
  it('should be able to compose steps', () => {
    flow(
      ok(''),
      andThen((data) => ok(data + 'data')),
      errThen(console.log)
    )
  })

  it('should be able to catch error', () => {
    const fn = jest.fn()
    flow(
      ok(''),
      andThen(() => {
        return ok(
          (async () => {
            throw 'error'
          })()
        )
      }),
      errThen((e) => {
        fn()
        expect(e).toEqual('error')
      }),
      andThen(() => {
        expect(1).toEqual(2)
        return ok('')
      }),
      anyway(() => {
        expect(fn).toHaveBeenCalled()
        return ok()
      })
    )
  })

  it('should wait for async functions', () => {
    const fn = jest.fn()
    flow(
      delay(100, ok('')),
      andThen(async (data) => {
        fn()
        return ok(data + 'data')
      }),
      andThen((data) => {
        expect(fn).toHaveBeenCalled()
        return ok(data + 'data')
      }),
      errThen(console.log)
    )
  })

  it('log should work', () => {
    flow(
      ok(1),
      log('INFO'),
      andThen(() => err(''))
    )

    flow(
      err(''),
      log('ERROR'),
      andThen((x) => ok(x))
    )
  })
})
