import { isPromise, toStr } from '@/utils'

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
  private ok: boolean
  private err: string | undefined
  private data: T | undefined

  public constructor(args: { err: string } | { data: T }) {
    if ('err' in args && !('data' in args)) {
      this.err = args.err
      this.ok = false
    } else if ('data' in args && !('err' in args)) {
      this.data = args.data
      this.ok = true
    } else {
      throw new Error('Result constructor: arguments are wrong')
    }
  }

  /** Return data of result if result is success, or throw an error */
  public unwrap(): T {
    if (this.ok) {
      return this.data as T
    }
    throw new Error(this.err)
  }

  /** Return data of result if result is success, or return `data` */
  public unwrapOr(data: T) {
    if (this.ok) {
      return this.data as T
    }
    return data
  }

  /** Return data of result if result is success, or return the result of `fn` */
  public unwrapOrElse(fn: (err: string) => T): T {
    if (this.ok) {
      return this.data as T
    }
    return fn(this.err!)
  }

  /** Return error message if result is failure */
  public error() {
    if (!this.ok) {
      return this.err
    }
  }

  /** Return a result whose data is the result of `fn`, if result is success */
  public map<R>(fn: (data: T) => R): Result<R> {
    if (!this.ok) {
      return new Result({ err: this.err! })
    }
    return new Result({ data: fn(this.data as T) })
  }

  /** Return a result whose data is the result of `fn`, if result is success, or `data` */
  public mapOr<R>(fn: (data: T) => R, data: R): Result<R> {
    if (!this.ok) {
      return new Result({ data })
    }
    return new Result({ data: fn(this.data as T) })
  }

  /** Return a result whose data is the result of `fn`, if result is success, or the result of `fn2` */
  public mapOrElse<R>(fn: (data: T) => R, fn2: (err: string) => R): Result<R> {
    if (!this.ok) {
      return new Result({ data: fn2(this.err!) })
    }
    return new Result({ data: fn(this.data as T) })
  }

  /** Return a result with the same data of the original one if result is success or return a result with `err` */
  public mapErr(err: string): Result<T> {
    if (this.ok) {
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
    if (!this.ok) {
      return new Result<Awaited<T>>({ err: this.err! })
    }
    if (isPromise(this.data)) {
      return this.data
        .then((x) => new Result<Awaited<T>>({ data: x as Awaited<T> }))
        .catch((x) => new Result<Awaited<T>>({ err: toStr(x) }))
    }
    return new Result<Awaited<T>>({ data: this.data as Awaited<T> })
  }

  /** Check if result is success */
  public isOk() {
    return this.ok
  }

  /** Check if result is failure */
  public isErr() {
    return !this.ok
  }

  // Check if data is a promise
  public isPromise() {
    return this.ok && isPromise(this.data)
  }
}

/** Generate a fail result */
function err<T>(err: string): Result<T> {
  return new Result<T>({
    err
  })
}

/** Generate a success result */
function ok(data?: undefined): Result<undefined>
function ok<T>(data: T): Result<T>
function ok<T = undefined>(data: T): Result<T> {
  return new Result<T>({
    data
  })
}

export { Result, err, ok }
