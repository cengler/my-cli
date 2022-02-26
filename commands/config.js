const config = require('./../services/config')
const chalk = require('chalk')
const inquirer = require('inquirer');
const _ = require("lodash");

async function showConfig () {
  const currentConfig = config.getConfig()
  console.log(
    chalk.yellowBright(`Config: ${JSON.stringify(currentConfig, null, 2)}`)
  )
}

async function updateConfig () {
  let cs = config.getConfig()
  const qs = config.configValues.map(
    c => ({
      type: 'list',
      name: c.config,
      message: c.config, // TODO c.message,
      default: cs[c.config],
      choices: c.values,
    })
  )
  inquirer.prompt(qs)
    .then(answers => {
      Object.keys(answers).forEach(c => cs[c] = answers[c])
      config.setConfig(cs)
    })
}


module.exports = {
  showConfig,
  updateConfig
}
