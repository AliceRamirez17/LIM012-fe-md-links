const fs = require('fs');
const path = require('path');
const marked = require('marked');
const axios = require('axios');

// Valida la ruta
const isValidPath = (route) => fs.existsSync(route);

// const dirPath = '../test/carpeta';

// Verifica si la ruta es absoluta
const isAbsolutePath = (route) => path.isAbsolute(route);

// Convierte la ruta a absoluta
const getAbsolute = (route) => (isAbsolutePath(route) ? route : path.resolve(route));

// Verifica si es un file
const isFile = (route) => fs.statSync(route).isFile();

// Leer un directorio
const readDirectory = (route) => fs.readdirSync(route);

// Extensión de un file
const fileExt = (route) => path.extname(route);

// Función recursiva
const getMdFile = (route) => {
  let arrFiles = [];
  const newRoute = getAbsolute(route);
  // caso base
  if (isFile(newRoute) === true) {
    if (fileExt(route) === '.md') {
      arrFiles.push(newRoute);
    }
  } else {
    readDirectory(route).forEach((file) => {
      const completeRoute = path.join(route, file);
      const allFiles = getMdFile(completeRoute);
      arrFiles = arrFiles.concat(allFiles);
    });
  }
  return arrFiles;
};

const readFile = (file) => fs.readFileSync(file, 'utf-8');

const extractLinks = (route) => {
  const arrLinks = [];
  getMdFile(route).forEach((file) => {
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      const newObj = {
        href,
        text,
        file,
      };
      arrLinks.push(newObj);
    };
    marked(readFile(file), { renderer });
  });
  return arrLinks;
};

const validateLinks = (route) => {
  const arrValidate = [];
  const arrLinksMD = extractLinks(route);
  // Petición HTTP
  arrLinksMD.forEach((element) => {
    arrValidate.push(axios.get(element.href)
      .then((response) => {
        const newObj = {
          ...element,
          status: response.status,
          statusText: 'OK',
        };
        return newObj;
      })
      .catch(() => ({
        ...element,
        status: 400,
        statusText: 'FAIL',
      })));
  });
  return Promise.all(arrValidate);
};

module.exports = {
  isValidPath,
  isAbsolutePath,
  getAbsolute,
  isFile,
  readDirectory,
  fileExt,
  getMdFile,
  readFile,
  extractLinks,
  validateLinks,
};
