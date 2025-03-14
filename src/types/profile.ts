export interface Profile {
  name: string
  icon: string
  options: {
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
    window: {
      width: number
      height: number
    }
  }
}
