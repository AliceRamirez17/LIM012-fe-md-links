const chalk = require('chalk');

const showExtractLink = (obj) => {
  let contentExtractLink = '';
  obj.forEach((element) => {
    contentExtractLink += `
    ${chalk.rgb(0, 255, 255)(element.file)} ${chalk.rgb(205, 0, 185)(element.href)} ${element.text}`;
  });
  return contentExtractLink;
};

const showValidateLink = (obj) => {
  let contentValidateLink = '';
  obj.forEach((element) => {
    contentValidateLink += `
    ${chalk.rgb(0, 255, 255)(element.file)} ${chalk.rgb(205, 0, 185)(element.href)} ${element.status < 400 ? chalk.green(element.status) : chalk.red(element.status)} ${element.statusText === 'OK' ? chalk.green(element.statusText) : chalk.red(element.statusText)} ${element.text}`;
  });
  return contentValidateLink;
};

module.exports = {
  showExtractLink,
  showValidateLink,
};
