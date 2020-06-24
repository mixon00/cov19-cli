#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { program } = require('commander');
const Configstore = require('configstore');

const pkg = require(path.join(__dirname, '../package.json'));
const cache = new Configstore(pkg.name, { lastUpdate: null, report: null, trend: null, favs: [] });

const defaultCmd = require('./commands/default.cmd');
const byCountryCmd = require('./commands/byCountry.cmd');
const addCmd = require('./commands/add.cmd');
const removeCmd = require('./commands/remove.cmd');
const listCmd = require('./commands/list.cmd');

const logo = require('./utils/logo.util');
const api = require('./constants/api.constant');

const lastUpdateService = require('./services/lastUpdate.service');
const reportService = require('./services/report.service');
const trendService = require('./services/trend.service');

logo();

const hasUpdatedData = async () => {
  const spinner = ora('Checking if data is updated').start();
  const lastUpdate = await lastUpdateService();

  if (cache.get('lastUpdate') !== lastUpdate) {
    spinner.text = 'Fetching report data';
    const report = await reportService();

    spinner.text = 'Fetching trend data';
    const trend = await trendService();

    cache.set('lastUpdate', lastUpdate);
    cache.set('report', report);
    cache.set('trend', trend);
  }

  spinner.stop();
};

(async () => {
  if (!process.argv.slice(2).length) {
    await hasUpdatedData();
    defaultCmd(cache);
  }

  program.version(pkg.version).description(pkg.description);

  program
    .arguments('[country]')
    .description('Show stats for selected country by country name, code or state')
    .option('-a, --add', 'Add to favourites')
    .option('-r, --remove', 'Remove from favourites')
    .option('-f, --favourites', 'Show list of favourites')
    .option('-s, --stats', 'Show detailed stats')
    .action(async (country, cmd) => {
      if (cmd.add && cmd.remove) {
        console.error(chalk.red('Choose only one option: --add or --remove'));
        return process.exit(1);
      }

      if (cmd.add) {
        await hasUpdatedData();
        return addCmd(country, cache);
      }

      if (cmd.remove) {
        return removeCmd(country, cache);
      }

      if (country) {
        await hasUpdatedData();
        const report = cache.get('report');
        const trend = cache.get('trend');
        return byCountryCmd(country, report, cmd.stats, trend);
      }

      if (cmd.favourites) {
        return listCmd(cache);
      }

      if (cmd.stats) {
        await hasUpdatedData();
        const report = cache.get('report');
        const trend = cache.get('trend');
        return defaultCmd(cache, cmd.stats, trend);
      }
    });

  program.on('command:*', () => {
    console.error(`${chalk.red('Invalid command: ', program.args.join(' '))}\n`);

    program.outputHelp((help) => chalk.yellowBright(help));

    process.exit(1);
  });

  program.parse(process.argv);
})();
