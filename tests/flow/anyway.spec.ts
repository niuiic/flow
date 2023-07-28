import { anyway, err, flow, ok } from 'src/index.js'

describe('anyway', () => {
  it('should call "fn" if "result" is success', () => {
    const fn = jest.fn()
    anyway(() => {
      fn()
      return ok()
    }, ok(1))
    expect(fn).toBeCalled()
  })

  it('should call "fn" if "result" is failure', () => {
    const fn = jest.fn()
    anyway(fn, err(''))
    expect(fn).toBeCalled()
  })

  it('should return the result of "fn"', () => {
    const result = ok(1)
    const fn = () => result
    const result2 = ok('')
    expect(anyway(fn, result2)).toEqual(result)
    const result3 = err('')
    expect(anyway(fn, result3)).toEqual(result)
  })

  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof anyway(fn)).toEqual('function')
  })

  it('should work for async functions', async () => {
    expect(
      await flow(
        Promise.resolve(ok('')),
        anyway(async () => {
          return ok(2)
        })
      )
    ).toEqual(ok(2))
  })
})
