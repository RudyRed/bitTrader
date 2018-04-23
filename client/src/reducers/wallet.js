const isValidDollarFigure = function (str) {

  const decimalIndex = str.indexOf('.');

  if (decimalIndex != -1 && str.length - 1 - decimalIndex > 2) {
    return false;
  }

  return !isNaN(str);
};


const wallet = function (state = {}, action) {
  if (action.type !== 'PURCHASE_BTC' || !isValidDollarFigure(action.costInUSD)) {
    return state;
  }

  const { btcToUsd, usdInWallet, btcInWallet } = action;
  const costInUSD = Number(Number(action.costInUSD).toFixed(2));

  if (costInUSD <= usdInWallet) {

    return {
        usd: (usdInWallet - costInUSD),
        btc: ((costInUSD / btcToUsd) + btcInWallet),
      };
  }

  return state;
};

export default wallet;
