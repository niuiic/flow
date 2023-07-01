# Curry

Parameter names would be lost during type convertion, thus curry is not the primary way to extend arguments in this library.

It's recommended to combine all parameters into one object, and convert parameters with `into`.

```typescript
import { ok, err, delay, flow, andThen, errThen, into } from '@niuiic/flow'

class User {
  constructor(public id: string, public name: string, public password: string, public books: string[]) {}
}

const findBook = ({ userId, bookName }: { userId: string; bookName: string }) => {
  const userList = delay(100, [
    new User('1', 'user1', 'passwd1', ['book1', 'book7', 'book3']),
    new User('2', 'user2', 'passwd2', ['book1', 'book2', 'book4']),
    new User('3', 'user3', 'passwd3', ['book1', 'book9', 'book8'])
  ])

  return userList.then((users) => {
    const targetUser = users.find((user) => user.id === userId)
    if (targetUser) {
      const targetBook = targetUser.books.find((book) => book === bookName)
      if (targetBook) {
        return ok(targetBook)
      }
      return err('book not found')
    }
    return err('user not found')
  })
}

const notify = (msg: string) => {
  console.log(msg)
}

const userId = '1'
const bookName = 'book1'

const book = (
  await flow(
    ok(userId),
    into((userId) => {
      return {
        userId,
        bookName
      }
    }),
    andThen(findBook),
    errThen(notify)
  )
).unwrap()
```
