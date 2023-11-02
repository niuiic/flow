# Debug

Debugging in chain is difficult, thus some functions are provided to help.

## flow

Inject an inspector with `inspect`.

::: warning
Do not modify `data`, or subsequent steps will be affected.
:::

```typescript
const inspector = <T>(args: { success: true; data: T } | { success: false; err: string }) => {
  console.log(args)
}

const userInfo = (await flow(ok(userId), andThen(queryUserInfo), inspect(inspector), errThen(notify))).unwrap()
```

Output result of each step with `log`.

```typescript
flow(ok(userId), log('INFO'), andThen(queryUserInfo), errThen(notify))
```

## pipe

Inject an inspector with `tap`.

Apply an inspector to each item with `peek`.

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
