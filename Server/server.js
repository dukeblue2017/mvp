var express = require('express');
var app = express();
var dbIndex = require('../database-mysql/')
var path = require('path')
var bodyParser = require('body-parser')

app.listen(3000, function() {
  console.log('Bonfire listening on port 3000');
})

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client-angular')));
app.use('/scripts', express.static(path.join(__dirname, '../node_modules')));

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
  var username = req.body.username;
  var sqlText = 'INSERT INTO users (name) VALUES (\'' + username + '\');';
  dbIndex.queryDB(sqlText, function(err, result) {
    if (err) {
      console.log('err', err);
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
  // this needs to update the user's favorite song_title, song_artist, and song_album
  // also, user needs to be dynamic
  var sqlText = 'UPDATE users SET song_title = \'Toes\' WHERE name = \'Hans\'';
  dbIndex.queryDB(sqlText, function(err, result) {
    if (err) {
      console.log('err');
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
})
