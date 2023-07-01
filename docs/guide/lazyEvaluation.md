# Lazy Evaluation

All functions defined under `pipe/lazy` have the lazy evaluation feature. This feature greatly improves the running performance.

```typescript
import { map, pipe, reduce, take } from '@niuiic/flow'

const length = 10000000

const arr = new Array(length).fill(1)
const arr2 = new Array(length).fill(1)

const timeRange = [new Date().getTime()]
arr
  .map((v) => v + 1)
  .slice(0, 10)
  .reduce((a, b) => a + b)
timeRange[1] = new Date().getTime()

const timeRange2 = [new Date().getTime()]
pipe(
  arr2,
  map((v) => v + 1),
  take(10),
  reduce((a, b) => a + b)
)
timeRange2[1] = new Date().getTime()

// 72 1
console.log(timeRange[1] - timeRange[0], timeRange2[1] - timeRange2[0])
```
