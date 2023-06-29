import { reduce } from 'src/pipe/strict/reduce.js'
import { FlowReturnValue, MaybePromise } from 'src/types/index.js'
import { call } from 'src/utils.js'
import { Result } from './result.js'

type FnReturnType = MaybePromise<Result<unknown>>

/**
 * Compose steps from left to right.
 *
 * @example
 * ```ts
 * const data = (await flow(ok(filePath), andThen(readFileToStr), expect('file should exists'))).unwrap()
 * ```
 *
 * {@link #Repo/tests/flow/flow.spec.ts | More examples}
 */
function flow<A1 extends FnReturnType, R extends FnReturnType>(
  ...args: [initialValue: A1, fn1: (args: Awaited<A1>) => R]
): FlowReturnValue<[A1, R]>

function flow<A1 extends FnReturnType, A2 extends FnReturnType, R extends FnReturnType>(
  ...args: [initialValue: A1, fn1: (args: Awaited<A1>) => A2, fn2: (args: Awaited<A2>) => R]
): FlowReturnValue<[A1, A2, R]>

function flow<A1 extends FnReturnType, A2 extends FnReturnType, A3 extends FnReturnType, R extends FnReturnType>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => R
  ]
): FlowReturnValue<[A1, A2, A3, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  R extends FnReturnType
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  R extends FnReturnType
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  R extends FnReturnType
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>) => A2,
    fn2: (args: Awaited<A2>) => A3,
    fn3: (args: Awaited<A3>) => A4,
    fn4: (args: Awaited<A4>) => A5,
    fn5: (args: Awaited<A5>) => A6,
    fn6: (args: Awaited<A6>) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  A14 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  A14 extends FnReturnType,
  A15 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  A14 extends FnReturnType,
  A15 extends FnReturnType,
  A16 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  A14 extends FnReturnType,
  A15 extends FnReturnType,
  A16 extends FnReturnType,
  A17 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  A14 extends FnReturnType,
  A15 extends FnReturnType,
  A16 extends FnReturnType,
  A17 extends FnReturnType,
  A18 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  A14 extends FnReturnType,
  A15 extends FnReturnType,
  A16 extends FnReturnType,
  A17 extends FnReturnType,
  A18 extends FnReturnType,
  A19 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, R]>

function flow<
  A1 extends FnReturnType,
  A2 extends FnReturnType,
  A3 extends FnReturnType,
  A4 extends FnReturnType,
  A5 extends FnReturnType,
  A6 extends FnReturnType,
  A7 extends FnReturnType,
  A8 extends FnReturnType,
  A9 extends FnReturnType,
  A10 extends FnReturnType,
  A11 extends FnReturnType,
  A12 extends FnReturnType,
  A13 extends FnReturnType,
  A14 extends FnReturnType,
  A15 extends FnReturnType,
  A16 extends FnReturnType,
  A17 extends FnReturnType,
  A18 extends FnReturnType,
  A19 extends FnReturnType,
  A20 extends FnReturnType,
  R extends FnReturnType
>(
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
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, R]>

function flow(...args: any[]) {
  const [initialValue, ...fns] = args
  return reduce(call, initialValue, fns)
}

export { flow }
