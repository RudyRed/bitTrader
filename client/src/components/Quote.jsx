import React from 'react';
import axios from 'axios';

class Quote extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {

  }



  clickHandler(event) {

    axios.get('/btcusd')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Trade</button>
        <input type="text" name="btc" value="" placeholder ="Display Quote" readOnly/>
      </div>
    )
  }
}

export default Quote;
