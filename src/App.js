import React, { Component } from 'react';

import Navbar from './Navbar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWeek: 3, // TODO: can't change this with the dropdown
    };
    this.switchWeek = this.switchWeek.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4567/week', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      this.setState({
        currentWeek: data.week
      });
    }.bind(this));
  }

  switchWeek(event) {
    const newWeek = parseInt(event.target.value, 10);

    this.setState({
      currentWeek: newWeek,
    });
    this.forceUpdate();

    fetch('http://localhost:4567/week', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        week: newWeek
      })
    }).catch(function(err) {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar {...this.state}
          switchWeek={this.switchWeek}
        />
        <div>{React.cloneElement(this.props.children, {...this.state})}</div>
      </div>
    );
  }
}

export default App;
