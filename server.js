require('dotenv').config({
  silent: true,
});
var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.set('port', (process.env.PORT || 4567));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var weekController = require('./controllers/week');
var teamsController = require('./controllers/teams');
var playersController = require('./controllers/players');

app.get('/week', weekController.getWeek);
app.post('/week', weekController.setWeek);

app.get('/teams', teamsController.get);
app.post('/teams', teamsController.updateTeam);

app.get('/players', playersController.getPlayers);
app.post('/players', playersController.updatePlayers);

app.get('*', function(req, res) {
  res.sendStatus(404);
});

var server = app.listen(app.get('port'), function () {
  console.log('the server is listening on port %s', app.get('port'));
});
