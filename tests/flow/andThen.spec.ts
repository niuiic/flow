import { andThen, err, ok } from 'src/index.js'

describe('andThen', () => {
  it('should call "fn" if "result" is success', () => {
    const fn = jest.fn()
    andThen(fn, ok(1))
    expect(fn).toBeCalled()
  })

  it('should not call "fn" if "result" is failure', () => {
    const fn = jest.fn()
    andThen(fn, err(''))
    expect(fn).not.toBeCalled()
  })

  it('should return the result of "fn" if "result" is success, or return "result"', () => {
    const fn = () => ok(1)
    expect(andThen(fn, ok(''))).toEqual(ok(1))
    const result = err('')
    expect(andThen(fn, result)).toEqual(result)
  })

  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof andThen(fn)).toEqual('function')
  })
})
