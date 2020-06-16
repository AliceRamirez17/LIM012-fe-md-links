const {
  isValidPath,
  extractLinks,
  validateLinks,
} = require('./utils.js');

const mdLinks = (route, options) => {
  const newPromise = new Promise((resolve, reject) => {
    let extLinks = [];
    if (isValidPath(route) === false) {
      reject(new Error('La ruta no es válida'));
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

module.exports = { mdLinks };
