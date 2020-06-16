#!/usr/bin/env node

/* eslint-disable no-console */
const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');
const { statsInfo, statsValidate } = require('./stats.js');

const path = process.argv[2];
const val = process.argv.indexOf('--validate') >= 0;
const sta = process.argv.indexOf('--stats') >= 0;

const helpOptions = chalk.red.inverse.bgWhite`
  -------------- options ------------------`
  + chalk.bold.green`
  validate ------------> --validate
  stats ---------------> --stats
  validate & stats ----> --validate --stats
  -----------------------------------------
`;

const cli = (route, validate, stats) => {
  if (route === undefined || validate === undefined || stats === undefined) {
    return console.log(helpOptions);
  }
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

cli(path, val, sta);
