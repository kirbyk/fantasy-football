import React, { Component } from 'react';
import { Table } from 'reactable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4567/players', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      this.setState({
        players: data
      });
    }.bind(this)).catch(function(err) {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Table className="table" data={this.state.players} itemsPerPage={10} 
          pageButtonLimit={5} filterable={['display_name']} />
      </div>
    );
  }
}

export default App;
