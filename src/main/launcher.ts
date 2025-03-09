import { Client, Authenticator } from 'minecraft-launcher-core'

export function launchMinecraft(): void {
  console.log('IM LAUNCHING MINECRAFT')
  const launcher = new Client()
  const opts = {
    authorization: Authenticator.getAuth('anthocodes99'),
    root: './minecraft',
    version: {
      number: '1.21.4',
      type: 'release'
    },
    memory: {
      max: '6G',
      min: '4G'
    }
  }
  launcher.launch(opts)
  launcher.on('debug', (e) => console.log(e))
  launcher.on('package-extract', (e) => console.log(e))
  launcher.on('progress', (e) => console.log(e))
  launcher.on('download', (e) => console.log(e))
  launcher.on('data', (e) => console.log(e))
  launcher.on('error', (e) => console.log(e))
  launcher.on('response', (e) => console.log(e))
}
