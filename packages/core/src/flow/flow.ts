import type { AnyFunction, AnyObject, FlowReturnValue, FlowState, FnReturnValue, Modifier } from '@/types'
import { isPromise } from '@/utils'
import type { Result } from './result'
import { err } from './result'

const toStr = (err: unknown) => JSON.stringify(err, Object.getOwnPropertyNames(err), 1)

/**
 * Compose steps from left to right.
 *
 * @example
 * ```typescript
 * const data = (await flow(ok(filePath), andThen(readFileToStr))).unwrap()
 * ```
 *
 * {@link https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/flow.spec.ts | More examples}
 */
function flow<A1 extends FnReturnValue, R extends FnReturnValue>(
  ...args: [initialValue: A1, fn1: (args: Awaited<A1>, modifier: Modifier) => R]
): FlowReturnValue<[A1, R]>

function flow<A1 extends FnReturnValue, A2 extends FnReturnValue, R extends FnReturnValue>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, R]>

function flow<A1 extends FnReturnValue, A2 extends FnReturnValue, A3 extends FnReturnValue, R extends FnReturnValue>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  A14 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => A14,
    fn14: (args: Awaited<A14>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  A14 extends FnReturnValue,
  A15 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => A14,
    fn14: (args: Awaited<A14>, modifier: Modifier) => A15,
    fn15: (args: Awaited<A15>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  A14 extends FnReturnValue,
  A15 extends FnReturnValue,
  A16 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => A14,
    fn14: (args: Awaited<A14>, modifier: Modifier) => A15,
    fn15: (args: Awaited<A15>, modifier: Modifier) => A16,
    fn16: (args: Awaited<A16>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  A14 extends FnReturnValue,
  A15 extends FnReturnValue,
  A16 extends FnReturnValue,
  A17 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => A14,
    fn14: (args: Awaited<A14>, modifier: Modifier) => A15,
    fn15: (args: Awaited<A15>, modifier: Modifier) => A16,
    fn16: (args: Awaited<A16>, modifier: Modifier) => A17,
    fn17: (args: Awaited<A17>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  A14 extends FnReturnValue,
  A15 extends FnReturnValue,
  A16 extends FnReturnValue,
  A17 extends FnReturnValue,
  A18 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => A14,
    fn14: (args: Awaited<A14>, modifier: Modifier) => A15,
    fn15: (args: Awaited<A15>, modifier: Modifier) => A16,
    fn16: (args: Awaited<A16>, modifier: Modifier) => A17,
    fn17: (args: Awaited<A17>, modifier: Modifier) => A18,
    fn18: (args: Awaited<A18>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  A14 extends FnReturnValue,
  A15 extends FnReturnValue,
  A16 extends FnReturnValue,
  A17 extends FnReturnValue,
  A18 extends FnReturnValue,
  A19 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => A14,
    fn14: (args: Awaited<A14>, modifier: Modifier) => A15,
    fn15: (args: Awaited<A15>, modifier: Modifier) => A16,
    fn16: (args: Awaited<A16>, modifier: Modifier) => A17,
    fn17: (args: Awaited<A17>, modifier: Modifier) => A18,
    fn18: (args: Awaited<A18>, modifier: Modifier) => A19,
    fn19: (args: Awaited<A19>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, R]>

function flow<
  A1 extends FnReturnValue,
  A2 extends FnReturnValue,
  A3 extends FnReturnValue,
  A4 extends FnReturnValue,
  A5 extends FnReturnValue,
  A6 extends FnReturnValue,
  A7 extends FnReturnValue,
  A8 extends FnReturnValue,
  A9 extends FnReturnValue,
  A10 extends FnReturnValue,
  A11 extends FnReturnValue,
  A12 extends FnReturnValue,
  A13 extends FnReturnValue,
  A14 extends FnReturnValue,
  A15 extends FnReturnValue,
  A16 extends FnReturnValue,
  A17 extends FnReturnValue,
  A18 extends FnReturnValue,
  A19 extends FnReturnValue,
  A20 extends FnReturnValue,
  R extends FnReturnValue
>(
  ...args: [
    initialValue: A1,
    fn1: (args: Awaited<A1>, modifier: Modifier) => A2,
    fn2: (args: Awaited<A2>, modifier: Modifier) => A3,
    fn3: (args: Awaited<A3>, modifier: Modifier) => A4,
    fn4: (args: Awaited<A4>, modifier: Modifier) => A5,
    fn5: (args: Awaited<A5>, modifier: Modifier) => A6,
    fn6: (args: Awaited<A6>, modifier: Modifier) => A7,
    fn7: (args: Awaited<A7>, modifier: Modifier) => A8,
    fn8: (args: Awaited<A8>, modifier: Modifier) => A9,
    fn9: (args: Awaited<A9>, modifier: Modifier) => A10,
    fn10: (args: Awaited<A10>, modifier: Modifier) => A11,
    fn11: (args: Awaited<A11>, modifier: Modifier) => A12,
    fn12: (args: Awaited<A12>, modifier: Modifier) => A13,
    fn13: (args: Awaited<A13>, modifier: Modifier) => A14,
    fn14: (args: Awaited<A14>, modifier: Modifier) => A15,
    fn15: (args: Awaited<A15>, modifier: Modifier) => A16,
    fn16: (args: Awaited<A16>, modifier: Modifier) => A17,
    fn17: (args: Awaited<A17>, modifier: Modifier) => A18,
    fn18: (args: Awaited<A18>, modifier: Modifier) => A19,
    fn19: (args: Awaited<A19>, modifier: Modifier) => A20,
    fn20: (args: Awaited<A20>, modifier: Modifier) => R
  ]
): FlowReturnValue<[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, R]>

function flow(...args: any[]) {
  const [initialValue, ...fns] = args
  const flowState: FlowState = {
    done: false,
    log: 'NONE'
  }
  const modifier: Modifier = (args) => {
    type Key = keyof FlowState
    for (const key in args) {
      // @ts-ignore
      if (args[key as Key] !== undefined && Object.hasOwn(flowState, key)) {
        ;(flowState as AnyObject)[key] = args[key as Key]
      }
    }
  }
  let result: FnReturnValue = initialValue
  let step = -1

  const call = (fns: AnyFunction[]): FnReturnValue => {
    if (flowState.done || fns.length === 0) {
      return result
    }

    step = step + 1
    const fn = fns[0]

    if (isPromise(result)) {
      return result
        .then((_result) => {
          log(_result, step, flowState.log)
          result = fn(_result, modifier)
          return call(fns.slice(1))
        })
        .catch((e) => {
          result = err(toStr(e))
          return call(fns.slice(1))
        })
    } else {
      log(result, step, flowState.log)
      try {
        const res = fn(result, modifier)
        if (isPromise(res)) {
          return res
            .then((res) => {
              result = res as any
              return call(fns.slice(1))
            })
            .catch((e) => {
              result = err(toStr(e))
              return call(fns.slice(1))
            })
        } else {
          result = res
          return call(fns.slice(1))
        }
      } catch (e) {
        result = err(toStr(e))
        return call(fns.slice(1))
      }
    }
  }

  return call(fns)
}

function log(result: Result<unknown>, step: number, method: FlowState['log']) {
  if (method === 'NONE') {
    return
  }
  if (method === 'ERROR' && result.isError()) {
    console.error(`Step ${step} failed, the error is ${result.error()!}`)
    return
  }
  if (method === 'INFO') {
    if (result.isSuccess()) {
      console.info(`Step ${step} success, the result is`, result.unwrap())
    } else {
      console.error(`Step ${step} failed, the error is`, result.error())
    }
    return
  }
}

export { flow }
