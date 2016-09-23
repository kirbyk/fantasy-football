var Q = require('q');

var mongodb = require('../utils/mongodb');


exports.getTeamsForWeek = function(week) {
  var deferred = Q.defer();

  mongodb.run(function(db) {
    db.collection('teams').find({week: week}).toArray(function(err, doc) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(doc);
      }
    });
  });

  return deferred.promise;
};
