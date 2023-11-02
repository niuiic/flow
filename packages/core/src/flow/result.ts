import { isPromise } from '@/utils'

/**
 * To describe a result of program.
 *
 * @example
 * ```typescript
 * new Result({ data: 1 }).unwrapOr(2) // 1
 * new Result({ err: '' }).unwrapOr(2) // 2
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/result.spec.ts | More examples}
 */
class Result<T> {
  private success: boolean
  private err: string | undefined
  private data: T | undefined

  public constructor(args: { err: string } | { data: T }) {
    if ('err' in args && !('data' in args)) {
      this.err = args.err
      this.success = false
    } else if ('data' in args && !('err' in args)) {
      this.data = args.data
      this.success = true
    } else {
      throw new Error('Wrong arguments')
    }
  }

  /** Return data of result if result is success, or throw an error */
  public unwrap(): T {
    if (this.success) {
      return this.data as T
    }
    throw new Error('Result is failure')
  }

  /** Return data of result if result is success, or return `data` */
  public unwrapOr(data: T) {
    if (this.success) {
      return this.data as T
    }
    return data
  }

  /** Return data of result if result is success, or return the result of `fn` */
  public unwrapOrElse(fn: (err: string) => T): T {
    if (this.success) {
      return this.data as T
    }
    return fn(this.err!)
  }

  /** Return error message if result is failure */
  public error() {
    if (!this.success) {
      return this.err
    }
  }

  /** Return a result whose data is the result of `fn`, if result is success */
  public map<R>(fn: (data: T) => R): Result<R> {
    if (!this.success) {
      return new Result({ err: this.err! })
    }
    return new Result({ data: fn(this.data as T) })
  }

  /** Return a result whose data is the result of `fn`, if result is success, or `data` */
  public mapOr<R>(fn: (data: T) => R, data: R): Result<R> {
    if (!this.success) {
      return new Result({ data })
    }
    return new Result({ data: fn(this.data as T) })
  }

  /** Return a result whose data is the result of `fn`, if result is success, or the result of `fn2` */
  public mapOrElse<R>(fn: (data: T) => R, fn2: (err: string) => R): Result<R> {
    if (!this.success) {
      return new Result({ data: fn2(this.err!) })
    }
    return new Result({ data: fn(this.data as T) })
  }

  /** Return a result with the same data of the original one if result is success or return a result with `err` */
  public mapErr(err: string): Result<T> {
    if (this.success) {
      return new Result({ data: this.data as T })
    } else {
      return new Result({ err })
    }
  }

  /**
   * Wait for `data`
   * - Result<Promise<T>> -> Promise<Result<T>>
   * - Result<T> -> Promise<Result<T>>
   */
  public async wait(): Promise<Result<Awaited<T>>> {
    if (this.success) {
      if (isPromise(this.data)) {
        const data = await this.data
        return new Result<Awaited<T>>({ data: data as Awaited<T> })
      }
      return new Result<Awaited<T>>({ data: this.data as Awaited<T> })
    } else {
      return new Result<Awaited<T>>({ err: this.err! })
    }
  }

  /** Check if result is success */
  public isSuccess() {
    return this.success
  }

  /** Check if result is failure */
  public isError() {
    return !this.success
  }

  // Check if data is a promise
  public isPromise() {
    return this.success && isPromise(this.data)
  }
}

/** Generate a fail result */
function err<T>(err: string): Result<T> {
  return new Result<T>({
    err
  })
}

/** Generate a success result */
function ok<T = undefined>(data?: T): Result<T> {
  return new Result<T>({
    data: data as any
  })
}

export { Result, err, ok }
