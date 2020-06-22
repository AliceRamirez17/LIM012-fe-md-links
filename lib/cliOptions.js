const chalk = require('chalk');

const showExtractLink = (obj) => {
  let contentExtractLink = '';
  obj.forEach((element) => {
    contentExtractLink += `
    ${element.file} ${element.href} ${element.text}`;
  });
  return contentExtractLink;
};

const showValidateLink = (obj) => {
  let contentValidateLink = '';
  obj.forEach((element) => {
    contentValidateLink += `
    ${chalk.rgb(0, 255, 255)(element.file)} ${element.href} ${element.status < 400 ? chalk.green(element.status) : chalk.red(element.status)} ${element.statusText === 'OK' ? chalk.green(element.statusText) : chalk.red(element.statusText)} ${element.text}`;
  });
  return contentValidateLink;
};

module.exports = {
  showExtractLink,
  showValidateLink,
};
