import React from 'react';
import axios from 'axios';

class TradeAmount extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <input type="text" name="usd" placeholder ="Enter your amount" />
      </div>
    )
  }
}

export default TradeAmount;
