var ffnerd = require('../utils/ffnerd.js');
var Players = require('../models/players');


exports.getPlayers = function(req, res) {
  var week = parseInt(req.query.week);
  Players
    .getPlayersForWeek(week)
    .then(function(data) {
      res.json(data);
    });
};

exports.updatePlayers = function(req, res) {
  // TODO: figure out how to get game time and opponent
  var week = parseInt(req.body.week);
  ffnerd
    .weeklyRankings(week)
    .then(function(players) {
      players.forEach(function(player) {
        Players.upsertPlayer({
          week: parseInt(player.week),
          playerId: player.playerId,
          playerName: player.name,
          position: player.position,
          projection: player.standard,
          status: player.gameStatus,
          // gameDateTime: ,
          teamName: player.team,
          // opponent: ,
        });
      });
      res.json('success');
    });
};
