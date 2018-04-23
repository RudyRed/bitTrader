import React from 'react';
import axios from 'axios';
import { round } from '../helpers/helpers.js';

class Quote extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    console.log(this.props)
    this._fetchBtcPrice();
  }

  _fetchBtcPrice () {
  const context = this;

    axios.get('/btcusd')
      .then(function (response) {
        context.props.fetchBtcPrice(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setTimeout(context._fetchBtcPrice.bind(context), 3000);
      });


  }


  clickHandler(event) {
    const { trade, usdToBeTraded, btcToUsd, wallet } = this.props;
    trade(usdToBeTraded, btcToUsd, wallet.usd, wallet.btc);
  }

  render() {
    const { validNumberToBeTraded, btcToUsd, usdToBeTraded } = this.props;

    return (
      <div>
        <div>
          {(!validNumberToBeTraded || !btcToUsd) && (<input
            type="text"
            name="btc"
            value=""
            placeholder="Display Quote"
            readOnly />)}
          {(validNumberToBeTraded && btcToUsd) && (<input
            type="text"
            name="btc"
            value={round(usdToBeTraded / btcToUsd, 8)}
            readOnly />)}
        </div>
        <button onClick={this.clickHandler.bind(this)}>Trade</button>
      </div>
    )
  }
}

export default Quote;
