import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import MyTeam from './MyTeam';
import Player from './Player';
import Players from './Players';
import NotFound from './NotFound';
import Opponents from './Opponents';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/myteam" component={MyTeam}/>
      <Route path="/opponents" component={Opponents}/>
      <Route path="/players" component={Players}/>
      <Route path="/players/:playerId" component={Player}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'));
