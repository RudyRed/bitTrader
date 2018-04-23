import { isValidDollarFigure } from '../helpers/helpers.js';

const validNumberToBeTraded = function (state = {}, action) {
  if (action.type !== 'INPUTED_USD') return state;

  return isValidDollarFigure(action.costInUSD);
};

export default validNumberToBeTraded;
