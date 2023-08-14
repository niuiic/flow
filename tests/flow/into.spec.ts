import { MaybePromise, Result, err, expectType, flow, into, ok } from 'src/index.js'

expectType<Result<string>>(
  flow(
    ok(1),
    into(() => '')
  )
)
expectType<MaybePromise<Result<string>>>(
  flow(
    ok(1),
    into(async () => '')
  )
)

describe('into', () => {
  it('should convert the data of the "result" if it is success', () => {
    expect(into((data: number) => data + 1, ok(1))).toEqual(ok(2))
  })

  it('should make no change if "result" is failure', () => {
    const res = err<number>('')
    expect(into((data: number) => data + 1, res)).toEqual(res)
  })

  it('should return a function if "result" is not passed', () => {
    expect(typeof into((data: number) => data + 1)).toEqual('function')
  })
})
