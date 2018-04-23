const isValidDollarFigure = function (str) {
  if (str.length === 0) return false;
  const decimalIndex = str.indexOf('.');

  if (decimalIndex != -1 && str.length - 1 - decimalIndex > 2) {
    return false;
  }

  return !isNaN(str);
};

const validNumberToBeTraded = function (state = {}, action) {
  if (action.type !== 'INPUTED_USD') return state;

  return isValidDollarFigure(action.costInUSD);
};

export default validNumberToBeTraded;
