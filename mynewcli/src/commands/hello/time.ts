import {Command, Flags} from '@oclif/core'

export default class Time extends Command {
  static description = 'Show Current Time'

  async run(): Promise<void> {
    this.log(`hello current time is ${new Date()}`)
  }
}
