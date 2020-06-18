const chalk = require('chalk');
const fetch = require('node-fetch');
const api = require('../constants/api.constant');

module.exports = async () => {
  try {
    const reportResponse = await fetch(api.report);
    const report = await reportResponse.json();
    return report;
  } catch (error) {
    console.error(chalk.red('Error - unable fetch data!'));
    console.error(chalk.red(error));
    process.exit(1);
  }
};
