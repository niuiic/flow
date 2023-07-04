import { existsSync, readdirSync, rmSync, rmdirSync, statSync } from 'fs'
import { join } from 'path'

export const getParentPath = (path: string) => {
  const index = path.lastIndexOf(process.platform.includes('win') ? '\\' : '/')
  if (index === -1 || index === 0) {
    return undefined
  }
  return path.slice(0, index)
}

export const fileSuffix = (path: string) => {
  const index = path.lastIndexOf('.')
  return index === -1 ? undefined : path.slice(index + 1)
}

export const fileName = (path: string) => {
  const after = path.lastIndexOf('.')
  const before = path.lastIndexOf('/')
  if (before === -1) {
    return after !== -1 ? path.slice(0, after) : undefined
  }
  if (after === -1) {
    return undefined
  }
  return path.slice(before + 1, after)
}

export const getRootPath = () => {
  let curDir: string | undefined = __dirname
  while (curDir !== undefined) {
    const fileOrDirList = readdirSync(curDir)
    if (fileOrDirList.includes('.git')) {
      return curDir
    }
    curDir = getParentPath(curDir)
  }

  throw new Error('Failed to find root path.')
}

export const walkDir = (dirPath: string, callback: (path: string) => any, depth = Infinity) => {
  if (depth === 0) {
    return
  }
  const fileOrDirList = readdirSync(dirPath)
  fileOrDirList.forEach((fd) => {
    const fdPath = join(dirPath, fd)
    const stats = statSync(fdPath)
    if (stats.isDirectory()) {
      walkDir(fdPath, callback, depth - 1)
      callback(fdPath)
    } else if (stats.isFile()) {
      callback(fdPath)
    }
  })
}

/** "path" should be relative to project root */
export const rmFileOrDir = (path: string) => {
  const rootPath = getRootPath()
  const fullPath = rootPath + path
  if (!existsSync(fullPath)) {
    console.log('no such file or directory')
    return
  }
  const cb = (path: string) => {
    const stats = statSync(path)
    if (stats.isDirectory()) {
      if (readdirSync(path).length === 0) {
        console.log('remove dir: ' + path)
        rmdirSync(path)
      }
    } else {
      console.log('remove file: ' + path)
      rmSync(path)
    }
  }
  walkDir(fullPath, cb)
  rmdirSync(fullPath)
}
