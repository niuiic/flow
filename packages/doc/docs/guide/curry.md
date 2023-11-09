# Curry

Parameter names would be lost during type convertion, thus traditional curry is not the primary way to extend arguments in this library.

It's recommended to combine all parameters into one object, which is also called named parameters.

In `flow`, you can convert parameters with `into`.

```typescript
import { andThen, flow, into, ok } from 'fx-flow'

const querySometing = (args: { type: string; name: string }) => ok([args.type, args.name])

flow(
  ok({
    type: 'type'
  }),
  into((args) => ({
    type: args.type,
    name: 'name'
  })),
  andThen(querySometing)
)
```

For more general usage, convert your function with `curry`.

```typescript
import { curry } from 'fx-flow'

const add = (args: { a: number; b: number }) => args.a + args.b
const curriedAdd = curry(add, { a: 1 })

console.log(curriedAdd({ b: 2 })) // 3
```
