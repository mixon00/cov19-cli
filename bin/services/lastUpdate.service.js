const chalk = require('chalk');
const fetch = require('node-fetch');
const api = require('../constants/api.constant');

module.exports = async () => {
  try {
    const lastUpdateResponse = await fetch(api.last_update);
    const lastUpdate = await lastUpdateResponse.text();
    return lastUpdate;
  } catch (error) {
    console.error(chalk.red('Error - unable fetch data!'));
    console.error(chalk.red(error));
    process.exit(1);
  }
};
