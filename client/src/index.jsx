import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './store';

import App from './components/App.jsx';

const trader = (

  <Provider store={store}>
    <App />
  </Provider>

)

ReactDOM.render(trader, document.getElementById('app'));
