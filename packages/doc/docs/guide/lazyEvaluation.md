# Lazy Evaluation

All functions defined under `pipe/lazy` have lazy evaluation feature. This feature greatly improves the running performance.

```typescript
import { map, pipe, reduce, take } from 'fx-flow'

const arr = new Array(10000000).fill(1)

console.time('builtin methods')
arr
  .map((v) => v + 1)
  .slice(0, 10)
  .reduce((a, b) => a + b)
console.timeEnd('builtin methods')

console.time('methods with lazy evaluation')
pipe(
  arr,
  map((v) => v + 1),
  take(10),
  reduce((a, b) => a + b)
)
console.timeEnd('methods with lazy evaluation')
```

- builtin methods: 97.567ms
- methods with lazy evaluation: 0.272ms
