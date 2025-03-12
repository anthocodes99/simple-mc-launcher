import { Client, Authenticator } from 'minecraft-launcher-core'

// https://www.npmjs.com/package/minecraft-launcher-core
// https://github.com/Pierce01/MinecraftLauncher-core

export function launchMinecraft(profileOptionsString: string): void {
  console.log('IM LAUNCHING MINECRAFT')
  const launcher = new Client()
  const profileOptions = JSON.parse(profileOptionsString)
  const opts = {
    authorization: Authenticator.getAuth('anthocodes99'),
    ...profileOptions
  }
  console.log({ opts })
  launcher.launch(opts)
  launcher.on('debug', (e) => console.log(e))
  launcher.on('package-extract', (e) => console.log(e))
  launcher.on('progress', (e) => console.log(e))
  launcher.on('download', (e) => console.log(e))
  launcher.on('data', (e) => console.log(e))
  launcher.on('error', (e) => console.log(e))
  launcher.on('response', (e) => console.log(e))
}
