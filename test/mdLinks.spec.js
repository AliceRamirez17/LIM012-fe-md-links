const { mdLinks } = require('../lib/mdLinks.js');

const relPath = './test/carpeta/data.md';
const invalidPath = './testeo/carpeta/data.md';

const arrLinks = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\test\\carpeta\\data.md',
  },
  {
    href: 'https://developers.google.com/v7/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\test\\carpeta\\data.md',
  },
  {
    href: 'https://developers.google.com/v7/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\test\\carpeta\\data.md',
  },
];

const arrLinksValidate = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\test\\carpeta\\data.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://developers.google.com/v7/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\test\\carpeta\\data.md',
    status: 400,
    statusText: 'FAIL',
  },
  {
    href: 'https://developers.google.com/v7/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\test\\carpeta\\data.md',
    status: 400,
    statusText: 'FAIL',
  },
];

describe('mdLinks', () => {
  // ruta inválida
  test('la respuesta es un mensaje de error', () => {
    expect(mdLinks(invalidPath, '')).rejects.toThrow('Invalid path');
  });
  // false
  test('la respuesta es un array de objetos {href, text, file}', () => {
    mdLinks(relPath, false)
      .then((data) => {
        expect(data).toEqual(arrLinks);
      });
  });
  // true
  test('la respuesta es un array de objetos {href, text, file, status, statusText}', () => {
    mdLinks(relPath, true)
      .then((data) => {
        expect(data).toEqual(arrLinksValidate);
      });
  });
});
