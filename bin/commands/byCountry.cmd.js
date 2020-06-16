const chalk = require('chalk');
const table = require('../utils/table.util');

const format = (val) => {
  if (val < 0) {
    return 'Unknown';
  }

  return val;
};

const filterCountries = (name, country) =>
  (country.country && country.country.toLowerCase() === name.toLowerCase()) ||
  (country.country_code && country.country_code === name.toLowerCase());

module.exports = (name, json) => {
  let countries = json.regions.world.list.filter((country) => filterCountries(name, country));
  countries = [...countries, ...json.regions.unitedstates.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.canada.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.china.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.australia.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.ships.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.italy.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.italy.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.russia.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.ireland.list.filter((country) => filterCountries(name, country))];

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
