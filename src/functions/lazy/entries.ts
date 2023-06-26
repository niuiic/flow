import { AnyObject, Entries } from 'src/index.js'

function* entries<A extends AnyObject>(args: A): Generator<Entries<A>, void> {
  for (const k in args) {
    if (Object.prototype.hasOwnProperty.call(args, k)) {
      yield [k, args[k]] as any
    }
  }
}

export { entries }
