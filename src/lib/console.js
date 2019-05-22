//
const validate  = require('./validate')
const chalk     = require('chalk')
const keypress  = require('keypress')

//
module.exports = {

  sourceExists: async (src) => {
    process.stdout.write('\nchecking source exists ... ')
    let sourceExists = await validate.folderExists(src)

    if (sourceExists) {
      process.stdout.write(chalk.yellow('source exists\n'))
      return true
    } else {
      process.stdout.write(chalk.red('source does not exist. Press return to restart.\n'))
      return false  
    }
  }

}