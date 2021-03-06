import { Command, Flags } from '@oclif/core'
// import { Input } from '@oclif/parser';
// import BaseCommand from '../../base'

export default class MyCLI extends Command {
  static description = 'Args Demo'

  static args = [
    {
      name: 'firstArg',
      required: true,
    },
    { name: 'secondArg' },
  ]

  public async run(): Promise<void> {
    // 通过对象的形式获取参数
    const { args } = await this.parse(MyCLI)
    console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
    // 也可以通过数组的形式获取参数
    const {argv} = await this.parse(MyCLI)
    console.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}