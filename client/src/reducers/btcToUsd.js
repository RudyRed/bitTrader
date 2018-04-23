const btcToUsd = function (state = {}, action) {
  if (action.type === 'FETCH_BTC_PRICE') return action.btcPrice;

  return state;
};

export default btcToUsd;
