const {
  isValidPath,
  extractLinks,
  validateLinks,
} = require('./utils.js');

const dirPath = './lib/carpeta';
const relPath = './lib/carpeta/archive.md';

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

console.log(mdLinks(dirPath, { validate: true }));
