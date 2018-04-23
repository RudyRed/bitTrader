const usdToBeTraded = function (state = {}, action) {
  if (action.type === 'INPUTED_USD') return action.costInUSD;

  return state;
};

export default usdToBeTraded;
