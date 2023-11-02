# Curry

Parameter names would be lost during type convertion, thus curry is not the primary way to extend arguments in this library.

It's recommended to combine all parameters into one object, and convert parameters with `into`.

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
