import React from 'react';
import Quote from './Quote.jsx'

const Main = (store) => (
  <div>
    <h1>Account Balance</h1>
    <p>{`USD: ${store.wallet.usd}`}</p>
    <p>{`BTC: ${store.wallet.btc}`}</p>
    <h1> Trade </h1>
    <Quote/>
  </div>
)


export default Main;
