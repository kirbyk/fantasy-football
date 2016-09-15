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


exports.set = function(week) {
  DB.collection('week').updateOne({}, {$set:{week:week}});
};

// TODO: maybe `all` instead of `get`
exports.get = function() {
  var deferred = Q.defer();

  var weekCollection = DB.collection('week');

  weekCollection.findOne({}, function(err, doc) {
    if (err) {
      deferred.reject(err);
    }

    deferred.resolve(doc.week);
  });

  return deferred.promise;
};
