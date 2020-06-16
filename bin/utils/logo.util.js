const figlet = require('figlet');
const chalk = require('chalk');

module.exports = () => {
  console.log(
    chalk.bold.white(
      figlet.textSync('COV19', {
        font: 'Varsity',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    )
  );
  console.log(`    ${chalk.bold.yellow('COVID-19')} CLI Tool by: ${chalk.bold.blue('Mateusz Misztoft')}\n`);
};
