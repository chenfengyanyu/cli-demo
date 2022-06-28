import { Hook } from '@oclif/config'

export default const hook: Hook<'init'> = async function (options) {
  console.log(`example init hook running before ${options.id}`)
}
