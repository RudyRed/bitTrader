import React from 'react';
import Quote from './Quote.jsx';
import TradeAmount from './TradeAmount.jsx';

const Main = (store) => (
  <div>
    <h1>Account Balance</h1>
    <p>{`USD: ${store.wallet.usd}`}</p>
    <p>{`BTC: ${store.wallet.btc}`}</p>
    <h1> Trade </h1>
    <input type="text" value="USD" readOnly/>
    <TradeAmount {...store} />
    <h1> For </h1>
    <input type="text" value="BTC" readOnly/>
    <Quote {...store} />
  </div>
)


export default Main;
