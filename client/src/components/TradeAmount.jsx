import React from 'react';
import axios from 'axios';
import { round, isValidDollarFigure } from '../helpers/helpers.js';

class TradeAmount extends React.Component {
  constructor(props) {
    super(props);

  }

  changeHandler(event) {
    this.props.usdTextInput(event.target.value);
  }

  render() {
    const { wallet, usdToBeTraded } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            name="usd"
            placeholder="Enter your amount"
            onKeyUp={this.changeHandler.bind(this)}/>
          </div>
          {(usdToBeTraded.length > 0 && !isValidDollarFigure(usdToBeTraded)) && (
            <small>Invalid Currency Value</small>
          )}
          {(isValidDollarFigure(usdToBeTraded) && usdToBeTraded > wallet.usd) && (
            <small>Insufficient Funds</small>
          )}
      </div>
    )
  }
}

export default TradeAmount;
