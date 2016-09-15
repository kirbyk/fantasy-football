import _ from 'lodash';
import Autosuggest from 'react-autosuggest';
import fuzzysearch from 'fuzzysearch';
import React, { Component } from 'react';
import Select from 'react-select';
import { Table, Thead, Th, Tr } from 'reactable';

import './MyTeam.css';
import 'react-select/dist/react-select.css';



function getSuggestions(players, value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : players.filter(player =>
    fuzzysearch(inputValue, player.name.toLowerCase())
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class MyTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayers: [],
      myPlayers: [],
      suggestions: [],
      value: '',
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
      fetch(`http://localhost:4567/team/players?week=${week}`, {
        method: 'get'
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({
          myPlayers: data.players
        });
      }.bind(this)).catch(function(err) {
        console.error(err);
      });

      fetch(`http://localhost:4567/players?week=${week}`, {
        method: 'get'
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({
          allPlayers: data.players
        });
      }.bind(this)).catch(function(err) {
        console.error(err);
      });
    }.bind(this)).catch(function(err) {
      console.error(err);
    });

  }

  onSuggestionSelected(event, data) {
    const { suggestion } = data;

    const index = this.state.allPlayers.indexOf(suggestion);

    this.setState({
      allPlayers: [
        ...this.state.allPlayers.slice(0, index),
        ...this.state.allPlayers.slice(index + 1)
      ],
      myPlayers: this.state.myPlayers.concat(suggestion),
      value: '',
    });

    fetch('http://localhost:4567/team/players', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        week: suggestion.week, // TODO: this seems redundant...
        player: suggestion
      })
    }).catch(function(err) {
      console.error(err);
    });
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(this.state.allPlayers, value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

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
      myPlayers,
      suggestions,
      value,
      week,
    } = this.state;

    const inputProps = {
      placeholder: 'Type a player.',
      value,
      onChange: this.onChange
    };

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

    var total = _.reduce(myPlayers, function(sum, player) {
      return sum + parseFloat(player.standard);
    }, 0);

    return (
      <div className="players">
        <Select
          name="week"
          value={week}
          options={options}
          onChange={this.onWeekChange.bind(this)}
        />

        <Table className="table" data={myPlayers} itemsPerPage={20} 
          pageButtonLimit={5} filterable={['display_name']}>
          <Thead className="thead-inverse">
            <Th column="name">Name</Th>
            <Th column="position">Position</Th>
            <Th column="standard">Projected</Th>
          </Thead>
          <Tr className="special-row"
          data={{ name: '', position: '', standard: total }} />
        </Table>

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected.bind(this)}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default MyTeam;
