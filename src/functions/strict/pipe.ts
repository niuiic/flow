import { PipeReturnValue } from 'src/types/index.js'
import { call } from '../utils.js'
import { reduce } from './reduce.js'

/**
 * Compose functions from left to right
 *
 * @example
 * ```ts
 * console.log(pipe([1, 2, 3], take(2), max)) // 2
 * ```
 *
 * {@link #Repo/tests/functions/lazy/pipe.spec.ts | More examples}
 */

function pipe<A1, R>(...args: [initialValue: A1, fn1: (args: Awaited<A1>) => R]): PipeReturnValue<[A1, R]>

function pipe<A1, A2, R>(
  ...args: [initialValue: A1, fn1: (args: Awaited<A1>) => A2, fn2: (args: Awaited<A2>) => R]
): PipeReturnValue<[A1, A2, R]>

function pipe<A1, A2, A3, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => R
  ]
): PipeReturnValue<[A1, A2, A3, R]>

function pipe<A1, A2, A3, A4, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, R]>

function pipe<A1, A2, A3, A4, A5, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, R]>

function pipe<A1, A2, A3, A4, A5, A6, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => A14,
    fn14: (args: Awaited<A14>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => A14,
    fn14: (args: Awaited<A14>) => A15,
    fn15: (args: Awaited<A15>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => A14,
    fn14: (args: Awaited<A14>) => A15,
    fn15: (args: Awaited<A15>) => A16,
    fn16: (args: Awaited<A16>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => A14,
    fn14: (args: Awaited<A14>) => A15,
    fn15: (args: Awaited<A15>) => A16,
    fn16: (args: Awaited<A16>) => A17,
    fn17: (args: Awaited<A17>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => A14,
    fn14: (args: Awaited<A14>) => A15,
    fn15: (args: Awaited<A15>) => A16,
    fn16: (args: Awaited<A16>) => A17,
    fn17: (args: Awaited<A17>) => A18,
    fn18: (args: Awaited<A18>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => A14,
    fn14: (args: Awaited<A14>) => A15,
    fn15: (args: Awaited<A15>) => A16,
    fn16: (args: Awaited<A16>) => A17,
    fn17: (args: Awaited<A17>) => A18,
    fn18: (args: Awaited<A18>) => A19,
    fn19: (args: Awaited<A19>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, R]>

function pipe<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, R>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => A7,
    fn7: (args: Awaited<A7>) => A8,
    fn8: (args: Awaited<A8>) => A9,
    fn9: (args: Awaited<A9>) => A10,
    fn10: (args: Awaited<A10>) => A11,
    fn11: (args: Awaited<A11>) => A12,
    fn12: (args: Awaited<A12>) => A13,
    fn13: (args: Awaited<A13>) => A14,
    fn14: (args: Awaited<A14>) => A15,
    fn15: (args: Awaited<A15>) => A16,
    fn16: (args: Awaited<A16>) => A17,
    fn17: (args: Awaited<A17>) => A18,
    fn18: (args: Awaited<A18>) => A19,
    fn19: (args: Awaited<A19>) => A20,
    fn20: (args: Awaited<A20>) => R
  ]
): PipeReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, R]>

function pipe(...args: any[]) {
  const [initialValue, ...fns] = args
  return reduce(call, initialValue, fns)
}

export { pipe }
