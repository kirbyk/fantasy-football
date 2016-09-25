import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';
import fuzzysearch from 'fuzzysearch';

import './PlayerSearch.css';


// TODO: only suggest players that can fit into the current slot
function getSuggestions(players, value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : players.filter(player =>
    fuzzysearch(inputValue, player.playerName.toLowerCase())
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.playerName;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.playerName}</span>
  );
}

class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availablePlayers: [],
      suggestions: [],
      value: '',
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
        availablePlayers: players
      });
    }.bind(this)).catch(function(err) {
      console.error(err);
    });
  }

  onSuggestionSelected(event, data) {
    const { suggestion } = data;

    const index = this.state.availablePlayers.indexOf(suggestion);

    this.setState({
      availablePlayers: [
        ...this.state.availablePlayers.slice(0, index),
        ...this.state.availablePlayers.slice(index + 1)
      ],
      value: '',
    });

    this.props.onSelection(suggestion);
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(this.state.availablePlayers, value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const {
      suggestions,
      value,
    } = this.state;

    const inputProps = {
      placeholder: 'Type a player.',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
	suggestions={suggestions}
	onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
	onSuggestionsClearRequested={this.onSuggestionsClearRequested}
	onSuggestionSelected={this.onSuggestionSelected.bind(this)}
	getSuggestionValue={getSuggestionValue}
	renderSuggestion={renderSuggestion}
	inputProps={inputProps}
      />
    );
  }
}

export default PlayerSearch;
