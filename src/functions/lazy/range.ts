/**
 * Retures IterableIterator of numbers progressing from start to end(not included).
 *
 * @example
 * ```ts
 * for (const v of range(4)) {
 *   console.log(v) // 0, 1, 2, 3
 * }
 * ```
 *
 * {@link #Repo/tests/functions/lazy/range.spec.ts | More examples}
 */
function range(length: number): IterableIterator<number>

function range(start: number, end: number): IterableIterator<number>

function range(start: number, end: number, step: number): IterableIterator<number>

function* range(startOrLength: number, end?: number, step = 1): IterableIterator<number> {
  if (end === undefined) {
    return yield* range(0, startOrLength)
  }
  if (step < 0) {
    while (startOrLength > end) {
      yield startOrLength
      startOrLength += step
    }
  } else {
    while (startOrLength < end) {
      yield startOrLength
      startOrLength += step
    }
  }
}

export { range }
