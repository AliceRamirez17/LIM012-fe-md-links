const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');

// console.log(chalk.blue('Hello world!'));

const arrArgs = process.argv.slice(2);

const dirPath = './carpeta';
// mdLinks(dirPath, { validate: true }).then((resolve) => console.log(resolve));


const cli = (route, myArgs) => {
  if (myArgs[0] === route) {
    return mdLinks(route, { validate: false })
      .then((links) => console.log(links))
      .catch((err) => console.log('Error:', err));
  }
  if (myArgs[1] === '--validate') {
    return mdLinks(route, { validate: true })
      .then((arrHTTP) => console.log(arrHTTP))
      .catch((err) => console.log('Error:', err));
  }
};

console.log(cli(dirPath, arrArgs));
