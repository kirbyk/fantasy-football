import _ from 'lodash';
import { Box, Grid } from 'reflexbox';
import {
  ButtonOutline,
  Panel,
  PanelHeader,
} from 'rebass';
import React, { Component } from 'react';
import { Table, Thead, Th, Tr } from 'reactable';

import Constants from '../utils/Constants';
import PlayerSearch from './PlayerSearch';

import './Team.css';


class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: 'Edit Team',
      editingPosition: null,
      isEditing: false,
      team: props.team,
    };
  }

  toggleEditing() {
    const { editText, isEditing } = this.state;

    if (isEditing) {
      return this.setState({
        editText: 'Edit Team',
        isEditing: false,
      });
    }

    return this.setState({
      editText: 'Save Changes',
      isEditing: true,
    });
  }

  editRow(position) {
    let { team } = this.state;
    let player = team[position];

    player.playerName = <PlayerSearch
      onSelection={this.updatePlayerRow.bind(this)}
      currentWeek={team.week}
    />;
    team[position] = player;

    this.setState({
      editingPosition: position,
      team: team,
    });
  }

  updatePlayerRow(player) {
    let { editingPosition, team } = this.state;

    team[editingPosition] = player;

    this.setState({
      team: team,
    });

    fetch(`http://localhost:4567/teams`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        team: team,
      }),
    }).catch(function(err) {
      console.error(err);
    });
  }

  render() {
    const { editText, team } = this.state;

    const projectedScore = _.reduce(team, function(sum, val, key) {
      if (_.includes(Constants.positions.starting, key)) {
        return sum + parseFloat(val.projection);
      }

      return sum;
    }, 0).toFixed(1);

    // TODO: fix the box spacing
    return (
      <Box col={6} p={1} className="team">
        <Panel>
          <PanelHeader>
            <Grid col={6}>
              {team.teamName} | Projected Score: {projectedScore}
            </Grid>
            <Grid col={6}>
              <Box flex justify="flex-end">
                <ButtonOutline color="white" onClick={this.toggleEditing.bind(this)}>
                  {editText}
                </ButtonOutline>
              </Box>
            </Grid>
          </PanelHeader>

          <Table className="table">
            <Thead className="thead-inverse">
              <Th column="slot">Slot</Th>
              <Th column="playerName">Name</Th>
              <Th column="position">Position</Th>
              <Th column="projection">Projected</Th>
              <Th column="status">Status</Th>
              <Th column="gameDateTime">Day Time</Th>
              <Th column="teamName">Team</Th>
              <Th column="opponent">Opponent</Th>
            </Thead>

            {Constants.positions.starting.map((position) => (
              <Tr onClick={() => this.editRow(position)} data={{slot: position, ...team[position]}} />
            ))}

            <Tr className="seperator" />

            {Constants.positions.bench.map((position) => (
              <Tr onClick={() => this.editRow(position)} data={{slot: 'Bench', ...team[position]}} />
            ))}
          </Table>
        </Panel>
      </Box>
    );
  }
}

export default Team;
