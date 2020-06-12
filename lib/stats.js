const statsInfo = (array) => {
  const arrQuantity = array.length;
  const uniqueValues = [...new Set(array.map((element) => element.href))];
  if (arrQuantity === 0) {
    return new Error('No existen links');
  }
  const statsFunction = `
    Total: ${arrQuantity}
    Unique: ${uniqueValues}
    `;
  return statsFunction;
};

module.exports = { statsInfo };
