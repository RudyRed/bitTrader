export const trade = (costInUSD, btcToUsd, usdInWallet, btcInWallet) => ({
  type: 'PURCHASE_BTC',
  costInUSD,
  btcToUsd,
  usdInWallet,
  btcInWallet,
});
