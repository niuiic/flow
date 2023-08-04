import { AnyFunction } from 'src/types/index.js'

/**
 * Apply function `fn` to the arguments list `args`.
 *
 * @example
 * ```typescript
 * apply(Math.max, [1, 2, 3, 4, 5]); // 5
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/apply.spec.ts | More examples}
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
