/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const marked = require('marked');

// // Enlistar todos los archivos que encuentre en el directorio
// const allFiles = () => {
//   fs.readdirSync(__dirname).forEach((file) => {
//     console.log(file);
//   });
// };

// allFiles();

const relPath = './carpeta/data.md';

const dirPath = './carpeta';
const filePath = './carpeta/data.md';
const anotherPath = './carpeta/data.txt';

// Encontrar una ruta en específico
const fileExists = fs.existsSync('./carpeta');
console.log(fileExists ? 'La ruta existe' : 'La ruta no existe');

// Identificar la ruta
const absolute = path.isAbsolute(relPath);
if (absolute === true) {
  console.log('la ruta es absoluta');
} else {
  // Convertir ruta relativa a absoluta
  const convertPath = path.resolve(relPath);
  console.log('Ruta convertida a absoluta', convertPath);
}

// Función recursiva
const recursion = (onePath) => {
  const arrFiles = [];
  // caso base
  if (fs.statSync(onePath).isFile() === true) {
    arrFiles.push(onePath);
  } else {
    fs.readdirSync(onePath).forEach((file) => {
      const arr = ['./carpeta/'];
      arr.push(file);
      const fileToPath = path.resolve(arr.join(''));
      recursion(fileToPath);
      arrFiles.push(fileToPath);
    });
  }
  return arrFiles;
};

recursion(dirPath).forEach((file) => {
  console.log(file);
  const contentFile = fs.readFileSync(file, 'utf-8');
  console.log(marked(contentFile));
});

// // Verificar la extensión .md
// const verifyExt = () => {
//   const baseName = path.basename(filePath);
//   if (path.extname(baseName) === '.md') {
//     console.log('path is a .md file');
//   } else {
//     console.log('path is not a .md file');
//   }
// };

// verifyExt();

// const pathAbs = path.resolve(filePath);
// console.log(pathAbs);

// // Leer data de un file
// fs.readlink(pathAbs, (err, linkString) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(linkString);
//   }
// });

// Directorio actual
// console.log(`Current directory: ${process.cwd()}`);
