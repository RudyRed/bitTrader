import { combineReducers } from 'redux';

import wallet from './wallet';
import usdToBeTraded from './usdToBeTraded';
import btcToUsd from './btcToUsd';
import validNumberToBeTraded from './validNumberToBeTraded';

const rootReducer = combineReducers({ wallet,
  usdToBeTraded,
  btcToUsd,
  validNumberToBeTraded,
});

export default rootReducer;
