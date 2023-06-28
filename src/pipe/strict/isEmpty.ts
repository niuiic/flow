import { isArray } from './isArray.js'
import { isNil } from './isNil.js'

/**
 * Check whether `args` is empty.
 *
 * @example
 * ```ts
 * isEmpty({}) // true
 * isEmpty([]) // true
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty("") // true
 *
 * isEmpty(0) // false
 * isEmpty(false) // false
 * isEmpty(function(){}) // false
 * isEmpty(Symbol("")) // false
 * isEmpty(new Date()) // false
 * ```
 *
 * {@link #Repo/tests/functions/strict/isEmpty.spec.ts | More examples}
 */
function isEmpty<A>(args: A): boolean {
  if (isNil(args)) return true

  if (
    typeof args === 'object' &&
    (args as object)['constructor'] === Object &&
    Object.getOwnPropertyNames(args).length === 0
  ) {
    return true
  }

  if (isArray(args) && args.length === 0) return true

  if (args === '') return true

  return false
}

export { isEmpty }
