import { values } from 'src/index.js'

describe('values', () => {
  it('should return an iterator of the own enumerable property names of object', () => {
    const obj = {
      a: 1,
      b: '',
      c: true
    }
    const iterator = values(obj)
    expect(iterator.next().value).toEqual(1)
    expect(iterator.next().value).toEqual('')
    expect(iterator.next().value).toEqual(true)
  })
})
