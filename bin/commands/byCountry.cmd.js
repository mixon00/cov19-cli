const chalk = require('chalk');
const table = require('../utils/table.util');
const filterData = require('../utils/filterData.util');

const format = (val) => {
  if (val < 0) {
    return 'Unknown';
  }

  return val;
};

module.exports = (name, json) => {
  let countries = filterData(name, json);

  const dataTable = table(
    countries.map(
      ({ confirmed, recovered, deaths, critical, tests, country, daily_confirmed, daily_deaths, state }) => [
        chalk.bold.white(state ? state : country),
        `${chalk.bold.blue(format(confirmed).toLocaleString())}${
          daily_confirmed > 0 ? `\n${chalk.blue(`(+${daily_confirmed})`)}` : ''
        }`,
        `${chalk.bold.red(format(deaths).toLocaleString())}${
          daily_deaths > 0 ? `\n${chalk.red(`(+${daily_deaths})`)}` : ''
        }`,
        chalk.bold.magenta(format(critical).toLocaleString()),
        chalk.bold.yellow(format(confirmed - deaths - recovered).toLocaleString()),
        chalk.bold.cyan(format(tests).toLocaleString()),
        chalk.bold.greenBright(format(recovered).toLocaleString()),
      ]
    )
  );

  console.log(dataTable.toString());
};
