#!/usr/bin/env node

const path = require('path');
const program = require('commander');

const pkg = require(path.join(__dirname, '../package.json'));

const defaultCmd = require('./commands/default.cmd');

program.version(pkg.version).description(pkg.description);
program.parse(process.argv);

if (!process.argv.slice(2).length) {
	defaultCmd();
}
