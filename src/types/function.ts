import { Expand } from './basic'
import { Immutable } from './immutable'

export type AsyncFunction = (...args: any[]) => Promise<any>

export type PureFunc<P, R> = Expand<(args: Immutable<P>) => R>
