import { FlowMissModifierException } from 'src/utils.js'
import { FlowState, Modifier } from './flow.js'
import { Result } from './result.js'

type Method = Exclude<FlowState['log'], 'NONE'>

/**
 * Output result of each step in flow.
 *
 * @example
 * ```typescript
 * flow(ok(filePath), log('INFO'), andThen(readFileToStr), expect('file should exists'))
 * ```
 *
 * {@link #Repo/tests/flow/log.spec.ts | More examples}
 */
function log<A>(method: Method, result: Result<A>, modifier: Modifier): Result<A>
function log<A>(method: Method): (result: Result<A>, modifier: Modifier) => Result<A>

function log<A>(
  method: Method,
  result?: Result<A>,
  modifier?: Modifier
): ((result: Result<A>, modifier: Modifier) => Result<A>) | Result<A> {
  if (result === undefined) {
    return (result, modifier) => log(method, result, modifier)
  }

  if (modifier === undefined) {
    throw new FlowMissModifierException()
  }

  modifier({
    log: method
  })

  return result
}

export { log }
