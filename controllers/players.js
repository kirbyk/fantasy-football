var ffnerd = require('../utils/ffnerd.js');
var players = require('../models/players');


exports.getPlayers = function(req, res) {
  var week = parseInt(req.query.week);

  players.get(week).then(function(data) {
    // No info in the database. Fetch from ffnerd.
    if (!data) {
      ffnerd.weeklyRankings(week)
        .then(function(data) {
          players.add(week, data);

          return res.json({
            players: data,
          });
        });
    } else {
      // Data was in the database. Send it.
      res.json({
        players: data.players
      });
    }
  });
};
