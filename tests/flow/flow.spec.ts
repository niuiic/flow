import { andThen, anyway, delay, errThen, flow, ok } from 'src/index.js'

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
            return ''
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
        expect(fn).toBeCalled()
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
        expect(fn).toBeCalled()
        return ok(data + 'data')
      }),
      errThen(console.log)
    )
  })
})
