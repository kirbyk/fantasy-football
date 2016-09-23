var mongodb = require('./utils/mongodb');

var teams = [
  {
     "teamName": "Kirby",
     "isMyTeam": true,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Ryan Tannehill",
       "teamName": "Mia",
       "position": "QB",
       "status": null,
       "opponent": "Cle",
       "gameDateTime": "Sun 1:00",
       "projection": 17
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "C.J. Anderson",
       "teamName": "Den",
       "position": "RB",
       "status": null,
       "opponent": "@Cin",
       "gameDateTime": "Sun 1:00",
       "projection": 12
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "Charles Sims",
       "teamName": "TB",
       "position": "RB",
       "status": null,
       "opponent": "LA",
       "gameDateTime": "Sun 4:05",
       "projection": 11
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "Odell Beckham Jr.",
       "teamName": "NYG",
       "position": "WR",
       "status": null,
       "opponent": "Wsh",
       "gameDateTime": "Sun 1:00",
       "projection": 13
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Allen Robinson",
       "teamName": "Jax",
       "position": "WR",
       "status": "Q",
       "opponent": "Bal",
       "gameDateTime": "Sun 1:00",
       "projection": 12
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Jacob Tamme",
       "teamName": "Atl",
       "position": "TE",
       "status": null,
       "opponent": "@NO",
       "gameDateTime": "Mon 8:30",
       "projection": 7
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "A.J. Green",
       "teamName": "Cin",
       "position": "WR",
       "status": "Q",
       "opponent": "Den",
       "gameDateTime": "Sun 1:00",
       "projection": 10
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Ravens D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "@Jax",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "K": {
       "playerId": "K",
       "playerName": "Steven Hauschka",
       "teamName": "Sea",
       "position": "K",
       "status": null,
       "opponent": "SF",
       "gameDateTime": "Sun 4:05",
       "projection": 9
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Jamaal Charles",
       "teamName": "KC",
       "position": "RB",
       "status": "Q",
       "opponent": "NYJ",
       "gameDateTime": "Sun 4:25",
       "projection": 6
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "Alshon Jeffery",
       "teamName": "Chi",
       "position": "WR",
       "status": "Q",
       "opponent": "@Dal",
       "gameDateTime": "Sun 8:30",
       "projection": 10
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "Latavius Murray",
       "teamName": "Oak",
       "position": "RB",
       "status": null,
       "opponent": "@Ten",
       "gameDateTime": "Sun 1:00",
       "projection": 9
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "Julian Edelman",
       "teamName": "NE",
       "position": "WR",
       "status": null,
       "opponent": "Hou",
       "gameDateTime": "Thu 8:25",
       "projection": 8
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "Carson Palmer",
       "teamName": "Ari",
       "position": "QB",
       "status": null,
       "opponent": "@Buf",
       "gameDateTime": "Sun 1:00",
       "projection": 17
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Zach Ertz",
       "teamName": "Phi",
       "position": "TE",
       "status": "Q",
       "opponent": "Pit",
       "gameDateTime": "Sun 4:25",
       "projection": 0
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Coby Fleener",
       "teamName": "NO",
       "position": "TE",
       "status": null,
       "opponent": "Atl",
       "gameDateTime": "Mon 8:30",
       "projection": 6,
     },
  },
  {
     "teamName": "Alex",
     "isMyTeam": false,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Aaron Rodgers",
       "teamName": "GB",
       "position": "QB",
       "status": null,
       "opponent": "Det",
       "gameDateTime": "Sun 1:00",
       "projection": 19
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "Thomas Rawls",
       "teamName": "Sea",
       "position": "RB",
       "status": "Q",
       "opponent": "SF",
       "gameDateTime": "Sun 4:05",
       "projection": 8
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "Spencer Ware",
       "teamName": "KC",
       "position": "RB",
       "status": null,
       "opponent": "NYJ",
       "gameDateTime": "Sun 4:25",
       "projection": 8
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "Jordy Nelson",
       "teamName": "GB",
       "position": "WR",
       "status": null,
       "opponent": "Det",
       "gameDateTime": "Sun 1:00",
       "projection": 12
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Doug Baldwin",
       "teamName": "Sea",
       "position": "WR",
       "status": "Q",
       "opponent": "SF",
       "gameDateTime": "Sun 4:05",
       "projection": 9
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Delanie Walker",
       "teamName": "Ten",
       "position": "TE",
       "status": "Q",
       "opponent": "Oak",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "Todd Gurley",
       "teamName": "LA",
       "position": "RB",
       "status": null,
       "opponent": "@TB",
       "gameDateTime": "Sun 4:05",
       "projection": 14
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Seahawks D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "SF",
       "gameDateTime": "Sun 4:05",
       "projection": 12
     },
     "K": {
       "playerId": "K",
       "playerName": "Mason Crosby",
       "teamName": "GB",
       "position": "K",
       "status": null,
       "opponent": "Det",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Jeremy Maclin",
       "teamName": "KC",
       "position": "WR",
       "status": null,
       "opponent": "NYJ",
       "gameDateTime": "Sun 4:25",
       "projection": 9
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "Michael Crabtree",
       "teamName": "Oak",
       "position": "WR",
       "status": null,
       "opponent": "@Ten",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "Blake Bortles",
       "teamName": "Jax",
       "position": "QB",
       "status": null,
       "opponent": "Bal",
       "gameDateTime": "Sun 1:00",
       "projection": 17
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "Derrick Henry",
       "teamName": "Ten",
       "position": "RB",
       "status": null,
       "opponent": "Oak",
       "gameDateTime": "Sun 1:00",
       "projection": 6
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "Travis Benjamin",
       "teamName": "SD",
       "position": "WR",
       "status": null,
       "opponent": "@Ind",
       "gameDateTime": "Sun 4:25",
       "projection": 10
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Steve Smith Sr.",
       "teamName": "Bal",
       "position": "WR",
       "status": null,
       "opponent": "@Jax",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Eric Ebron",
       "teamName": "Det",
       "position": "TE",
       "status": "Q",
       "opponent": "@GB",
       "gameDateTime": "Sun 1:00",
       "projection": 6,
     },
  },
  {
     "teamName": "Everett",
     "isMyTeam": false,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Ben Roethlisberger",
       "teamName": "Pit",
       "position": "QB",
       "status": null,
       "opponent": "@Phi",
       "gameDateTime": "Sun 4:25",
       "projection": 17
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "Adrian Peterson*",
       "teamName": "Min",
       "position": "RB",
       "status": "O",
       "opponent": "@Car",
       "gameDateTime": "Sun 1:00",
       "projection": 0
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "LeSean McCoy",
       "teamName": "Buf",
       "position": "RB",
       "status": null,
       "opponent": "Ari",
       "gameDateTime": "Sun 1:00",
       "projection": 12
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "Dez Bryant",
       "teamName": "Dal",
       "position": "WR",
       "status": null,
       "opponent": "Chi",
       "gameDateTime": "Sun 8:30",
       "projection": 10
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Mike Evans",
       "teamName": "TB",
       "position": "WR",
       "status": null,
       "opponent": "LA",
       "gameDateTime": "Sun 4:05",
       "projection": 9
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Travis Kelce",
       "teamName": "KC",
       "position": "TE",
       "status": null,
       "opponent": "NYJ",
       "gameDateTime": "Sun 4:25",
       "projection": 7
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "Eddie Lacy",
       "teamName": "GB",
       "position": "RB",
       "status": null,
       "opponent": "Det",
       "gameDateTime": "Sun 1:00",
       "projection": 11
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Bills D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "Ari",
       "gameDateTime": "Sun 1:00",
       "projection": 6
     },
     "K": {
       "playerId": "K",
       "playerName": "Graham Gano",
       "teamName": "Car",
       "position": "K",
       "status": null,
       "opponent": "Min",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Emmanuel Sanders",
       "teamName": "Den",
       "position": "WR",
       "status": null,
       "opponent": "@Cin",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "Jeremy Langford",
       "teamName": "Chi",
       "position": "RB",
       "status": null,
       "opponent": "@Dal",
       "gameDateTime": "Sun 8:30",
       "projection": 7
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "DeVante Parker",
       "teamName": "Mia",
       "position": "WR",
       "status": "Q",
       "opponent": "Cle",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "Marvin Jones",
       "teamName": "Det",
       "position": "WR",
       "status": null,
       "opponent": "@GB",
       "gameDateTime": "Sun 1:00",
       "projection": 11
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "Chris Ivory",
       "teamName": "Jax",
       "position": "RB",
       "status": "Q",
       "opponent": "Bal",
       "gameDateTime": "Sun 1:00",
       "projection": 6
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Jay Ajayi",
       "teamName": "Mia",
       "position": "RB",
       "status": null,
       "opponent": "Cle",
       "gameDateTime": "Sun 1:00",
       "projection": 9
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Zach Miller",
       "teamName": "Chi",
       "position": "TE",
       "status": null,
       "opponent": "@Dal",
       "gameDateTime": "Sun 8:30",
       "projection": 6,
     },
  },
  {
     "teamName": "Stephen",
     "isMyTeam": false,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Eli Manning",
       "teamName": "NYG",
       "position": "QB",
       "status": null,
       "opponent": "Wsh",
       "gameDateTime": "Sun 1:00",
       "projection": 17
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "Lamar Miller",
       "teamName": "Hou",
       "position": "RB",
       "status": null,
       "opponent": "@NE",
       "gameDateTime": "Thu 8:25",
       "projection": 12
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "Mark Ingram",
       "teamName": "NO",
       "position": "RB",
       "status": null,
       "opponent": "Atl",
       "gameDateTime": "Mon 8:30",
       "projection": 12
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "Antonio Brown",
       "teamName": "Pit",
       "position": "WR",
       "status": null,
       "opponent": "@Phi",
       "gameDateTime": "Sun 4:25",
       "projection": 15
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Kelvin Benjamin",
       "teamName": "Car",
       "position": "WR",
       "status": null,
       "opponent": "Min",
       "gameDateTime": "Sun 1:00",
       "projection": 9
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Jordan Reed",
       "teamName": "Wsh",
       "position": "TE",
       "status": null,
       "opponent": "@NYG",
       "gameDateTime": "Sun 1:00",
       "projection": 9
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "Willie Snead",
       "teamName": "NO",
       "position": "WR",
       "status": null,
       "opponent": "Atl",
       "gameDateTime": "Mon 8:30",
       "projection": 8
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Dolphins D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "Cle",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "K": {
       "playerId": "K",
       "playerName": "Matt Bryant",
       "teamName": "Atl",
       "position": "K",
       "status": null,
       "opponent": "@NO",
       "gameDateTime": "Mon 8:30",
       "projection": 8
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Le'Veon Bell",
       "teamName": "Pit",
       "position": "RB",
       "status": "SSPD",
       "opponent": "@Phi",
       "gameDateTime": "Sun 4:25",
       "projection": 0
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "Tom Brady",
       "teamName": "NE",
       "position": "QB",
       "status": "SSPD",
       "opponent": "Hou",
       "gameDateTime": "Thu 8:25",
       "projection": 0
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "Matthew Stafford",
       "teamName": "Det",
       "position": "QB",
       "status": null,
       "opponent": "@GB",
       "gameDateTime": "Sun 1:00",
       "projection": 16
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "LeGarrette Blount",
       "teamName": "NE",
       "position": "RB",
       "status": null,
       "opponent": "Hou",
       "gameDateTime": "Thu 8:25",
       "projection": 9
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "Stefon Diggs",
       "teamName": "Min",
       "position": "WR",
       "status": null,
       "opponent": "@Car",
       "gameDateTime": "Sun 1:00",
       "projection": 9
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Isaiah Crowell",
       "teamName": "Cle",
       "position": "RB",
       "status": null,
       "opponent": "@Mia",
       "gameDateTime": "Sun 1:00",
       "projection": 10
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Vikings D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "@Car",
       "gameDateTime": "Sun 1:00",
       "projection": 7,
     },
  },
  {
     "teamName": "Steve",
     "isMyTeam": false,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Russell Wilson",
       "teamName": "Sea",
       "position": "QB",
       "status": null,
       "opponent": "SF",
       "gameDateTime": "Sun 4:05",
       "projection": 19
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "DeAngelo Williams",
       "teamName": "Pit",
       "position": "RB",
       "status": null,
       "opponent": "@Phi",
       "gameDateTime": "Sun 4:25",
       "projection": 17
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "Tevin Coleman",
       "teamName": "Atl",
       "position": "RB",
       "status": null,
       "opponent": "@NO",
       "gameDateTime": "Mon 8:30",
       "projection": 9
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "Julio Jones",
       "teamName": "Atl",
       "position": "WR",
       "status": "Q",
       "opponent": "@NO",
       "gameDateTime": "Mon 8:30",
       "projection": 15
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Amari Cooper",
       "teamName": "Oak",
       "position": "WR",
       "status": null,
       "opponent": "@Ten",
       "gameDateTime": "Sun 1:00",
       "projection": 10
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Jason Witten",
       "teamName": "Dal",
       "position": "TE",
       "status": null,
       "opponent": "Chi",
       "gameDateTime": "Sun 8:30",
       "projection": 6
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "Rashad Jennings",
       "teamName": "NYG",
       "position": "RB",
       "status": "Q",
       "opponent": "Wsh",
       "gameDateTime": "Sun 1:00",
       "projection": 11
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Chiefs D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "NYJ",
       "gameDateTime": "Sun 4:25",
       "projection": 6
     },
     "K": {
       "playerId": "K",
       "playerName": "Stephen Gostkowski",
       "teamName": "NE",
       "position": "K",
       "status": null,
       "opponent": "Hou",
       "gameDateTime": "Thu 8:25",
       "projection": 8
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Rob Gronkowski",
       "teamName": "NE",
       "position": "TE",
       "status": "Q",
       "opponent": "Hou",
       "gameDateTime": "Thu 8:25",
       "projection": 0
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "Jonathan Stewart",
       "teamName": "Car",
       "position": "RB",
       "status": "D",
       "opponent": "Min",
       "gameDateTime": "Sun 1:00",
       "projection": 0
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "Demaryius Thomas",
       "teamName": "Den",
       "position": "WR",
       "status": null,
       "opponent": "@Cin",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "Golden Tate",
       "teamName": "Det",
       "position": "WR",
       "status": null,
       "opponent": "@GB",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "DeSean Jackson",
       "teamName": "Wsh",
       "position": "WR",
       "status": "Q",
       "opponent": "@NYG",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Jameis Winston",
       "teamName": "TB",
       "position": "QB",
       "status": null,
       "opponent": "LA",
       "gameDateTime": "Sun 4:05",
       "projection": 15
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Phillip Dorsett",
       "teamName": "Ind",
       "position": "WR",
       "status": null,
       "opponent": "SD",
       "gameDateTime": "Sun 4:25",
       "projection": 7,
     },
  },
  {
     "teamName": "Kurt",
     "isMyTeam": false,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Andrew Luck",
       "teamName": "Ind",
       "position": "QB",
       "status": "Q",
       "opponent": "SD",
       "gameDateTime": "Sun 4:25",
       "projection": 19
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "Frank Gore",
       "teamName": "Ind",
       "position": "RB",
       "status": null,
       "opponent": "SD",
       "gameDateTime": "Sun 4:25",
       "projection": 11
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "Giovani Bernard",
       "teamName": "Cin",
       "position": "RB",
       "status": null,
       "opponent": "Den",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "T.Y. Hilton",
       "teamName": "Ind",
       "position": "WR",
       "status": null,
       "opponent": "SD",
       "gameDateTime": "Sun 4:25",
       "projection": 10
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Donte Moncrief*",
       "teamName": "Ind",
       "position": "WR",
       "status": "O",
       "opponent": "SD",
       "gameDateTime": "Sun 4:25",
       "projection": 0
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Julius Thomas",
       "teamName": "Jax",
       "position": "TE",
       "status": null,
       "opponent": "Bal",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "Keenan Allen*",
       "teamName": "SD",
       "position": "WR",
       "status": "IR",
       "opponent": "@Ind",
       "gameDateTime": "Sun 4:25",
       "projection": 0
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Texans D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "@NE",
       "gameDateTime": "Thu 8:25",
       "projection": 9
     },
     "K": {
       "playerId": "K",
       "playerName": "Justin Tucker",
       "teamName": "Bal",
       "position": "K",
       "status": null,
       "opponent": "@Jax",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Randall Cobb",
       "teamName": "GB",
       "position": "WR",
       "status": null,
       "opponent": "Det",
       "gameDateTime": "Sun 1:00",
       "projection": 9
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "DeMarco Murray",
       "teamName": "Ten",
       "position": "RB",
       "status": null,
       "opponent": "Oak",
       "gameDateTime": "Sun 1:00",
       "projection": 12
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "Eric Decker",
       "teamName": "NYJ",
       "position": "WR",
       "status": "Q",
       "opponent": "@KC",
       "gameDateTime": "Sun 4:25",
       "projection": 9
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "Ryan Mathews",
       "teamName": "Phi",
       "position": "RB",
       "status": null,
       "opponent": "Pit",
       "gameDateTime": "Sun 4:25",
       "projection": 6
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "Ameer Abdullah*",
       "teamName": "Det",
       "position": "RB",
       "status": "IR",
       "opponent": "@GB",
       "gameDateTime": "Sun 1:00",
       "projection": 0
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Tyrod Taylor",
       "teamName": "Buf",
       "position": "QB",
       "status": null,
       "opponent": "Ari",
       "gameDateTime": "Sun 1:00",
       "projection": 16
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Andy Dalton",
       "teamName": "Cin",
       "position": "QB",
       "status": null,
       "opponent": "Den",
       "gameDateTime": "Sun 1:00",
       "projection": 14,
     },
  },
  {
     "teamName": "Matt",
     "isMyTeam": false,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Cam Newton",
       "teamName": "Car",
       "position": "QB",
       "status": null,
       "opponent": "Min",
       "gameDateTime": "Sun 1:00",
       "projection": 20
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "Devonta Freeman",
       "teamName": "Atl",
       "position": "RB",
       "status": null,
       "opponent": "@NO",
       "gameDateTime": "Mon 8:30",
       "projection": 10
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "David Johnson",
       "teamName": "Ari",
       "position": "RB",
       "status": null,
       "opponent": "@Buf",
       "gameDateTime": "Sun 1:00",
       "projection": 15
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "Brandon Marshall",
       "teamName": "NYJ",
       "position": "WR",
       "status": "Q",
       "opponent": "@KC",
       "gameDateTime": "Sun 4:25",
       "projection": 10
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Brandin Cooks",
       "teamName": "NO",
       "position": "WR",
       "status": null,
       "opponent": "Atl",
       "gameDateTime": "Mon 8:30",
       "projection": 10
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Dwayne Allen",
       "teamName": "Ind",
       "position": "TE",
       "status": null,
       "opponent": "SD",
       "gameDateTime": "Sun 4:25",
       "projection": 7
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "Matt Forte",
       "teamName": "NYJ",
       "position": "RB",
       "status": "Q",
       "opponent": "@KC",
       "gameDateTime": "Sun 4:25",
       "projection": 13
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Panthers D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "Min",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "K": {
       "playerId": "K",
       "playerName": "Adam Vinatieri",
       "teamName": "Ind",
       "position": "K",
       "status": null,
       "opponent": "SD",
       "gameDateTime": "Sun 4:25",
       "projection": 9
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Larry Fitzgerald",
       "teamName": "Ari",
       "position": "WR",
       "status": "Q",
       "opponent": "@Buf",
       "gameDateTime": "Sun 1:00",
       "projection": 10
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "Melvin Gordon",
       "teamName": "SD",
       "position": "RB",
       "status": null,
       "opponent": "@Ind",
       "gameDateTime": "Sun 4:25",
       "projection": 10
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "Philip Rivers",
       "teamName": "SD",
       "position": "QB",
       "status": null,
       "opponent": "@Ind",
       "gameDateTime": "Sun 4:25",
       "projection": 19
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "John Brown",
       "teamName": "Ari",
       "position": "WR",
       "status": null,
       "opponent": "@Buf",
       "gameDateTime": "Sun 1:00",
       "projection": 6
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "T.J. Yeldon",
       "teamName": "Jax",
       "position": "RB",
       "status": null,
       "opponent": "Bal",
       "gameDateTime": "Sun 1:00",
       "projection": 6
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Danny Woodhead*",
       "teamName": "SD",
       "position": "RB",
       "status": "IR",
       "opponent": "@Ind",
       "gameDateTime": "Sun 4:25",
       "projection": 0
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Jordan Matthews",
       "teamName": "Phi",
       "position": "WR",
       "status": null,
       "opponent": "Pit",
       "gameDateTime": "Sun 4:25",
       "projection": 9,
     },
  },
  {
     "teamName": "Blair",
     "isMyTeam": false,
     "week": 3,
     "QB": {
       "playerId": "QB",
       "playerName": "Matt Ryan",
       "teamName": "Atl",
       "position": "QB",
       "status": null,
       "opponent": "@NO",
       "gameDateTime": "Mon 8:30",
       "projection": 18
     },
     "RB1": {
       "playerId": "RB",
       "playerName": "Ezekiel Elliott",
       "teamName": "Dal",
       "position": "RB",
       "status": null,
       "opponent": "Chi",
       "gameDateTime": "Sun 8:30",
       "projection": 12
     },
     "RB2": {
       "playerId": "RB",
       "playerName": "Matt Jones",
       "teamName": "Wsh",
       "position": "RB",
       "status": null,
       "opponent": "@NYG",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "WR1": {
       "playerId": "WR",
       "playerName": "DeAndre Hopkins",
       "teamName": "Hou",
       "position": "WR",
       "status": null,
       "opponent": "@NE",
       "gameDateTime": "Thu 8:25",
       "projection": 12
     },
     "WR2": {
       "playerId": "WR",
       "playerName": "Jarvis Landry",
       "teamName": "Mia",
       "position": "WR",
       "status": null,
       "opponent": "Cle",
       "gameDateTime": "Sun 1:00",
       "projection": 10
     },
     "TE": {
       "playerId": "TE",
       "playerName": "Greg Olsen",
       "teamName": "Car",
       "position": "TE",
       "status": null,
       "opponent": "Min",
       "gameDateTime": "Sun 1:00",
       "projection": 7
     },
     "FLEX": {
       "playerId": "FLEX",
       "playerName": "Will Fuller",
       "teamName": "Hou",
       "position": "WR",
       "status": null,
       "opponent": "@NE",
       "gameDateTime": "Thu 8:25",
       "projection": 9
     },
     "D/ST": {
       "playerId": "D/ST",
       "playerName": "Broncos D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "@Cin",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "K": {
       "playerId": "K",
       "playerName": "Dan Bailey",
       "teamName": "Dal",
       "position": "K",
       "status": null,
       "opponent": "Chi",
       "gameDateTime": "Sun 8:30",
       "projection": 8
     },
     "Bench1": {
       "playerId": "Bench",
       "playerName": "Doug Martin*",
       "teamName": "TB",
       "position": "RB",
       "status": "O",
       "opponent": "LA",
       "gameDateTime": "Sun 4:05",
       "projection": 0
     },
     "Bench2": {
       "playerId": "Bench",
       "playerName": "Sammy Watkins",
       "teamName": "Buf",
       "position": "WR",
       "status": "Q",
       "opponent": "Ari",
       "gameDateTime": "Sun 1:00",
       "projection": 9
     },
     "Bench3": {
       "playerId": "Bench",
       "playerName": "Carlos Hyde",
       "teamName": "SF",
       "position": "RB",
       "status": null,
       "opponent": "@Sea",
       "gameDateTime": "Sun 4:05",
       "projection": 7
     },
     "Bench4": {
       "playerId": "Bench",
       "playerName": "Drew Brees",
       "teamName": "NO",
       "position": "QB",
       "status": null,
       "opponent": "Atl",
       "gameDateTime": "Mon 8:30",
       "projection": 19
     },
     "Bench5": {
       "playerId": "Bench",
       "playerName": "Antonio Gates",
       "teamName": "SD",
       "position": "TE",
       "status": "Q",
       "opponent": "@Ind",
       "gameDateTime": "Sun 4:25",
       "projection": 9
     },
     "Bench6": {
       "playerId": "Bench",
       "playerName": "Bengals D/ST D/ST",
       "teamName": null,
       "position": null,
       "status": null,
       "opponent": "Den",
       "gameDateTime": "Sun 1:00",
       "projection": 8
     },
     "Bench7": {
       "playerId": "Bench",
       "playerName": "Theo Riddick",
       "teamName": "Det",
       "position": "RB",
       "status": null,
       "opponent": "@GB",
       "gameDateTime": "Sun 1:00",
       "projection": 8,
     }
  }
];


mongodb.run(function(db) {
  db.collection('week').insert({
    week: 3,
  });

  teams.forEach(function(team) {
    db.collection('teams').insert(team);
  });
});
