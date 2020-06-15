#!/usr/bin/env node

const path = require('path');

const pkg = require(path.join(__dirname, '../package.json'));

console.log(`${pkg.name} ${pkg.version} ${pkg.description}`);
