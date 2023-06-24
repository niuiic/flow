import { concurrent, delay, toAsync } from 'src/index.js'

describe('concurrent', () => {
  it('should be consumed "AsyncIterable" concurrently', async () => {
    const fn = jest.fn()
    setTimeout(fn, 200)
    const res = concurrent(
      2,
      toAsync(
        (function* () {
          yield delay(100, 1)
          yield delay(100, 2)
          yield delay(100, 3)
          yield delay(100, 4)
        })()
      )
    )

    const arr = []
    for await (const item of res) {
      arr.push(item)
    }

    expect(fn).toBeCalled()
    expect(arr).toEqual([1, 2, 3, 4])
  }, 250)
})
