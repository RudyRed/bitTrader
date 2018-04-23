import { combineReducers } from 'redux';

import wallet from './wallet';
import usdToBeTraded from './usdToBeTraded';

const rootReducer = combineReducers({ wallet , usdToBeTraded});

export default rootReducer;
