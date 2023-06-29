import { err, ok, expect as testExpect } from 'src/index.js'

describe('expect', () => {
  it('should throw an error if "result" is failure', () => {
    expect(() => testExpect('error occurs', err(''))).toThrow()
  })

  it('should return "result" if "result" is success', () => {
    const result = ok(1)
    expect(testExpect('error occurs', result)).toEqual(result)
  })

  it('should return a function if "result" is not passwd', () => {
    expect(typeof testExpect('error occurs')).toEqual('function')
  })
})
