# Quickstart

## Introduction

This library is an exploration of the application of functional programming to practical.

It's aim to improve the readability and maintainability of the program and the experience of writing code.

## Installation

### Npm

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

const defaultUser = new User('0', 'user', 'passwd')

let userId = '1'
// Find target user, and return the user info. `notify` would be skipped.
const userInfo = (await flow(ok(userId), andThen(queryUserInfo), errThen(notify))).unwrap()

userId = '4'
// No user found, then call `notify` and return `defaultUser`.
const userInfo2 = (await flow(ok(userId), andThen(queryUserInfo), errThen(notify))).unwrapOr(defaultUser)
```

### pipe

::: tip
`pipe` is used to apply operations on iterable/asyncIterable.
:::

```typescript
type FileChunk = number

const fileChunks: FileChunk[] = [1, 2, 3, 4, 5]

const hasUploaded = (chunk: FileChunk) => chunk === 1

const uploadChunk = (chunk: FileChunk) => {
  return delay(1000, chunk)
}

// Upload file chunks concurrently and skip uploaded chunks.
pipe(fileChunks, toAsync, filter(hasUploaded), concurrent(3), each(uploadChunk))
```
