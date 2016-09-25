var Teams = require('../models/teams');

exports.get = function(req, res) {
  var week = parseInt(req.query.week);
  Teams
    .getTeamsForWeek(week)
    .then(function(data) {
      res.json(data);
    });
};

exports.updateTeam = function(req, res) {
  var team = req.body.team;
  delete team._id;
  Teams.upsertTeam(team);
};
