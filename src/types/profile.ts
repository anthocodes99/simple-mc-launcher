export interface Profile {
  root: string
  version: {
    number: string
    custom?: string
    type: 'releease' | 'snapshot'
  }
  customLaunchArgs?: string
  memory: {
    max: string
    min: string
  }
}
