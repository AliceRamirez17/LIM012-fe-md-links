const {
  isAbsolutePath,
} = require('../src/index.js');

describe('isAbsolutePath', () => {
  it('is Absolute Path es una función', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
});
