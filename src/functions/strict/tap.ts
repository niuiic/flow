import { FixedPromise } from 'src/types/basic.js'
import { isPromise } from 'util/types'

/**
 * Used to invoke an interceptor and return the original value
 *
 * @example
 * ```ts
 * tap(console.log, [1, 2, 3])
 * // log [1, 2, 3]
 * // return [1, 2, 3]
 * ```
 *
 * {@link #Repo/tests/functions/strict/tap.spec.ts | More examples}
 */
function tap<A, R>(fn: (args: Awaited<A>) => R, args: A): A extends Promise<unknown> ? FixedPromise<A> : A

function tap<A, R>(fn: (args: Awaited<A>) => R): (args: A) => A extends Promise<unknown> ? FixedPromise<A> : A

function tap<A, R>(
  fn: (args: Awaited<A>) => R,
  args?: A
): FixedPromise<A> | A | ((args: A) => A extends Promise<unknown> ? FixedPromise<A> : A) {
  if (args === undefined) {
    return (v: A) => tap(fn, v)
  }

  const res = isPromise(args) ? args.then(fn as any) : fn(args as any)

  return isPromise(res) ? (res.then(() => args) as FixedPromise<A>) : args
}

export { tap }
