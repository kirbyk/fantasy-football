import { Flex } from 'reflexbox';
import React, { Component } from 'react';

import Team from './Team';


class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    const { currentWeek } = this.props;

    fetch(`http://localhost:4567/teams?week=${currentWeek}`, {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(teams) {
      this.setState({
        teams: teams
      });
    }.bind(this)).catch(function(err) {
      console.error(err);
    });
  }

  render() {
    const { teams } = this.state;

    return (
      <Flex wrap className="teams">
        <For each="team" of={teams}>
          <Team team={team} key={team.teamName} />
        </For>
      </Flex>
    );
  }
}

export default Teams;
