# Concurrency

This library provides an easy way to control concurrency with `concurrent`.

```typescript
import { concurrent, consume, delay, filter, map, pipe, toAsync } from 'fx-flow'

type FileChunk = number
type MD5 = number

const fileChunks: FileChunk[] = Array.from(
  {
    length: 10
  },
  (_, i) => i
)

const calcMd5 = (chunk: FileChunk): Promise<[FileChunk, MD5]> => Promise.all([chunk, delay(100, Math.random())])

const notUploaded = (chunk: [FileChunk, MD5]) => Promise.resolve(chunk[1] > 0.5)

const uploadChunk = (chunk: FileChunk) => delay(1000, chunk).then(() => console.log(`${chunk} has been uploaded`))

// Upload file chunks concurrently and skip uploaded chunks.
const result = pipe(
  fileChunks,
  toAsync,
  // ------------------------------------------------
  // 10 tasks are performed simultaneously and all tasks are completed before the next group is performed
  map(calcMd5),
  concurrent(10),
  // ------------------------------------------------
  // 3 tasks are performed simultaneously and all tasks are completed before the next group is performed
  filter(notUploaded),
  map(([chunk]) => uploadChunk(chunk)),
  concurrent(3),
  // ------------------------------------------------
  toArray
)
```

`concurrent` control the number of concurrency for all previous steps.
