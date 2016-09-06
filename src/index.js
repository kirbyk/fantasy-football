import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Player from './Player';
import Players from './Players';
import NotFound from './NotFound';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="players" component={Players}/>
      <Route path="/players/:playerId" component={Player}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'));
