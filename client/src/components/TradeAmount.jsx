import React from 'react';
import axios from 'axios';

class TradeAmount extends React.Component {
  constructor(props) {
    super(props);

  }

  changeHandler(event) {
    this.props.usdTextInput(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="usd"
          placeholder="Enter your amount"
          onKeyUp={this.changeHandler.bind(this)}/>
      </div>
    )
  }
}

export default TradeAmount;
