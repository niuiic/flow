import { cleanDoc } from './doc.js'
import { exportFn } from './export.js'
import { lint } from './lint.js'

const jobs: { name: string; fn: (...args: any[]) => any }[] = []

jobs.push({
  name: 'export',
  fn: exportFn
})

jobs.push({
  name: 'cleanDoc',
  fn: cleanDoc
})

jobs.push({
  name: 'lint',
  fn: lint
})

if (process.argv.length >= 3) {
  const targetJob = jobs.find((v) => v.name === process.argv[2])
  if (targetJob) {
    targetJob.fn(process.argv.slice(3))
  } else {
    throw new Error('no job matched')
  }
}
