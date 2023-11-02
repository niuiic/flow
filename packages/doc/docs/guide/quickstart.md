# Quickstart

## Introduction

This library is an exploration of the application of functional programming to practical.

It's aim to improve the readability and maintainability of the program and the experience of writing code.

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

- ESM

```typescript
import { flow, pipe } from 'fx-flow'
```

> Target: ES6

- CJS

```typescript
const { flow, pipe } = require('fx-flow')
```

> Target: ES5

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
import { concurrent, delay, each, filter, pipe, toAsync } from 'fx-flow'

type FileChunk = number

const fileChunks: FileChunk[] = [1, 2, 3, 4, 5]

const hasUploaded = (chunk: FileChunk) => chunk === 1

const uploadChunk = (chunk: FileChunk) => delay(1000, chunk).then(() => console.log(`${chunk} has been uploaded`))

// Upload file chunks concurrently and skip uploaded chunks.
pipe(fileChunks, toAsync, filter(hasUploaded), concurrent(3), each(uploadChunk))
```
