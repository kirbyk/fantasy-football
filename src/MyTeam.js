import React, { Component } from 'react';
import { Table, Thead, Th } from 'reactable';
import './Players.css';

class MyTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4567/myteam', {
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
    var returned = null;

    console.log(this.state.players);

    if (this.state.players.length > 0) {
      returned = 
        <Table className="table" data={this.state.players} itemsPerPage={10} 
          pageButtonLimit={5} filterable={['display_name']}>
          <Thead className="thead-inverse">
            <Th column="display_name">Name</Th>
            <Th column="position">Position</Th>
          </Thead>
        </Table>;
    } else {
      returned = <span>Add Player</span>
    }

    return (
      <div className="players">
        { returned }
      </div>
    );
  }
}

export default MyTeam;
