var express = require('express');
var app = express();

app.listen(3000, function() {
  console.log('Bonfire listening on port 3000');
})

app.get('/', function(req, res) {
  console.log('GET received to /');
  res.send('Welcome to Bonfire!');
})
