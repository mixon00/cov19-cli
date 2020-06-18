const chalk = require('chalk');

module.exports = (data) => {
  const favs = data.get('favs');

  favs.forEach((fav, index) => {
    console.log(`${index + 1}. ${chalk.bold(fav)}`);
  });
};
