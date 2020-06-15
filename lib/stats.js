const statsInfo = (array) => {
  const arrQuantity = array.length;
  const uniqueValues = [...new Set(array.map((element) => element.href))].length;
  if (arrQuantity === 0) {
    return new Error('No existen links');
  }
  const statsFunction = `
    Total: ${arrQuantity}
    Unique: ${uniqueValues}
    `;
  return statsFunction;
};

const statsValidate = (array) => {
  const arrQuantity = array.length;
  const uniqueValues = [...new Set(array.map((element) => element.href))].length;
  const brokenLinks = [...new Set(array.filter((element) => element.status >= 400))].length;
  if (arrQuantity === 0) {
    return new Error('No existen links');
  }
  const statsFunction = `
    Total: ${arrQuantity}
    Unique: ${uniqueValues}
    Broken: ${brokenLinks}
    `;
  return statsFunction;
};

module.exports = { statsInfo, statsValidate };
