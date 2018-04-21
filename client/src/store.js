import { createStore } from 'redux';

import rootReducer from './reducers/index';

const defaultState = {
  wallet: {
    usd: 156.12,
    btc: 0,
  },
  // btcToUsd: 0,
  // usdToBeTraded: '',
};

const store = createStore(rootReducer, defaultState);

export default store;
