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

exports.add = function(week, players) {
  DB.collection('players').updateOne({
    week: week
  }, {
    week: week,
    players: players
  }, {
    upsert: true
  });
};

// TODO: maybe `all` instead of `get`
exports.get = function(week) {
  var deferred = Q.defer();

  var playersCollection = DB.collection('players');

  playersCollection.findOne({week: week}, function(err, doc) {
    if (err) {
      deferred.reject(err);
    }

    deferred.resolve(doc);
  });

  return deferred.promise;
};

exports.findByWeekAndPlayerId = function(week, playerId) {
  var deferred = Q.defer();

  var playersCollection = DB.collection('players');

  playersCollection.aggregate([
    { $match: {week: week} },
    { $unwind: '$players' },
    { $match: {'players.playerId': playerId} },
  ], function(err, docs) {
    if (err) {
      deferred.reject(err);
    }

    return deferred.resolve(docs[0]); // TODO: fix
  });

  return deferred.promise;
};
