#!/usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const { program } = require('commander');

const pkg = require(path.join(__dirname, '../package.json'));

const defaultCmd = require('./commands/default.cmd');

const logo = require('./utils/logo.util');

logo();

program
  .version(pkg.version)
  .description(pkg.description)
  .on('command:*', () => {
    console.error(`${chalk.red('Invalid command: ', program.args.join(' '))}\n`);

    program.outputHelp((help) => chalk.yellowBright(help));

    process.exit(1);
  })
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  defaultCmd();
}
