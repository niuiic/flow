import { expectType } from '#/utils'
import type { MaybePromise } from 'fx-flow'
import { Result, tryDo } from 'fx-flow'

expectType<Promise<Result<number>>>(tryDo(() => Promise.resolve(1)))
expectType<Promise<Result<number>>>(tryDo(() => Promise.reject<number>(new Error())))
expectType<Result<number>>(tryDo(() => 1))
expectType<MaybePromise<Result<number>>>(
  tryDo(() => {
    if (new Date().getTime() > 10086) {
      return Promise.resolve(1)
    }
    return 1
  })
)

describe('tryDo', () => {
  it('should convert the result of `fn` to `Result`', () => {
    const res = tryDo(() => 1)
    expect(res instanceof Result).toBe(true)
  })

  it('should catch error', () => {
    const res = tryDo(() => {
      const obj: any = {}
      return obj.a.b as number
    })
    expect(res.isErr()).toBe(true)
  })

  it('should work for async job', () => {
    const res = tryDo(async () => {
      const obj: any = {}
      return obj.a.b as number
    })
    res.then((x) => expect(x.isErr()).toBe(true))

    const res2 = tryDo(
      () =>
        new Promise((_, reject) => {
          reject(new Error())
        })
    )
    res2.then((x) => expect(x.isErr()).toBe(true))
  })
})
