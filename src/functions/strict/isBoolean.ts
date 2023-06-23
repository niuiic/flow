import { Include } from '../../types/include.js'

function isBoolean<A>(args: A): args is Include<A, boolean> {
  return typeof args === 'boolean'
}

export { isBoolean }
