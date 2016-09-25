var Q = require('q');

var mongodb = require('../utils/mongodb');


exports.getTeamsForWeek = function(week) {
  var deferred = Q.defer();

  mongodb.run(function(db) {
    db.collection('teams').find({week: week}).toArray(function(err, docs) {
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
exports.upsertTeam = function(team) {
  mongodb.run(function(db) {
    db.collection('teams').updateOne({
      teamName: team.teamName,
      week: team.week,
    }, team, {
      upsert: true,
    });
  });
};
