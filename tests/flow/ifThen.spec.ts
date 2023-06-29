import { err, ifThen, ok } from 'src/index.js'

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
