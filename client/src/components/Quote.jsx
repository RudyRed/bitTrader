import React from 'react';
import axios from 'axios';

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


  }

  render() {
    return (
      <div>
        <div>
          <input type="text" name="btc" value="" placeholder ="Display Quote" readOnly/>
        </div>
        <button onClick={this.clickHandler}>Trade</button>
      </div>
    )
  }
}

export default Quote;
