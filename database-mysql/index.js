var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'bonfire_db'
});

var queryBonfire = function(query, callback) {
  connection.query(query, function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.queryDB = queryBonfire;
