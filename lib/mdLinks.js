/* eslint-disable no-console */
const {
  isValidPath,
  extractLinks,
  validateLinks,
} = require('./utils.js');

const mdLinks = (route, options) => {
  const newPromise = new Promise((resolve, reject) => {
    let extLinks = [];
    if (isValidPath(route) === false) {
      reject(new Error('No encontró links'));
    } else {
      if (options.validate === true) {
        extLinks = validateLinks(route);
        resolve(extLinks);
      }
      extLinks = extractLinks(route);
      resolve(extLinks);
    }
  });
  return newPromise;
};

// mdLinks(dirPath, { validate: true }).then((resolve) => console.log(resolve));

module.exports = { mdLinks };
