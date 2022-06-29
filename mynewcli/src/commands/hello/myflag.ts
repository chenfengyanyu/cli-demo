import { Command, Flags } from '@oclif/core'

export default class MyFlag extends Command {
  static description = 'Flag Demo'

  static flags = {
    // can pass either --force or -f
    force: Flags.boolean({ char: 'f' }),
    file: Flags.string(),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(MyFlag)
    if (flags.force) console.log('--force is set')
    if (flags.file) console.log(`--file is: ${flags.file}`)
  }
}