import type { AnyObject, Entries } from '@/types'

/**
 * Convert object to iterator.
 *
 * @example
 * ```typescript
 * const iterator =  entries({a: 1, b: 2})
 * iterator.next().value = ['a', 1]
 * iterator.next().value = ['b', 2]
 * iterator.next().done = true
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/entries.spec.ts | More examples}
 */
function* entries<A extends AnyObject>(args: A): Generator<Entries<A>, void> {
  for (const k in args) {
    if (Object.prototype.hasOwnProperty.call(args, k)) {
      yield [k, args[k]] as any
    }
  }
}

export { entries }
