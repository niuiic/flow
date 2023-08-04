import { IterableReturnValue, UniversalIterable } from 'src/types/index.js'
import { IterableTypeException, isAsyncIterable, isIterable } from 'src/utils.js'
import { some } from './some.js'

/**
 * Check whether `value` is in `iterable`.
 *
 * @example
 * ```typescript
 * includes('c', 'abcd'); // true
 * includes('e', 'abcd'); // false
 * includes(3, [1, 2, 3, 4]); // true
 * includes(5, [1, 2, 3, 4]); // false
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/strict/includes.spec.ts | More examples}
 */
function includes<A extends readonly []>(value: unknown, iterable: A): false

function includes<A, B extends A>(value: A, iterable: Iterable<B>): value is B

function includes<A>(value: unknown, iterable: Iterable<A>): boolean

function includes<A>(value: unknown, iterable: AsyncIterable<A>): Promise<boolean>

function includes<A extends UniversalIterable>(value: unknown): (iterable: A) => IterableReturnValue<A, boolean>

function includes<A extends UniversalIterable>(
  value: unknown,
  iterable?: A
): ((iterable: A) => IterableReturnValue<A, boolean>) | boolean | Promise<boolean> {
  if (iterable === undefined) {
    return (iterable) => includes(value, iterable as any) as IterableReturnValue<A, boolean>
  }

  if (isIterable(iterable)) {
    return some((args) => args === value, iterable)
  }

  if (isAsyncIterable(iterable)) {
    return some((args) => args === value, iterable)
  }

  throw new IterableTypeException()
}

export { includes }
