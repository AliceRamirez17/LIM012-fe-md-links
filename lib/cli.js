const { mdLinks } = require('./mdLinks.js');

const dirPath = './carpeta';
mdLinks(dirPath, { validate: true }).then((resolve) => console.log(resolve));
