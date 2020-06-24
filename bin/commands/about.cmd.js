const chalk = require('chalk');

module.exports = () => {
  console.log('\n');
  console.log(
    `${chalk.whiteBright('Author:')}\n${chalk.bold.yellowBright('Mateusz "mixon00" Misztoft')}\n${chalk.cyanBright(
      'mixon00@gmail.com'
    )}\n${chalk.blueBright('https://misztoft.pl')}\n`
  );
  console.log(chalk.whiteBright('Find me on:'));
  console.log(`${chalk.gray('Github:')} ${chalk.bold.gray('https://github.com/mixon00')}`);
  console.log(`${chalk.blueBright('Twitter:')} ${chalk.bold.blueBright('https://twitter.com/mixon00')}`);
  console.log(`${chalk.magentaBright('Instagram:')} ${chalk.bold.magentaBright('https://instagram.com/mixon00')}`);
  console.log(
    `${chalk.blueBright('Facebook:')} ${chalk.bold.blueBright('https://www.facebook.com/mateusz.misztoft')}\n`
  );
  console.log(`You can buy me a coffee: ${chalk.bold.red('https://ko-fi.com/mixon00')}`);
  console.log('\n');
  console.log(
    `Many thanks to ${chalk.bold('Daniel Conlon')} for sharing the API.\nYou can follow his Twitter: ${chalk.bold.blueBright(
      'https://twitter.com/TheDanielConlon'
    )}`
  );
  console.log('\n');
};
