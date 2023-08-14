import { MaybePromise, Result, err, expectType, ifThen, ok } from 'src/index.js'

expectType<(result: Result<number>) => Result<number>>(
  ifThen(
    (args): args is 1 => args === 1,
    () => ok(1)
  )
)
expectType<(result: Result<number>) => Result<number>>(
  ifThen(
    (args) => args === 1,
    () => ok(1)
  )
)
expectType<Result<number>>(
  ifThen(
    () => true,
    () => ok(1),
    ok(1)
  )
)
expectType<Result<number>>(
  ifThen(
    () => false,
    () => ok(1),
    err('')
  )
)
expectType<MaybePromise<Result<number>>>(
  ifThen(
    () => false,
    async () => ok(1),
    ok(1)
  )
)

describe('ifThen', () => {
  it('only call "fn" if "result" is success and "condition" is satisfied', () => {
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    const fn3 = jest.fn()
    ifThen((data) => data === 1, fn1, ok(1))
    ifThen(() => false, fn1, ok(1))
    ifThen(() => true, fn1, err(''))
    expect(fn1).toBeCalled()
    expect(fn2).not.toBeCalled()
    expect(fn3).not.toBeCalled()
  })

  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof ifThen(() => true, fn)).toEqual('function')
  })
})
