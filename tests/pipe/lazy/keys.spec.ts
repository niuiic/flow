import { keys } from 'src/index.js'

describe('keys', () => {
  it('should return an iterator of the own enumerable property names of object', () => {
    const obj = {
      a: 1,
      b: '',
      c: true
    }
    const iterator = keys(obj)
    expect(iterator.next().value).toEqual('a')
    expect(iterator.next().value).toEqual('b')
    expect(iterator.next().value).toEqual('c')
  })
})
