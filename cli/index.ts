import { cleanDoc } from './doc.js'
import { exportFn } from './export.js'

const jobs: { name: string; fn: (...args: any[]) => any }[] = []

jobs.push({
  name: 'export',
  fn: exportFn
})

jobs.push({
  name: 'cleanDoc',
  fn: cleanDoc
})

if (process.argv.length >= 3) {
  const targetJob = jobs.find((v) => v.name === process.argv[2])
  if (targetJob) {
    targetJob.fn(process.argv.slice(3))
  } else {
    throw new Error('no job matched')
  }
}
