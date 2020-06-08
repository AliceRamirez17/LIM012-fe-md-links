const {
  isValidPath,
  extractLinks,
  // validateLinks,
} = require('./utils.js');

const dirPath = './lib/carpeta';

const mdLinks = (route) => {
  const newPromise = new Promise((resolve, reject) => {
    let extLinks = [];
    if (isValidPath(route) === false) {
      reject(new Error('No encontró links'));
    } else {
      extLinks = extractLinks(route);
      resolve(extLinks);
    }
  });
  return newPromise;
};

console.log(mdLinks(dirPath));
