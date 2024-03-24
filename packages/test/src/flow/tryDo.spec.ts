import { Result, tryDo } from 'fx-flow'

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
