// var ffnerd = require('../utils/ffnerd.js');
// var players = require('../models/players');
var teams = require('../models/teams');

exports.get = function(req, res) {
  var week = parseInt(req.query.week);
  teams
    .getTeamsForWeek(week)
    .then(function(data) {
      res.json(data);
    });
};

exports.post = function(req, res) {

};

function _getMyTeam() {
}

// exports.getPlayers = function(req, res) {
//   var week = parseInt(req.query.week);
//
//   team.get(week).then(function(data) {
//     // week exists in database
//     if (data) {
//       return res.json({
//         players: data.players
//       });
//     }
//
//     // TODO: fix this so it returns json so page doesn't need refreshed
//     // week doesn't exist, so let's copy the latest one and update the projections
//     team.get(week - 1).then(function(data) {
//       // TOOD: make this recursive until first week
//       data.players.forEach(function(player) {
//         players.findByWeekAndPlayerId(week, player.playerId)
//           .then(function(newPlayer) {
//             team.add(week, newPlayer.players); // TODO: playerS is stupid
//           });
//       });
//     });
//   });
// };
//
// exports.addPlayer = function(req, res) {
//   var week = parseInt(req.body.week);
//   var player = req.body.player;
//
//   team.add(week, player);
//   res.json({success: true});
// };
//
