const chalk = require('chalk');
const table = require('../utils/table.util');
const filterData = require('../utils/filterData.util');
const asciichart = require('asciichart');

const format = (val) => {
  if (val < 0) {
    return 'Unknown';
  }

  return val;
};

module.exports = (name, report, cmd, trend) => {
  let countries = filterData(name, report);

  if (countries.length === 0) {
    return console.log(`${chalk.redBright('Failure')}: nothing found for ${chalk.blue.bold(name)}.\n`);
  }

  let dataTable = table(
    countries
      .map(({ confirmed, recovered, deaths, critical, tests, country, daily_confirmed, daily_deaths, state }) => {
        let row = [
          [
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
          ],
        ];

        if (cmd.stats) {
          const barsConfig = { colors: [asciichart.red, asciichart.blue, asciichart.green], height: 15 };
          const trends = trend[`${(country + (state ? state : '')).replace(/\s/g, '').toLowerCase()}`];
          if (trends) {
            const keys = Object.keys(trends);
            const deathsBars = keys
              .map((key) => (trends[key].deaths !== undefined ? trends[key].deaths : 0))
              .slice(-100);
            const confirmedBars = keys
              .map((key) => (trends[key].confirmed !== undefined ? trends[key].confirmed : 0))
              .slice(-100);
            const recoveredBars = keys
              .map((key) => (trends[key].recovered !== undefined ? trends[key].recovered : 0))
              .slice(-100);

            row.push([
              {
                colSpan: 7,
                content: `${asciichart.plot([deathsBars, confirmedBars, recoveredBars], barsConfig)}\n${chalk.bgRed(
                  'Deceased:'
                )} ${chalk.bgBlue('Confirmed:')} ${chalk.bgGreen('Recovered:')}`,
                hAlign: 'center',
              },
            ]);
          }
        }

        return row;
      })
      .reduce((a, b) => a.concat(b))
  );

  if (cmd.limit) {
    const hasStats = cmd.stats ? 2 : 1;
    if (cmd.limit.includes(':')) {
      const [from, limit] = cmd.limit.split(':').map((val) => parseInt(val, 10));
      dataTable = dataTable.slice((from - 1) * hasStats, (from - 1 + limit) * hasStats);
    } else {
      dataTable = dataTable.slice(0, parseInt(cmd.limit, 10) * hasStats);
    }
  }

  console.log(dataTable.toString());
};
