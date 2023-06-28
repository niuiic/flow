import { Result } from './result.js'

function flow<T>(data: T): Result<T> {
  return new Result({
    data
  })
}

export { flow }
