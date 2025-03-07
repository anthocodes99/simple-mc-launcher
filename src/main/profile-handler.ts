import { PathLike } from 'node:fs'
import * as fs from 'node:fs/promises'

export async function readProfileFromFile(filePath: PathLike): JSON {
  console.log('yay?')
  console.log({ filePath })
  try {
    await fs.access(filePath, fs.constants.F_OK)
  } catch (err) {
    throw Error('File does not exist!')
  }
  const buffer = await fs.readFile(filePath, { encoding: 'utf-8' })
  const data = JSON.parse(buffer)
  console.log(data)
  return data
}

export async function readProfiles(folderPath: PathLike): object[] {
  try {
    await fs.access(filePath, fs.constants.F_OK)
  } catch (err) {
    throw Error('File does not exist!')
  }
  return []
}
