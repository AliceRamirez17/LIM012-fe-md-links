const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');

// console.log(chalk.blue('Hello world!'));

const dirPath = './carpeta';
mdLinks(dirPath, { validate: true }).then((resolve) => console.log(resolve));


const cli = (route, options) => {
  if (options.validate) {
    mdLinks(route, { validate: true })
      .then((resolve) => {
        console.log(resolve);
      });
  } else if (options.stats) {

  } else if (options.stats && options.validate) {
      
  }
};
