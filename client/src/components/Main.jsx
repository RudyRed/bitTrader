import React from 'react';


const Main = (store) => (
  <div>
    <h1>Account Balance</h1>
    <p>{`USD: ${store.wallet.usd}`}</p>
    <p>{`BTC: ${store.wallet.btc}`}</p>
  </div>
)


export default Main;
