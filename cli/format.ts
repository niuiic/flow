import { exec } from 'child_process'

export const format = (file: string) => {
  exec('pnpm prettier -w ' + file)
}
