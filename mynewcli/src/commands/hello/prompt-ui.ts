import { Command, Flags } from '@oclif/core'
import cli from 'cli-ux'

export default class PromptUI extends Command {
  static description = 'UI plugin case'

  async run(): Promise<void> {
    await cli.prompt('What is your name?')
    // mask input on keypress (before enter is pressed)
    await cli.prompt('What is your password?', { type: 'hide' })
  }
}