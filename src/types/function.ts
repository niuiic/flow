import { Expand } from './basic.js'
import { Immutable } from './immutable.js'

export type AsyncFunction = (...args: any[]) => Promise<any>

export type PureFunction<P, R> = Expand<(args: Immutable<P>) => R>
