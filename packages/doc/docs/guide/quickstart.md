# Quickstart

## Introduction

This library is an exploration of the application of **_functional programming_** to practical.

It innovates on the traditional **_currying_** and **_immutability_**.

It aims to improve the reliability and maintainability of the program by **_grasping data flow and data structure_**.

## Installation

- Npm

```sh
npm install fx-flow
```

- Yarn

```sh
yarn add fx-flow
```

- Pnpm

```sh
pnpm add fx-flow
```

## Usage

### Import

:::tip
Only support ES6 or higher by default. You can build for yourself for other targets.
:::

- ESM

```typescript
import { flow, pipe } from 'fx-flow'
```

- CJS

```typescript
const { flow, pipe } = require('fx-flow')
```

### flow

::: tip
Control the program flow with `flow`.
:::

```typescript
import { andThen, delay, err, errThen, flow, ok } from 'fx-flow'

type User = number

const queryUserInfo = (id: number) => {
  const userList: Promise<User[]> = delay(100, [1, 2, 3, 4])

  return userList.then((users) => {
    const targetUser = users.find((x) => x === id)
    if (targetUser) {
      return ok(targetUser)
    }
    return err('user not found')
  })
}

const notify = (msg: string) => console.log(msg)

const defaultUser: User = 0

// Find target user, `notify` would be skipped.
// userInfo = 1
const userInfo = (await flow(ok(1), andThen(queryUserInfo), errThen(notify))).unwrap()

// No user found, `notify` would be called.
// userInfo2 = defaultUser
const userInfo2 = (await flow(ok(-1), andThen(queryUserInfo), errThen(notify))).unwrapOr(defaultUser)
```

> Exceptions are automatically caught and converted into `Result`.

### pipe

::: tip
Perform batch operations on a collection with `pipe`.
:::

```typescript
import { concurrent, consume, delay, filter, map, pipe, toAsync } from 'fx-flow'

type FileChunk = number

const fileChunks: FileChunk[] = [1, 2, 3, 4, 5]

const notUploaded = (chunk: FileChunk) => chunk > 1

const uploadChunk = (chunk: FileChunk) => delay(1000, chunk).then(() => console.log(`${chunk} has been uploaded`))

// Upload file chunks concurrently and skip uploaded chunks.
pipe(fileChunks, toAsync, filter(notUploaded), map(uploadChunk), concurrent(3), consume)
```
