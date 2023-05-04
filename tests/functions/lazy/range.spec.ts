import { range } from 'src/index.js'

describe('range', () => {
  it('should start from 0 if the start is not specified', () => {
    const start = range(4).next().value
    expect(start).toEqual(0)
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
