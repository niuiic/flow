import { Expand } from './basic.js'
import { Immutable } from './immutable.js'

export type AsyncFunction = (...args: any[]) => Promise<any>

export type PureFunc<P, R> = Expand<(args: Immutable<P>) => R>

export type AnyFunction = (...args: any[]) => any
