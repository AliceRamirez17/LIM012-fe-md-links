/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

// Enlistar todos los archivos que encuentre en el directorio
const allFiles = () => {
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file);
  });
};

allFiles();

const relPath = './carpeta';

// Encontrar una ruta en específico
const fileExists = fs.existsSync('./carpeta');
console.log(fileExists ? 'La ruta existe' : 'La ruta no existe');

// Identificar la ruta
const absolute = path.isAbsolute(relPath);
if (absolute === true) {
  console.log('la ruta es absoluta');
} else {
  const convertPath = path.resolve(relPath);
  console.log(convertPath);
}
