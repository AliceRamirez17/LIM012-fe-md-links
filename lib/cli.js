#!/usr/bin/env node

/* eslint-disable no-console */
const chalk = require('chalk');
const figlet = require('figlet');
const mdLinks = require('./mdLinks.js');
const { statsInfo, statsValidate } = require('./stats.js');
const { showExtractLink, showValidateLink } = require('./cliOptions.js');

const path = process.argv[2];
const val = process.argv.indexOf('--validate') >= 0;
const sta = process.argv.indexOf('--stats') >= 0;

const helpOptions = figlet.textSync('md-links')
  + chalk.white`
  Md-links is a library that parses and finds links in Markdown files.\n`
  + chalk.rgb(205, 0, 185).inverse.bgWhite.bold`
  -------------- Options ------------------\n`
  + chalk.white`
  List of links and HTTP analysis:`
  + chalk.rgb(0, 255, 255)`
  validate ------------> --validate\n`
  + chalk.white`
  Statistics of unique and broken links:`
  + chalk.rgb(0, 255, 255)`
  stats ---------------> --stats
  validate & stats ----> --validate --stats
  -----------------------------------------
`;

const cli = (route, validate, stats) => {
  if (route === '--help' || validate === '--help' || stats === '--help') {
    return console.log(helpOptions);
  }
  if (route === undefined || validate === undefined || stats === undefined) {
    return console.log(helpOptions);
  }
  if (validate && stats) {
    return mdLinks(route, { validate })
      .then((links) => console.log(statsValidate(links)))
      .catch(() => new Error('Doesn\'t exist links'));
  }
  if (validate) {
    return mdLinks(route, { validate })
      .then((links) => console.log(showValidateLink(links)))
      .catch(() => new Error('Doesn\'t exist links'));
  }
  if (stats) {
    return mdLinks(route, { validate })
      .then((links) => console.log(statsInfo(links)))
      .catch(() => new Error('Doesn\'t exist links'));
  }
  return mdLinks(route, { validate })
    .then((links) => console.log(showExtractLink(links)))
    .catch(() => new Error('Doesn\'t exist links'));
};

cli(path, val, sta);
