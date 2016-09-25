var Q = require('q');

var mongodb = require('../utils/mongodb');


exports.getPlayersForWeek = function(week) {
  var deferred = Q.defer();

  mongodb.run(function(db) {
    db.collection('players').find({week: week}).toArray(function(err, docs) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(docs);
      }
    });
  });

  return deferred.promise;
};

// TODO: add validation
exports.upsertPlayer = function(player) {
  mongodb.run(function(db) {
    db.collection('players').updateOne({
      playerId: player.playerId,
      week: player.week,
    }, player, {
      upsert: true,
    });
  });
};
