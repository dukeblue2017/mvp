var express = require('express');
var app = express();
var dbIndex = require('../database-mysql/')

app.listen(3000, function() {
  console.log('Bonfire listening on port 3000');
})

app.get('/', function(req, res) {
  console.log('GET received to /');
  //need to send index.html, not this
  res.send('Welcome to Bonfire!');
})

app.post('/', function(req, res) {
  console.log('POST received to /');
  res.sendStatus(405);
})

app.get('/users', function(req, res) {
  console.log('GET received to /users');

  dbIndex.queryDB('SELECT name FROM USERS', function(err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('result', result);
      res.json(result);
    }
  });
})

app.post('/users', function(req, res) {
  console.log('POST received to /users');
  // need to change 'Hans'
  var sqlText = 'INSERT INTO users (name) VALUES (\'Hans\')';
  dbIndex.queryDB(sqlText, function(err, result) {
    if (err) {
      console.log('err');
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
})

app.get('/profile', function(req, res) {
  console.log('GET received to /profile');
  // need to insert username here at the end of query:
  var sqlText = 'SELECT name, song_title, song_artist, song_album FROM users;'
  dbIndex.queryDB(sqlText, function(err, result) {
    if (err) {
      console.log('err');
      res.sendStatus(500);
    } else {
      console.log('result', result);
      res.json(result);
    }
  })
})

app.post('/profile', function(req, res) {
  console.log('POST received to /profile');
  // this needs to update the user's favorite song;
  res.send()

})
