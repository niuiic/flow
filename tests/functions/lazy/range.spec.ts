import { range } from 'src/index.js'

describe('range', () => {
  it('should start from 0 if only length is specified', () => {
    const start = range(4).next().value
    expect(start).toEqual(0)
  })

  it('should work if length is less than 0', () => {
    let end
    for (const v of range(-4)) {
      end = v
    }
    expect(end).toEqual(-3)
  })

  it('should throw an error when step is equal to 0', () => {
    expect(() => range(1, 2, 0).next()).toThrow()
  })

  it('should not iterate the end', () => {
    let end
    for (const v of range(1, 4)) {
      end = v
    }
    expect(end).toEqual(3)
  })

  it('should iterate the start', () => {
    const start = range(4, 8).next().value
    expect(start).toEqual(4)
  })

  it('should iterate with the step', () => {
    let count = 0
    for (const _v of range(1, 10, 5)) {
      count++
    }
    expect(count).toEqual(2)
  })
})
