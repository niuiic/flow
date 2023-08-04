/**
 * Retures IterableIterator of numbers progressing from `start` to `end`(not included).
 *
 * @example
 * ```typescript
 * for (const v of range(4)) {
 *   console.log(v) // 0, 1, 2, 3
 * }
 * ```
 *
 * {@link https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/range.spec.ts | More examples}
 */
function range(length: number): IterableIterator<number>

function range(start: number, end: number): IterableIterator<number>

function range(start: number, end: number, step: number): IterableIterator<number>

function* range(start: number, end?: number, step = 1): IterableIterator<number> {
  if (end === undefined) {
    return yield* range(0, start, start >= 0 ? step : -1)
  }
  if (step === 0 && start !== end) {
    throw new Error('"end" can not be reached')
  }
  if (step < 0) {
    while (start > end) {
      yield start
      start += step
    }
  } else {
    while (start < end) {
      yield start
      start += step
    }
  }
}

export { range }
