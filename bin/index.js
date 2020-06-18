#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const fetch = require('node-fetch');
const ora = require('ora');
const { program } = require('commander');
const Configstore = require('configstore');

const pkg = require(path.join(__dirname, '../package.json'));
const cache = new Configstore(pkg.name, { lastUpdate: null, data: null, favs: [] });

const defaultCmd = require('./commands/default.cmd');
const byCountryCmd = require('./commands/byCountry.cmd');
const addCmd = require('./commands/add.cmd');
const removeCmd = require('./commands/remove.cmd');

const logo = require('./utils/logo.util');
const api = require('./constants/api.constant');

logo();

(async () => {
  const spinner = ora('Fetching data').start();
  try {
    const lastUpdateResponse = await fetch(api.last_update);
    const lastUpdate = await lastUpdateResponse.text();

    if (cache.get('lastUpdate') !== lastUpdate) {
      const reportResponse = await fetch(api.report);
      const data = await reportResponse.json();

      cache.set('lastUpdate', lastUpdate);
      cache.set('data', data);
    }

    let report = cache.get('data');

    spinner.stop();

    if (!process.argv.slice(2).length) {
      defaultCmd(report, cache);
    }

    program.version(pkg.version).description(pkg.description);

    program
      .arguments('[country]')
      .description('Show stats for selected country by country name, code or state')
      .option('-a, --add', 'Add to favourites')
      .option('-r, --remove', 'Remove from favourites')
      .action((country, cmd) => {
        if (cmd.add && cmd.remove) {
          console.error(chalk.red('Choose only one option: --add or --remove'));
          return process.exit(1);
        }

        if (cmd.add) {
          return addCmd(country, report, cache);
        }

        if (cmd.remove) {
          return removeCmd(country, cache);
        }

        if (country) {
          return byCountryCmd(country, report);
        }
      });

    program.on('command:*', () => {
      console.error(`${chalk.red('Invalid command: ', program.args.join(' '))}\n`);

      program.outputHelp((help) => chalk.yellowBright(help));

      process.exit(1);
    });

    program.parse(process.argv);
  } catch (error) {
    spinner.stop();
    console.error(chalk.red('Error - unable fetch data!'));
    console.error(chalk.red(error));
    process.exit(1);
  }
})();
