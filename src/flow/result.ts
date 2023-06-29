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
    }
    throw new Error('Wrong arguments')
  }

  /** Return data of result if result is success, or throw an error */
  public unwrap(): T {
    if (this.success) {
      return this.data!
    }
    throw new Error('Result is failure')
  }

  /** Return data of result if result is success, or return `data` */
  public unwrapOr(data: T) {
    if (this.success) {
      return this.data!
    }
    return data
  }

  /** Return data of result if result is success, or return the result of `fn` */
  public unwrapOrElse(fn: () => T): T {
    if (this.success) {
      return this.data!
    }
    return fn()
  }

  /** Return error message if result is failure */
  public error() {
    if (!this.success) {
      return this.err
    }
  }

  /** Return the result of `fn`, if result is success */
  public map<R>(fn: (data: T) => R): Result<R> {
    if (!this.success) {
      return new Result({ err: this.err! })
    }
    return new Result({ data: fn(this.data!) })
  }

  /** Return the result of `fn`, if result is success, or `data` */
  public mapOr<R>(fn: (data: T) => R, data: R): Result<R> {
    if (!this.success) {
      return new Result({ data })
    }
    return new Result({ data: fn(this.data!) })
  }

  /** Return the result of `fn`, if result is success, or the result of `fn2` */
  public mapOrElse<R>(fn: (data: T) => R, fn2: () => R): Result<R> {
    if (!this.success) {
      return new Result({ data: fn2() })
    }
    return new Result({ data: fn(this.data!) })
  }

  /** Check if result is success */
  public isSuccess() {
    return this.success
  }

  /** Check if result is failure */
  public isError() {
    return !this.success
  }
}

function err<T>(err: string): Result<T> {
  return new Result<T>({
    err
  })
}

function ok<T>(data: T): Result<T> {
  return new Result<T>({
    data
  })
}

export { Result, err, ok }
