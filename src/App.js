import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("./Squad.json")
    .then(res => res.json())
    .then(users => this.setState({players: users}));
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value});
  };

  render() {
    const {players, searchField} = this.state;
    const filteredPlayers = players.filter(player => 
      player.name.toLowerCase().includes(searchField.toLowerCase())
    ) 
    return (
      <div className="App">
        <h1> Real Madrid </h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList players = {filteredPlayers} />
      </div>
    );
  }
}

export default App;
