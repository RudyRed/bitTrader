import React from 'react';
import Quote from './Quote.jsx';
import TradeAmount from './TradeAmount.jsx';
import { toDecimalString } from '../helpers/helpers.js';

const Main = (store) => (
  <div>
    <h1>Account Balance</h1>
    <div className="wallet" >
      <span className="currency" >{`USD`}</span>
      <span className="wallet-balance">{toDecimalString(store.wallet.usd, 2)}</span>
    </div>
    <div className="wallet" >
      <span className="currency" >{`BTC`}</span>
      <span className="wallet-balance">{toDecimalString(store.wallet.btc, 8)}</span>
    </div>
    <h1> Trade </h1>
    <input type="text" value="USD" className="currency" readOnly/>
    <TradeAmount {...store} />
    <h1> For </h1>
    <input type="text" value="BTC" className="currency" readOnly/>
    <Quote {...store} />
  </div>
)


export default Main;
