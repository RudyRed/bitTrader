const isValidDollarFigure = function (str) {

  const decimalIndex = str.indexOf('.');

  if (decimalIndex != -1 && str.length - 1 - decimalIndex > 2) {
    return false;
  }

  return !isNaN(str);
};


const usdToBeTraded = function (state = {}, action) {
  if (action.type === 'INPUTED_USD') return action.costInUSD;

  return state;
};

export default usdToBeTraded;
