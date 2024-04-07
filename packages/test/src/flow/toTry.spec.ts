import { expectType } from '#/utils'
import type { MaybePromise, Result } from 'fx-flow'
import { toTry } from 'fx-flow'

expectType<() => Promise<Result<number>>>(toTry(() => Promise.resolve(1)))
expectType<() => Promise<Result<number>>>(toTry(() => Promise.reject<number>(new Error())))
expectType<() => Result<number>>(toTry(() => 1))
expectType<() => MaybePromise<Result<number>>>(
  toTry(() => {
    if (new Date().getTime() > 10086) {
      return Promise.resolve(1)
    }
    return 1
  })
)

describe('toTry', () => {
  it('should convert `fn` to another function', () => {
    expect(typeof toTry(() => 1)).toBe('function')
  })

  it('should catch error', () => {
    const fn = () => {
      const obj: any = {}
      return obj.a.b as number
    }
    const res = toTry(fn)()
    expect(res.isErr()).toBe(true)
  })

  it('should work for async job', () => {
    const fn = async (obj: object) => {
      return (obj as any).a.b as number
    }
    const res = toTry(fn)({})
    res.then((x) => expect(x.isErr()).toBe(true))

    const res2 = toTry(
      () =>
        new Promise((_, reject) => {
          reject(new Error())
        })
    )()
    res2.then((x) => expect(x.isErr()).toBe(true))
  })
})
