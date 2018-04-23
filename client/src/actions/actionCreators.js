export const trade = (costInUSD, btcToUsd, usdInWallet, btcInWallet) => ({
  type: 'PURCHASE_BTC',
  costInUSD,
  btcToUsd,
  usdInWallet,
  btcInWallet,
});

export const usdTextInput = (costInUSD) => ({
  type: 'INPUTED_USD',
  costInUSD,
});

export const fetchBtcPrice = (btcPrice) => ({
  type: 'FETCH_BTC_PRICE',
  btcPrice,
});
