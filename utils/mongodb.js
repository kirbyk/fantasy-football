// TODO: abstract this
var MongoClient = require('mongodb').MongoClient;


var MONGODB_URL = 'mongodb://localhost:27017/ff2';

exports.run = function(callback) {
  MongoClient.connect(MONGODB_URL, function(err, db) {
    if (err) {
      return console.error("Can't connect to MongoDB");
    }

    callback(db);

    db.close();
  });
};
