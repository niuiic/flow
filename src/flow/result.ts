import { isPromise } from 'src/functions/utils.js'
import { FixedPromise } from 'src/types/index.js'

class Result<T> {
  private success: boolean
  private err: string | undefined
  private data: T | undefined

  public constructor(args: { err: string } | { data: T }) {
    if ('err' in args) {
      this.err = args.err
      this.success = false
    } else if ('data' in args) {
      this.data = args.data
      this.success = true
    }
    throw new Error('Error occurs during constructing, wrong arguments')
  }

  /** Return data if result is success, or throw an error */
  public unwrap(): T {
    if (this.success) {
      return this.data!
    }
    throw new Error('Result is failure')
  }

  /** Return data if result is success, or return `data` */
  public unwrapOr(data: T) {
    if (this.success) {
      return this.data!
    }
    return data
  }

  /** Return data if result is success, or return the result of `fn` */
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

  public inspect(fn: (args: { success: boolean; data?: T; err?: string }) => unknown): Result<T> {
    fn({
      success: this.success,
      data: this.data,
      err: this.err
    })

    if (this.success) {
      return new Result({ data: this.data! })
    } else {
      return new Result({ err: this.err! })
    }
  }

  /** Call `fn` if result is success */
  public andThen<R>(fn: (data: T) => Result<R>): Result<R> {
    if (!this.success) {
      return new Result({ err: this.err! })
    }
    const res = fn(this.data!)
    if (isPromise(res)) {
      throw new Error('Result of "fn" should not be a promise')
    }
    return res
  }

  /** Call async function `fn` if result is success */
  public andThenAsync<R>(fn: (data: T) => FixedPromise<Result<R>>): FixedPromise<Result<R>> {
    if (!this.success) {
      return Promise.resolve(new Result({ err: this.err! }))
    }
    const res = fn(this.data!)
    if (isPromise(res)) {
      return res
    }
    return Promise.resolve(res)
  }

  /** Call `fn` if result is failure */
  public errThen(fn: (err: string) => unknown) {
    if (!this.success) {
      const res = fn(this.err!)
      if (isPromise(res)) {
        throw new Error('Result of "fn" should not be a promise')
      }
    }
    return new Result({
      err: this.err!
    })
  }

  /** Call async function `fn` if result is failure */
  public async errThenAsync(fn: (err: string) => Promise<unknown>) {
    if (!this.success) {
      await fn(this.err!)
    }
    return new Result({
      err: this.err!
    })
  }

  /** Call `fn` anyway */
  public anyway<R>(fn: (args: { success: true; data: T } | { success: false; err?: string }) => Result<R>): Result<R> {
    let res
    if (this.success) {
      res = fn({
        success: this.success,
        data: this.data!
      })
    } else {
      res = fn({
        success: this.success,
        err: this.err!
      })
    }
    if (isPromise(res)) {
      throw new Error('Result of "fn" should not be a promise')
    }
    return res
  }

  /** Call async function `fn` anyway */
  public anywayAsync<R>(
    fn: (args: { success: true; data: T } | { success: false; err?: string }) => Promise<Result<R>>
  ): Promise<Result<R>> {
    let res
    if (this.success) {
      res = fn({
        success: this.success,
        data: this.data!
      })
    } else {
      res = fn({
        success: this.success,
        err: this.err!
      })
    }
    if (isPromise(res)) {
      return res
    }
    return Promise.resolve(res)
  }

  /** Call `fn` if result is success and `condition` is satisfied */
  public ifThen(condition: (data: T) => boolean, fn: (data: T) => unknown): Result<T> {
    if (!this.success) {
      return new Result({ err: this.err! })
    }
    if (condition(this.data!)) {
      const res = fn(this.data!)
      if (isPromise(res)) {
        throw new Error('Result of "fn" should not be a promise')
      }
    }
    return new Result({
      data: this.data!
    })
  }

  /** Call async function `fn` if result is success and `condition` is satisfied */
  public async ifThenAsync(condition: (data: T) => boolean, fn: (data: T) => unknown): Promise<Result<T>> {
    if (!this.success) {
      return new Result({ err: this.err! })
    }
    if (condition(this.data!)) {
      await fn(this.data!)
    }
    return new Result({
      data: this.data!
    })
  }

  /** Replace `data` of result with the result of `fn`, if result is success */
  public map<R>(fn: (data: T) => R): Result<R> {
    if (!this.success) {
      return new Result({ err: this.err! })
    }
    return new Result({ data: fn(this.data!) })
  }

  /** Replace `data` of result with the result of `fn`, if result is success, or `data` */
  public mapOr<R>(fn: (data: T) => R, data: R): Result<R> {
    if (!this.success) {
      return new Result({ data })
    }
    return new Result({ data: fn(this.data!) })
  }

  /** Replace `data` of result with the result of `fn`, if result is success, or the result of `fn2` */
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

  /** Throw error with `err` if result is failure */
  public expect(err: string): Result<T> {
    if (!this.success) {
      throw new Error(err)
    }
    return new Result({ data: this.data! })
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
