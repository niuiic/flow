import { expectType } from '#/utils'
import type { Result } from 'fx-flow'
import { andThen, err, flow, log, ok } from 'fx-flow'

expectType<Result<number>>(flow(ok(1), log('INFO')))
expectType<Result<number>>(flow(err<number>(''), log('ERROR')))

describe('log', () => {
  it('should return the same result as the previous step', () => {
    flow(
      ok(1),
      log('ERROR'),
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
