// TODO: abstract this
var MongoClient = require('mongodb').MongoClient;
var Q = require('q');


DB = null;

var url = 'mongodb://localhost:27017/fantasy-football';

MongoClient.connect(url, function(err, db) {
  if (err) {
    return console.error("Can't connect to MongoDB");
  }

  DB = db;

  // db.close();
});


exports.add = function(week, opponentName) {
  DB.collection('opponents').insert({
    week: week,
    name: opponentName,
    players: [],
  });
};

exports.addPlayerToOpponent = function(week, opponentName, player) {
  DB.collection('opponents').updateOne({
    week: week,
    name: opponentName,
  }, {
    $push: { players: player },
  }, {
    upsert: true
  });
};

// TODO: maybe `all` instead of `get`
exports.getByWeek = function(week) {
  var deferred = Q.defer();

  var oppontentsCollection = DB.collection('opponents');

  oppontentsCollection.find({week: week}).toArray(function(err, docs) {
    if (err) {
      deferred.reject(err);
    }

    deferred.resolve(docs);
  });

  return deferred.promise;
};
