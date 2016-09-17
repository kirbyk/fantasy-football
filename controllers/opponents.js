// var ffnerd = require('../utils/ffnerd.js');
// var players = require('../models/players');
// var team = require('../models/team');
var opponent = require('../models/opponent');


exports.getOpponents = function(req, res) {
  var week = parseInt(req.query.week);
  opponent
    .getByWeek(week)
    .then(function(opponents) {
      // console.log(opponents);
      return res.json(opponents);
    });
};

exports.addOpponent = function(req, res) {
  var week = parseInt(req.body.week);
  var opponentName = req.body.opponentName;

  opponent.add(week, opponentName);
  res.json({success: true});
};
