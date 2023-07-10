import { andThen, flow, log, ok } from 'src/index.js'

describe('log', () => {
  it('should return the same result as the previous step', () => {
    flow(
      ok(1),
      log('INFO'),
      andThen((data) => {
        expect(data).toEqual(1)
        return ok()
      })
    )
  })

  it('should return a function if only "method" passed', () => {
    const res = log('ERROR')
    expect(typeof res).toEqual('function')
  })
})
