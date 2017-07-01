const currencySymbols = require('./currency-symbols');

module.exports = symbol => {
  if (typeof symbol === 'string') {
    return currencySymbols.includes(symbol.toLowerCase());
  }
  return false;
};
