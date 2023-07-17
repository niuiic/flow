import { Result } from 'src/flow/result.js'
import { MaybePromise } from './promise.js'

export type ResultReturnValue<T extends MaybePromise<Result<unknown>>> = T extends Promise<Result<Promise<infer R>>>
  ? MaybePromise<Result<Awaited<R>>>
  : T extends Promise<Result<infer R>>
  ? MaybePromise<Result<R>>
  : T extends Result<Promise<infer R>>
  ? MaybePromise<Result<Awaited<R>>>
  : T
