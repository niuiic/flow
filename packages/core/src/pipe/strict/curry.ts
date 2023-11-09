import type { SingleArgFunction } from '@/types'

/**
 * Curry for single arg function
 *
 * @example
 * ```typescript
 * const add = (args: { a: number; b: number }) => args.a + args.b
 * const curriedAdd = curry(add, { a: 1 })
 * console.log(curriedAdd({ b: 2 }) // 3
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/curry.spec.ts | More examples}
 */
export function curry<A extends SingleArgFunction, B extends Partial<Parameters<A>[0]>>(
  fn: A,
  args: B
): (args: Omit<Parameters<A>[0], keyof B>) => ReturnType<A> {
  return (newArgs) => fn({ ...newArgs, ...args })
}
