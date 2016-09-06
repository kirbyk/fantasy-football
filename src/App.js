import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Home
        <Link to='/players'>Players</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
