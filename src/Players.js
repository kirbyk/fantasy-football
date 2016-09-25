import React, { Component } from 'react';
import { Box, Grid } from 'reflexbox';
import { ButtonOutline } from 'rebass';
import { Table, Thead, Th } from 'reactable';


class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    const { currentWeek } = this.props;

    fetch(`http://localhost:4567/players?week=${currentWeek}`, {
      method: 'GET'
    }).then(function(response) {
      return response.json();
    }).then(function(players) {
      this.setState({
        players: players
      });
    }.bind(this)).catch(function(err) {
      console.error(err);
    });
  }

  updatePlayers() {
    const { currentWeek } = this.props;

    fetch(`http://localhost:4567/players`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        week: currentWeek
      }),
    }).catch(function(err) {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="players">
        <div>
          <Grid col={6} p={2}>
            Hello
          </Grid>
          <Grid col={6} p={2}>
            <Box flex justify="flex-end">
              <ButtonOutline big onClick={this.updatePlayers.bind(this)}>Update Players</ButtonOutline>
            </Box>
          </Grid>
        </div>
        <Table className="table" data={this.state.players} itemsPerPage={10} 
          pageButtonLimit={5} filterable={['playerName']}>
          <Thead className="thead-inverse">
            <Th column="playerName">Name</Th>
            <Th column="position">Position</Th>
            <Th column="projection">Projected</Th>
            <Th column="status">Status</Th>
            <Th column="teamName">Team</Th>
          </Thead>
        </Table>
      </div>
    );
  }
}

export default Players;
