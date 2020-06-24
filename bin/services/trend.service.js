const chalk = require('chalk');
const fetch = require('node-fetch');
const api = require('../constants/api.constant');

module.exports = async () => {
  try {
    const reportResponse = await fetch(api.trend);
    const report = await reportResponse.json();
    return report;
  } catch (error) {
    console.error(chalk.red('Error - unable fetch trend data!'));
    console.error(chalk.red(error));
    process.exit(1);
  }
};
