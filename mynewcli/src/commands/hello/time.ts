import {Command, Flags} from '@oclif/core'

export default class Time extends Command {
  static description = 'Show Current Time'

  async run(): Promise<void> {
    this.log(`hello current time is ${new Date()}`)
    // this.error(`Errro!!!`)
    // test custom hooks
    await this.config.runHook('analytics', {id: 'my_custom_command'})
  }
}