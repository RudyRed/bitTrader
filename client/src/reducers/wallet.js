import { isValidDollarFigure, round } from '../helpers/helpers.js';

const wallet = function (state = {}, action) {
  if (action.type !== 'PURCHASE_BTC' || !isValidDollarFigure(action.costInUSD)) {
    return state;
  }

  const { btcToUsd, usdInWallet, btcInWallet } = action;
  const costInUSD = round(action.costInUSD, 2);

  if (costInUSD <= usdInWallet) {

    return {
        usd: round(usdInWallet - costInUSD, 2),
        btc: round((costInUSD / btcToUsd) + btcInWallet, 8),
      };
  }

  return state;
};

export default wallet;
