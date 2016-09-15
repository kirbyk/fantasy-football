var ffnerd = require('../utils/ffnerd.js');
var team = require('../models/team');


exports.getPlayers = function(req, res) {
  var week = parseInt(req.query.week);

  team.get(week).then(function(data) {
    res.json({
      players: data
    });
  });
};

exports.addPlayer = function(req, res) {
  var week = parseInt(req.body.week);
  var player = req.body.player;

  team.add(week, player);
  res.json({success: true});
};

