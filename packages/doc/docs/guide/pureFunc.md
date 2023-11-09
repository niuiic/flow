# Pure Function

Immutable restrictions on function input parameters usually greatly increase the runtime burden.

This library provides a tool type named `Immutable`, tries to make this restriction with typescript and then there would be no performance loss when running.

![immutable showcase](/immutable.png)

::: tip
`Immutable` has the second parameter to specify types to ignore.
:::

```typescript
// `Immutable` will expand the input type.
// `File` is a builtin type, which is not equal to expaned `File`.
// You may need to ignore `File`, or it cannot satisfies another `File`.
type Res = Immutable<
  {
    file: File
  },
  File
>
// Res = {
//   readonly file: File
// }
```
