import { andThen, delay, errThen, flow, ok } from 'src/index.js'

describe('flow', () => {
  it('should be able to compose steps', () => {
    flow(
      ok(''),
      andThen((data) => ok(data + 'data')),
      errThen(console.log)
    )
  })

  it('should be able to catch error', () => {
    flow(
      ok(''),
      andThen((data) => {
        throw 'error'
        return ok(data + 'data')
      }),
      errThen((e) => {
        expect(e).toEqual('error')
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
        expect(fn).toBeCalled()
        return ok(data + 'data')
      }),
      errThen(console.log)
    )
  })
})
