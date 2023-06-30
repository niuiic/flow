import { AnyObject, Entries } from 'src/types/index.js'

/**
 * Convert object to iterator.
 *
 * @example
 * ```ts
 * const iterator =  entries({a: 1, b: 2})
 * iterator.next().value = ['a', 1]
 * iterator.next().value = ['b', 2]
 * iterator.next().done = true
 * ```
 *
 * {@link #Repo/tests/pipe/lazy/entries.spec.ts | More examples}
 */
function* entries<A extends AnyObject>(args: A): Generator<Entries<A>, void> {
  for (const k in args) {
    if (Object.prototype.hasOwnProperty.call(args, k)) {
      yield [k, args[k]] as any
    }
  }
}

export { entries }
