import { expectType } from '#/utils'
import type { Result } from 'fx-flow'
import { err, flow, mapErr, ok } from 'fx-flow'

expectType<(result: Result<unknown>) => Result<unknown>>(mapErr(() => 'INFO'))
expectType<Result<number>>(
  flow(
    ok(1),
    mapErr(() => 'INFO')
  )
)
expectType<Result<number>>(
  flow(
    err<number>(''),
    mapErr(() => 'ERROR')
  )
)

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
