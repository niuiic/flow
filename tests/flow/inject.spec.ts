import { err, inject, ok } from 'src/index.js'

describe('inject', () => {
  it('should return a function if "result" is not passwd', () => {
    const fn = () => ok(1)
    expect(typeof inject(fn)).toEqual('function')
  })

  it('should return "result"', () => {
    const result = err('')
    expect(inject(() => {}, result)).toEqual(result)
  })

  it('should call "fn"', () => {
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    inject(fn1, ok(1))
    inject(fn2, err(''))
    expect(fn1).toBeCalled()
    expect(fn2).toBeCalled()
  })
})
