const chalk = require('chalk');
const filterData = require('../utils/filterData.util');
const { MultiSelect } = require('enquirer');

module.exports = async (name, data) => {
  const report = data.get('report');
  const countries = filterData(name, report);
  let favs = data.get('favs');

  if (countries.length === 0) {
    return console.log(`${chalk.redBright('Failure')}: nothing found for ${chalk.blue.bold(name)}.\n`);
  }

  if (countries.length === 1 && favs.find((el) => el === countries[0].country)) {
    return console.log(
      `${chalk.redBright('Failure')}: ${chalk.blue.bold(countries[0].country)} already added to favourites.\n`
    );
  }

  if (countries.length === 1) {
    const name = countries[0].state ? countries[0].state : countries[0].country;
    data.set('favs', [...favs, name]);

    return console.log(`${chalk.greenBright('Success')}: ${chalk.blue.bold(name)} added to favourites.\n`);
  }

  let choices = [...countries.map((country) => ({ name: country.state ? country.state : country.country }))];

  const prompt = new MultiSelect({
    name: 'elements',
    message: `${countries.length} items found. Select items to add to favorites.\nPress [SPACE] to select, [ENTER] to confirm:`,
    choices: [...choices.filter((choice) => !favs.find((fav) => fav === choice.name))],
    limit: 10,
  });

  prompt
    .run()
    .then((answers) => {
      if (answers.length === 0) {
        return;
      }

      data.set('favs', [...favs, ...answers]);
      return console.log(
        `${chalk.greenBright('Success')}: ${answers
          .map((answer) => chalk.blue.bold(answer))
          .join(', ')} added to favourites.\n`
      );
    })
    .catch(console.error);
};
