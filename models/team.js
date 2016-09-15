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


exports.add = function(week, player) {
  DB.collection('team').updateOne({
    week: week
  }, {
    $push: { players: player },
  }, {
    upsert: true
  });
};

// TODO: maybe `all` instead of `get`
exports.get = function(week) {
  var deferred = Q.defer();

  var teamCollection = DB.collection('team');

  teamCollection.findOne({week: week}, function(err, doc) {
    if (err) {
      deferred.reject(err);
    }

    deferred.resolve(doc);
  });

  return deferred.promise;
};
