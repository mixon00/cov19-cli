const chalk = require('chalk');
const emoji = require('node-emoji');
const table = require('../utils/table.util');

module.exports = async (json) => {
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
};
