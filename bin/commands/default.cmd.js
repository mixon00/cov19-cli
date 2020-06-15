const fetch = require('node-fetch');
const ora = require('ora');
const chalk = require('chalk');

module.exports = async () => {
	const spinner = ora('Loading data').start();
	try {
		const response = await fetch('https://cov19.cc/report.jsond');
		const json = await response.json();

		spinner.stop();
		console.log(json.regions.world.totals);
	} catch (error) {
		spinner.stop();
		console.error(chalk.red('Error - unable fetch data!'));
	}
};
