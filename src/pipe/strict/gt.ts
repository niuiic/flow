/**
 * Is `a` greater than `b`
 *
 * @example
 * ```ts
 * console.log(gt(5, 1)) // true
 * ```
 *
 * {@link #Repo/tests/functions/strict/gt.spec.ts | More examples}
 */
function gt(a: string): (b: string) => boolean
function gt(a: number): (b: number) => boolean
function gt(a: Date): (b: Date) => boolean
function gt(a: string, b: string): boolean
function gt(a: number, b: number): boolean
function gt(a: Date, b: Date): boolean

function gt(a: any, b?: any): ((b: any) => boolean) | boolean {
  if (b === undefined) {
    return (b2: any) => gt(a, b2)
  }

  if (
    (typeof a === 'number' && typeof b === 'number') ||
    (typeof a === 'string' && typeof b === 'string') ||
    (a instanceof Date && b instanceof Date)
  ) {
    return a > b
  }

  throw new TypeError('"a" and "b" should have the same type')
}

export { gt }
