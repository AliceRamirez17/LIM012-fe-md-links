const statsInfo = (array) => {
  const arrQuantity = array.length;
  if (arrQuantity === 0) {
    return new Error('No existen links');
  }
  const statsFunction = `
    Total: ${arrQuantity}
    Unique:
    `;
  return statsFunction;
};

module.exports = { statsInfo };
