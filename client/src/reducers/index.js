import { combineReducers } from 'redux';

import wallet from './wallet';
import usdToBeTraded from './usdToBeTraded';
import btcToUsd from './btcToUsd';

const rootReducer = combineReducers({ wallet , usdToBeTraded, btcToUsd });

export default rootReducer;
