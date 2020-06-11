const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');
const { statsInfo } = require('./stats.js');

// console.log(chalk.blue('Hello world!'));

const val = process.argv.indexOf('--validate') >= 0;
const sta = process.argv.indexOf('--stats') >= 0;

const dirPath = '../test/carpeta';
// mdLinks(dirPath, { validate: true }).then((resolve) => console.log(resolve));

const cli = (route, validate, stats) => {
  const consumeMdLinks = mdLinks(route, { validate })
    .then((links) => console.log(links))
    .catch(() => new Error('No se encontraron links'));

  if (validate && stats) {
    return consumeMdLinks;
  }
  if (stats) {
    return statsInfo();
  }
  return consumeMdLinks;
};

console.log(cli(dirPath, val, sta));
