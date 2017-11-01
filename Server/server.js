var express = require('express');
var app = express();
// var queryDB = require('dbQuery');
var dbIndex = require('../database-mysql/')

console.log('SELECT test', dbIndex.queryDB('SELECT * FROM USERS'));

app.listen(3000, function() {
  console.log('Bonfire listening on port 3000');
})

app.get('/', function(req, res) {
  console.log('GET received to /');
  // console.log( queryDB('SELECT * FROM users') );
  res.send('Welcome to Bonfire!');
})

app.get('/users', function(req, res) {
  console.log('GET received to /users');
  res.send();
})
