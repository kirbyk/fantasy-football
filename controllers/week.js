var week = require('../models/week');

/*
 * Example request:
 * {
 *   week: 1
 * }
 **/
exports.setWeek = function(req, res) {
  week.set(req.body.week);
  res.json({
    success: true
  });
};

exports.getWeek = function(req, res) {
  week.get().then(function(data) {
    res.json({
      week: data
    });
  });
};
