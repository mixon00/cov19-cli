#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const fetch = require('node-fetch');
const ora = require('ora');
const { program } = require('commander');

const pkg = require(path.join(__dirname, '../package.json'));

const defaultCmd = require('./commands/default.cmd');
const byCountry = require('./commands/byCountry.cmd');

const logo = require('./utils/logo.util');

logo();

(async () => {
  const spinner = ora('Fetching data').start();
  try {
    const response = await fetch('https://cov19.cc/report.json');
    const json = await response.json();
    spinner.stop();

    if (!process.argv.slice(2).length) {
      defaultCmd(json);
    }

    program
      .version(pkg.version)
      .description(pkg.description)
      .option('-c, --country [name or code]', 'Show stats for selected country', (name) =>
        byCountry(name, json)
      )
      .on('command:*', () => {
        console.error(`${chalk.red('Invalid command: ', program.args.join(' '))}\n`);

        program.outputHelp((help) => chalk.yellowBright(help));

        process.exit(1);
      })
      .parse(process.argv);
  } catch (error) {
    spinner.stop();
    console.error(chalk.red('Error - unable fetch data!'));
    console.error(chalk.red(error));
  }
})();
