import { AnyFunction } from '../../types/index.js'

/**
 * Apply function `fn` to the arguments list `args`.
 *
 * @example
 * ```ts
 * apply(Math.max, [1, 2, 3, 4, 5]); // 5
 * ```
 *
 * {@link #Repo/tests/functions/strict/apply.spec.ts | More examples}
 */
function apply<A extends AnyFunction, P extends Parameters<A>>(fn: A, args: P): ReturnType<typeof fn>

function apply<A extends AnyFunction, P extends Parameters<A>>(fn: A): (args: P) => ReturnType<typeof fn>

function apply<A extends AnyFunction, P extends Parameters<A>>(
  fn: A,
  args?: P
): ReturnType<typeof fn> | ((args: P) => ReturnType<typeof fn>) {
  if (args === undefined) {
    return (args) => fn(...args)
  } else {
    return fn(...args)
  }
}

export { apply }
