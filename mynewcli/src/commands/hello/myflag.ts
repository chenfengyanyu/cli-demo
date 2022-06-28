import {Command, Flags} from '@oclif/core'

export default class MyFlag extends Command {
  static description = 'Flag Demo'
  
  static flags = {
    // can pass either --force or -f
    force: Flags.boolean({char: 'f'}),
    file: Flags.string(),
  }
  

  async run(){
    this.log(`${JSON.stringify(this.parse(MyFlag))}`)
    // const {flags} = this.parse(MyFlag)
    // if (flags.force) console.log('--force is set')
    // if (flags.file) console.log(`--file is: ${flags.file}`)
  }
}