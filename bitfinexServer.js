const express = require('express');
const axios = require('axios');

var app = express();

app.get('/btcusd', function(req, res) {

  axios.get('https://api.bitfinex.com/v1/pubticker/btcusd')
    .then(function (response) {
      res.send(response.data.last_price);
    })
    .catch(function (error) {
      console.log(error);
      res.send()
    });

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
