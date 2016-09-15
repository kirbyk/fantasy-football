// TODO: abstract this
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/fantasy-football';

MongoClient.connect(url, function(err, db) {
  if (err) {
    return console.error("Can't connect to MongoDB");
  }

  db.collection('week').insert({
    week: 1,
  });

  db.collection('team').insert({
    week: 1,
    players: [],
  });

  db.close();
});


