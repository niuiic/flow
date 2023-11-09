# Lazy Evaluation

All functions defined under `pipe/lazy` have lazy evaluation feature.

```typescript
import { map, pipe, reduce } from 'fx-flow'

const arr = new Array(10000000).fill(1)

console.time('builtin methods')
arr
  .map((x) => x + 1)
  .map((x) => x + 1)
  .reduce((x, y) => x + y)
console.timeEnd('builtin methods')

console.time('methods with lazy evaluation')
pipe(
  arr,
  map((x) => x + 1),
  map((x) => x + 1),
  reduce((x, y) => x + y)
)
console.timeEnd('methods with lazy evaluation')
```

- builtin methods: 254.418ms
- methods with lazy evaluation: 204.438ms
