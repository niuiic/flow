# Quickstart

## Installation

### NPM

```sh
npm install @niuiic/flow
```

### Yarn

```sh
yarn add @niuiic/flow
```

### Pnpm

```sh
pnpm add @niuiic/flow
```

## Usage

::: warning
No support for es5 now
:::

### Import

::: tip
Support both esm and cjs.
:::

#### ESM

```typescript
import { flow, pipe } from 'niuiic/flow'
```

#### CJS

```typescript
const { flow, pipe } = require('niuiic/flow')
```

### flow

::: tip
`flow` is used to control the program flow.
:::

```typescript
class User {
  constructor(public id: string, public name: string, public password: string) {}
}

const queryUserInfo = (userId: string) => {
  const userList = delay(100, [
    new User('1', 'user1', 'passwd1'),
    new User('2', 'user2', 'passwd2'),
    new User('3', 'user3', 'passwd3')
  ])

  return userList.then((users) => {
    const targetUser = users.find((user) => user.id === userId)
    if (targetUser) {
      return ok(targetUser)
    }
    return err('user not found')
  })
}

const notify = (msg: string) => {
  console.log(msg)
}

const defaultUser = () => new User('0', 'user', 'passwd')

let userId = '1'
const userInfo = (await flow(ok(userId), andThen(queryUserInfo), errThen(notify))).unwrap()
// Return User3
userId = '4'
const userInfo = (await flow(ok(userId), andThen(queryUserInfo), errThen(notify))).unwrapOrElse(defaultUser)
// No user found in user list, then call `notify` and return default user.
```

### pipe

::: tip
`pipe` is used to apply operations on iterable/asyncIterable.
:::

```typescript
type File = number

const fileChunks: File[] = [1, 2, 3, 4, 5]

const hasUploaded = (file: File) => file === 1

const uploadChunk = (file: File) => {
  return delay(1000, file)
}

pipe(fileChunks, toAsync, filter(hasUploaded), concurrent(3), each(uploadChunk))
```
