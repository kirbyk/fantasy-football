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


// exports.add = function(week, player) {
//   db.sync(function(d) {
//     d.collection('teams').updateOne({
//       week: week
//     }, {
//       $push: { players: player },
//     }, {
//       upsert: true
//     });
//   });
// };

// // TODO: maybe `all` instead of `get`
// exports.get = function(week) {
//   var deferred = Q.defer();
//
//   var teamCollection = DB.collection('team');
//
//   teamCollection.findOne({week: week}, function(err, doc) {
//     if (err) {
//       deferred.reject(err);
//     }
//
//     deferred.resolve(doc);
//   });
//
//   return deferred.promise;
// };
