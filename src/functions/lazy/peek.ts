import { IteratorReturnValue, UniversalIterable } from 'src/types/iterable.js'
import { tap } from '../strict/tap.js'
import { isAsyncIterable, isIterable } from '../utils.js'
import { map } from './map.js'

/**
 * Call `fn` for each item in the iterable/asyncIterable and return the original iterable/asyncIterable.
 *
 * @example
 * ```ts
 * const iterator = peek(console.log, [1, 2, 3])
 *
 * for (const v of iterator) {
 *   // log 1, 2, 3
 *   // v = 1, 2, 3
 * }
 *
 * const iterator2 = peek(
 *   (v) => {
 *     v.a = 'b'
 *   },
 *   [{ a: 'a' }]
 * )
 *
 * for (const v of iterator) {
 *   console.log(v) // log {a: 'b'}
 * }
 * ```
 *
 * {@link #Repo/tests/functions/lazy/peek.spec.ts | More examples}
 */
function peek<A>(fn: (args: A) => unknown, iterable: Iterable<A>): IterableIterator<A>
function peek<A>(fn: (args: A) => unknown, iterable: AsyncIterable<A>): AsyncIterableIterator<A>
function peek<A>(
  fn: (args: A) => unknown
): (iterable: UniversalIterable<A>) => IteratorReturnValue<UniversalIterable<A>>

function peek<A>(
  fn: (args: A) => unknown,
  iterable?: UniversalIterable<A>
):
  | IteratorReturnValue<UniversalIterable<A>>
  | ((iterable: UniversalIterable<A>) => IteratorReturnValue<UniversalIterable<A>>) {
  type ReturnValue = IteratorReturnValue<UniversalIterable<A>>

  if (iterable === undefined) {
    return (iterable: UniversalIterable<A>) => peek(fn, iterable as any) as ReturnValue
  }

  if (isIterable(iterable)) {
    return map(tap(fn as any), iterable) as ReturnValue
  }

  if (isAsyncIterable(iterable)) {
    return map(tap(fn as any), iterable) as ReturnValue
  }

  throw new TypeError('"iterable" must be type of Iterable or AsyncIterable')
}

export { peek }
