const { Command, flags: Flags } = require('@oclif/command');

export default class BaseCommand extends Command {
  static   flags = {
    config: Flags.string({ description: 'The config.json file', required: false }),
  };
  async init() {
    const { flags } = this.parse(BaseCommand);

    this.flags = flags;
  }
}

