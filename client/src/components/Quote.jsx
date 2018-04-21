import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class Quote extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {

  }



  clickHandler(event) {

    axios.get('/btcusd')
      .then(function (response) {
        console.log('dsadas')
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
      </div>
    )
  }
}

export default Quote;
