import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './Components/SearchBar/SearchBar';
import SearchBarResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      searchResults: [
        {name: "a", artist: "b", album: "c"},
        {name: "d", artist: "e", album: "f"},
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*  Add a SearchBar component */}
          <div className="App-playlist">
            <SearchBarResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
