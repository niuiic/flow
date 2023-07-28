import { err, mapErr, ok } from 'src/index.js'

describe('mapErr', () => {
  it('should convert the error of the "result" if it is failure', () => {
    expect(mapErr((err) => err + 'error', err('')).error()!).toEqual('error')
  })

  it('should make no change if "result" is failure', () => {
    const res = ok(1)
    expect(mapErr((err) => err + 'error', res)).toEqual(res)
  })

  it('should return a function if "result" is not passed', () => {
    expect(typeof mapErr(() => 'error')).toEqual('function')
  })

  it('should work for async functions', async () => {
    expect(await mapErr(async () => 'error', err(''))).toEqual(err('error'))
  })
})
