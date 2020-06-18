const chalk = require('chalk');
const table = require('../utils/table.util');
const byCountry = require('./byCountry.cmd');

module.exports = async (data) => {
  const favs = data.get('favs');
  const report = data.get('report');
  const { confirmed, recovered, deaths, critical, tests } = report.regions.world.totals;
  const results = [
    [
      chalk.bold.white('Worldwide'),
      chalk.bold.blue(confirmed.toLocaleString()),
      chalk.bold.red(deaths.toLocaleString()),
      chalk.bold.magenta(critical.toLocaleString()),
      chalk.bold.yellow((confirmed - deaths - recovered).toLocaleString()),
      chalk.bold.cyan(tests.toLocaleString()),
      chalk.bold.greenBright(recovered.toLocaleString()),
    ],
  ];

  const dataTable = table(results);
  console.log(dataTable.toString());

  if (favs.length > 0) {
    console.log(chalk.bold('\n Favourites:'));
    byCountry(favs, report);
  }
};
