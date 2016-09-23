import _ from 'lodash';
import { Box } from 'reflexbox';
import {
  Panel,
  PanelHeader,
} from 'rebass';
import React, { Component } from 'react';
import { Table, Thead, Th, Tr } from 'reactable';

import Constants from '../utils/Constants';

import './Team.css';


class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { team } = this.props;

    const projectedScore = _.reduce(team, function(sum, val, key) {
      if (_.includes(Constants.positions.starting, key)) {
        return sum + val.projection;
      }

      return sum;
    }, 0);

    // TODO: fix the box spacing
    return (
      <Box col={6} p={1} className="team">
        <Panel>
          <PanelHeader>
            {team.teamName} | Projected Score: {projectedScore}
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

            <Tr className="QB-row" data={{slot: 'QB', ...team.QB}} />
            <Tr className="RB1-row" data={{slot: 'RB', ...team.RB1}} />
            <Tr className="RB2-row" data={{slot: 'RB', ...team.RB2}} />
            <Tr className="WR1-row" data={{slot: 'WR', ...team.WR1}} />
            <Tr className="WR2-row" data={{slot: 'WR', ...team.WR2}} />
            <Tr className="TE-row" data={{slot: 'TE', ...team.TE}} />
            <Tr className="FLEX-row" data={{slot: 'FLEX', ...team.FLEX}} />
            <Tr className="D/ST-row" data={{slot: 'D/ST', ...team['D/ST']}} />
            <Tr className="K-row" data={{slot: 'K', ...team.K}} />

            <Tr className="seperator" />

            <Tr className="Bench1-row" data={{slot: 'Bench', ...team.Bench1}} />
            <Tr className="Bench2-row" data={{slot: 'Bench', ...team.Bench2}} />
            <Tr className="Bench3-row" data={{slot: 'Bench', ...team.Bench3}} />
            <Tr className="Bench4-row" data={{slot: 'Bench', ...team.Bench4}} />
            <Tr className="Bench5-row" data={{slot: 'Bench', ...team.Bench5}} />
            <Tr className="Bench6-row" data={{slot: 'Bench', ...team.Bench6}} />
            <Tr className="Bench7-row" data={{slot: 'Bench', ...team.Bench7}} />
          </Table>
        </Panel>
      </Box>
    );
  }
}

export default Team;
