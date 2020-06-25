const { mdLinks } = require('../lib/mdLinks.js');
const mock = require('../__mocks__/axios');

const relPath = './test/carpeta/data.md';
const onePath = './test/carpeta/oneLink.md';
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
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\test\\carpeta\\oneLink.md',
    status: 200,
    statusText: 'OK',
  },
];

describe('mdLinks', () => {
  // ruta inválida
  test('la respuesta es un mensaje de error', () => {
    expect(mdLinks(invalidPath, { validate: undefined })).rejects.toThrow('Invalid path');
  });
  // false
  it('la respuesta es un array de objetos {href, text, file}', (done) => {
    mdLinks(relPath, { validate: false })
      .then((data) => {
        expect(data).toEqual(arrLinks);
        done();
      });
  });
  // true
  it('la respuesta es un array de objetos {href, text, file, status, statusText}', (done) => {
    mock.get.mockImplementationOnce(() => Promise.resolve({ status: 200, statusText: 'OK' }));
    mdLinks(onePath, { validate: true })
      .then((data) => {
        expect(data).toEqual(arrLinksValidate);
        done();
      });
  });
});
