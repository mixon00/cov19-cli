const chalk = require('chalk');
const table = require('../utils/table.util');

module.exports = async (json) => {
  const { confirmed, recovered, deaths, critical, tests } = json.regions.world.totals;
  const dataTable = table([
    chalk.bold.white('Worldwide'),
    chalk.bold.blue(confirmed.toLocaleString()),
    chalk.bold.red(deaths.toLocaleString()),
    chalk.bold.magenta(critical.toLocaleString()),
    chalk.bold.yellow((confirmed - deaths - recovered).toLocaleString()),
    chalk.bold.cyan(tests.toLocaleString()),
    chalk.bold.greenBright(recovered.toLocaleString()),
  ]);
  console.log(dataTable.toString());
};
