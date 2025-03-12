import { join } from 'node:path'
import { PathLike } from 'node:fs'
import * as fs from 'node:fs/promises'

import type { Profile } from '../types/profile'

export async function readProfileFromFile(filePath: PathLike): JSON {
  try {
    await fs.access(filePath, fs.constants.F_OK)
  } catch (err) {
    throw Error(`An error occured! ${err.message} `)
  }
  const buffer = await fs.readFile(filePath, { encoding: 'utf-8' })
  const data = JSON.parse(buffer)
  return data
}

export async function readProfiles(folderPath: string): Promise<Profile[]> {
  try {
    const folderPathFull = join(__dirname, '../', folderPath)
    const files = await fs.readdir(folderPathFull)
    const profiles = []
    for (const file of files) {
      profiles.push(await readProfileFromFile(join(folderPathFull, file)))
    }
    return profiles
  } catch (err) {
    throw Error(`An error occured! ${err.message}`)
  }
}
}
