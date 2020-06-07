const {
  isAbsolutePath,
  getAbsolute,
  isFile,
  readDirectory,
  fileExt,
  getMdFile,
  readFile,
  extractLinks,
} = require('../src/index.js');

const absolutePath = 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\src\\carpeta\\archive.md';
const relativePath = './src/carpeta/archive.md';
const relPath = './src/carpeta/data.md';
const dirPath = './src/carpeta/';

const arrAllFiles = [
  'archive.md',
  'data.md',
  'data.txt',
];
const arrFilesMD = [
  'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\src\\carpeta\\archive.md',
  'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\src\\carpeta\\data.md',
];

const infoFile = '# Info\n[Node.js](https://nodejs.org/es/)\n[motor de JavaScript V8 de Chrome](https://developers.google.com/v8/)';

const arrLinks = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\src\\carpeta\\data.md',
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\gato_\\Desktop\\LIM012-fe-md-links\\src\\carpeta\\data.md',
  },
];

describe('isAbsolutePath', () => {
  it('isAbsolutePath es una función', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  it('Devuelve true si es una ruta absoluta', () => {
    expect(isAbsolutePath(absolutePath)).toEqual(true);
  });
  it('Devuelve false si no es una ruta absoluta', () => {
    expect(isAbsolutePath(relativePath)).toEqual(false);
  });
});

// Convertir ruta a absoluta
describe('getAbsolute', () => {
  it('getAbsolute es una función', () => {
    expect(typeof getAbsolute).toBe('function');
  });
  it('Devuelve la ruta si esta es absoluta', () => {
    expect(getAbsolute(absolutePath)).toBe(absolutePath);
  });
  it('Convierte una ruta relativa a absoluta', () => {
    expect(getAbsolute(relativePath)).toBe(absolutePath);
  });
});

// Verifica si la ruta es un file
describe('isFile', () => {
  it('isFile es una función', () => {
    expect(typeof isFile).toBe('function');
  });
  it('Devuelve true si la ruta es de un file', () => {
    expect(isFile(absolutePath)).toEqual(true);
  });
});

// Retorna un array todos los files
describe('readDirectory', () => {
  it('readDirectory es una función', () => {
    expect(typeof readDirectory).toBe('function');
  });
  it('Devuelve un array de files', () => {
    expect(readDirectory(dirPath)).toEqual(arrAllFiles);
  });
});

// Verifica la extensión del file
describe('fileExt', () => {
  it('fileExt es una función', () => {
    expect(typeof fileExt).toBe('function');
  });
  it('Devuelve un string con la extensión', () => {
    expect(fileExt(relativePath)).toBe('.md');
  });
});

// Devuelve un array de files con extensión .md
describe('getMdFile', () => {
  it('getMdFile es una función', () => {
    expect(typeof getMdFile).toBe('function');
  });
  it('Devuelve un array de files con extensión .md', () => {
    expect(getMdFile(dirPath)).toEqual(arrFilesMD);
  });
});

// Devuelve la información del file en formato utf-8
describe('readFile', () => {
  it('readFile es una función', () => {
    expect(typeof readFile).toBe('function');
  });
  it('Devuelve un string con la información del file', () => {
    expect(readFile(relPath)).toEqual(infoFile);
  });
});

// Extraer los links de un file
describe('extractLinks', () => {
  it('extractLinks es una función', () => {
    expect(typeof extractLinks).toBe('function');
  });
  it('Devuelve un array con cada link(objeto)', () => {
    expect(extractLinks(relPath)).toEqual(arrLinks);
  });
});
