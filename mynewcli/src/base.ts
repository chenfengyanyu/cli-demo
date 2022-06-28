import {Command, Flags} from '@oclif/core'

export default abstract class extends Command {
  // Move all args to the front of the argv to get around: https://github.com/oclif/oclif/issues/190
  parse(options: any, argv = this.argv): any {
    const flagDefinitions = (this.constructor as any).flags;

    const args = [];
    const flags = [];
    let isFlagOption = false;
    for (const arg of argv) {
      const isFlag = arg.startsWith('-');

      if (isFlag || isFlagOption) {
        flags.push(arg);
      } else {
        args.push(arg);
      }

      if (isFlag) {
        const flagDefinition = arg.startsWith('--') ? flagDefinitions[arg.replace('--', '')] : Object.values(flagDefinitions).find((f: any) => f.char === arg.replace('-', ''));
        isFlagOption = flagDefinition?.type === 'option';
      } else {
        isFlagOption = false;
      }
    }

    return super.parse(options, [...args, ...flags]);
  }
}