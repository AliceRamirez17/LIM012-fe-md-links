const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');
const { statsInfo, statsValidate } = require('./stats.js');

// console.log(chalk.blue('Hello world!'));

const val = process.argv.indexOf('--validate') >= 0;
const sta = process.argv.indexOf('--stats') >= 0;

const dirPath = '../test/carpeta';

const cli = (route, validate, stats) => {
  if (validate && stats) {
    return mdLinks(route, { validate })
      .then((links) => console.log(statsValidate(links)))
      .catch(() => new Error('No se encontraron links'));
  }
  if (stats) {
    return mdLinks(route, { validate })
      .then((links) => console.log(statsInfo(links)))
      .catch(() => new Error('No se encontraron links'));
  }
  return mdLinks(route, { validate })
    .then((links) => console.log(links))
    .catch(() => new Error('No se encontraron links'));
};

console.log(cli(dirPath, val, sta));
