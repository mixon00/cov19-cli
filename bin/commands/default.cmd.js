const fetch = require('node-fetch');
const ora = require('ora');
const chalk = require('chalk');
const emoji = require('node-emoji');
const table = require('../utils/table.util');

module.exports = async () => {
  const spinner = ora('Fetching data').start();
  try {
    const response = await fetch('https://cov19.cc/report.json');
    const json = await response.json();
    spinner.stop();

    const { confirmed, recovered, deaths, critical, tests } = json.regions.world.totals;
    const dataTable = table([
      chalk.bold.white(`${emoji.get('earth_africa')} Global`),
      chalk.bold.blue(confirmed.toLocaleString()),
      chalk.bold.red(deaths.toLocaleString()),
      chalk.bold.magenta(critical.toLocaleString()),
      chalk.bold.yellow((confirmed - deaths - recovered).toLocaleString()),
      chalk.bold.cyan(tests.toLocaleString()),
      chalk.bold.greenBright(recovered.toLocaleString()),
    ]);
    console.log(dataTable.toString());
  } catch (error) {
    spinner.stop();
    console.error(chalk.red('Error - unable fetch data!'));
    console.error(chalk.red(error));
  }
};
