import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Teams from './Teams';
import Players from './Players';
import NotFound from './NotFound';
import './index.css';

// TODO: fix that you can't go to root...
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/teams" component={Teams}/>
      <Route path="/players" component={Players}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'));
