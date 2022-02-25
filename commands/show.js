const config = require('./../services/config')
const chalk = require('chalk')

function show () {
    const kafkaServer = config.getSelected()
    if (kafkaServer) {
        console.log(
          chalk.yellowBright(`Selected: ${JSON.stringify(kafkaServer, null, 2)}`)
        )
    } else {
        console.log(
          chalk.red.bold('You don\'t have a kafka yet.')
        )
    }
}
module.exports = show
