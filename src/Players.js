import React, { Component } from 'react';
import { Table, Thead, Th } from 'reactable';


class Players extends Component {
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
      <div className="players">
        <Table className="table" data={this.state.players} itemsPerPage={10} 
          pageButtonLimit={5} filterable={['display_name']}>
          <Thead className="thead-inverse">
            <Th column="active">Active</Th>
            <Th column="display_name">Name</Th>
            <Th column="team">Team</Th>
            <Th column="position">Position</Th>
          </Thead>
        </Table>
      </div>
    );
  }
}

export default Players;
