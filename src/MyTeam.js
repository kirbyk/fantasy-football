import Autosuggest from 'react-autosuggest';
import Fuse from 'fuse.js';
import React, { Component } from 'react';
import { Table, Thead, Th } from 'reactable';
import './Players.css';


function getSuggestionValue(suggestion) {
  return suggestion.display_name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.display_name}</span>
  );
}

class MyTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuse: null,
      myPlayers: [],
      suggestions: [],
      value: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:4567/myteam', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      this.setState({
        myPlayers: data
      });
    }.bind(this)).catch(function(err) {
      console.error(err);
    });

    fetch('http://localhost:4567/players', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      this.setState({
        fuse: new Fuse(data, { keys: ['display_name'] }),
      });
    }.bind(this)).catch(function(err) {
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
      suggestions: this._getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  _getSuggestions(value) {
    return this.state.fuse.search(value);
  }

  render() {
    const {
      myPlayers,
      suggestions,
      value,
    } = this.state;

    const inputProps = {
      placeholder: 'Type a player.',
      value,
      onChange: this.onChange
    };

    return (
      <div className="players">
        <Table className="table" data={myPlayers} itemsPerPage={10} 
          pageButtonLimit={5} filterable={['display_name']}>
          <Thead className="thead-inverse">
            <Th column="display_name">Name</Th>
            <Th column="position">Position</Th>
          </Thead>
        </Table>

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
        <button>Add Player</button>
      </div>
    );
  }
}

export default MyTeam;
