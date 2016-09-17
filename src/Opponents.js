// TODO: this entire file was copied from MyTeam and much of it should be abstracted
import _ from 'lodash';
import React, { Component } from 'react';
import Select from 'react-select';
import { Table, Thead, Th, Tr } from 'reactable';

import './Opponents.css';
import 'react-select/dist/react-select.css';


class Opponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opponents: [],
      week: 1,
    };
  }

  // TODO: move these around more intelligently
  componentDidMount() {
    fetch('http://localhost:4567/week', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      this.setState({
        week: data.week
      });
      return data.week;
    }.bind(this)).then(function(week) {
      fetch(`http://localhost:4567/opponents?week=${week}`, {
        method: 'get'
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({
          opponents: data
        });
      }.bind(this)).catch(function(err) {
        console.error(err);
      });
    }.bind(this)).catch(function(err) {
      console.error(err);
    });
  }

  addOpponent(opponentName) {
    fetch('http://localhost:4567/opponents', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        week: val,
        opponentName: opponentName,
      })
    }).catch(function(err) {
      console.error(err);
    });
  }

  onWeekChange(val) {
    this.setState({
      week: val
    });

    fetch('http://localhost:4567/week', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        week: val
      })
    }).catch(function(err) {
      console.error(err);
    });
  }

  render() {
    const {
      opponents,
      week,
    } = this.state;

    // TODO: abstract this
    var options = [
      { value: 1, label: 'Week One' },
      { value: 2, label: 'Week Two' },
      { value: 3, label: 'Week Three' },
      { value: 4, label: 'Week Four' },
      { value: 5, label: 'Week Five' },
      { value: 6, label: 'Week Six' },
      { value: 7, label: 'Week Seven' },
      { value: 8, label: 'Week Eight' },
      { value: 9, label: 'Week Nine' },
      { value: 10, label: 'Week Ten' },
      { value: 11, label: 'Week Eleven' },
      { value: 12, label: 'Week Twelve' },
      { value: 13, label: 'Week Thirteen' },
      { value: 14, label: 'Week Fourteen' },
      { value: 15, label: 'Week Fifteen' },
      { value: 16, label: 'Week Sixteen' },
      { value: 17, label: 'Week Seventeen' },
    ];

    var opponentMarkups = _.map(opponents, function(opponent, index) {
      var total = _.reduce(opponent.players, function(sum, player) {
        return sum + parseFloat(player.standard);
      }, 0);

      return (
        <div className="opponent" key={index}>
          <h1>{opponent.name}</h1>

          <Table className="table" data={opponent.players}>
            <Thead className="thead-inverse">
              <Th column="name">Name</Th>
              <Th column="position">Position</Th>
              <Th column="standard">Projected</Th>
            </Thead>
            <Tr className="special-row"
            data={{ name: '', position: '', standard: total }} />
          </Table>
      </div>
      );
    });

    return (
      <div className="opponents">
        <Select
          name="week"
          value={week}
          options={options}
          onChange={this.onWeekChange.bind(this)}
        />

        { opponentMarkups }

        <button onClick={this.addOpponent().bind(this)}>Add Opponent</button>
      </div>
    );
  }
}

export default Opponents;
