# Debug

Debugging in chain is difficult, fortunately there are some functions provided to help.

## flow

`inspect` can inject an inspector without an effect.

::: warning
Do not modify `data`, or subsequent steps will be affected.
:::

```typescript
const inspector = <T>(args: { success: true; data: T } | { success: false; err: string }) => {
  console.log(args)
}

const userInfo = (await flow(ok(userId), andThen(queryUserInfo), inspect(inspector), errThen(notify))).unwrap()
```

`log` can output result of each step in flow.

```typescript
flow(ok(userId), log('INFO'), andThen(queryUserInfo), errThen(notify))
```

## pipe

`tap` can inject an inspector for the result of the previous operation, and `peek` can apply an function to each item in iterable.

::: warning
Do not modify the arguments of `tap` and `peek`.
:::

```typescript
pipe(
  [1, 2, 3, 4],
  map((v) => v + 1),
  tap((result) => console.log(result)), // log an iterator
  peek((item) => console.log(item)), // log 2, 3, 4, 5
  reduce((a, b) => a + b)
)
```
