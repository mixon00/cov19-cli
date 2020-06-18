const chalk = require('chalk');
const { MultiSelect } = require('enquirer');

module.exports = async (name, data) => {
  const favs = data.get('favs');

  if (name) {
    if (favs.includes(name)) {
      data.set('fav', ...favs.filter((ele) => ele !== name));
      return console.log(`${chalk.greenBright('Success')}: ${chalk.blue.bold(name)} removed from favourites.\n`);
    } else {
      return console.log(`${chalk.redBright('Failure')}: ${chalk.blue.bold(name)} not found in favorites.\n`);
    }
  } else {
    const prompt = new MultiSelect({
      name: 'favs',
      message: `Select items to remove from favorites.\nPress [SPACE] to select, [ENTER] to confirm:`,
      choices: [...favs],
      limit: 10,
    });

    prompt
      .run()
      .then((answers) => {
        if (answers.length === 0) {
          return;
        }

        data.set(
          'favs',
          favs.filter((el) => !answers.includes(el))
        );

        return console.log(
          `${chalk.greenBright('Success')}: ${answers
            .map((answer) => chalk.blue.bold(answer))
            .join(', ')} removed from favourites.\n`
        );
      })
      .catch(console.error);
  }
};
