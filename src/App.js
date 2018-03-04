import React, { Component } from 'react'
import './App.css'

// import SearchBar from './Components/SearchBar/SearchBar'
import SearchBarResults from './Components/SearchResults/SearchResults'
import Playlist from './Components/Playlist/Playlist'

class App extends React.Component {
  constructor (props) {
    super()

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)

    this.state = {
      searchResults: [
        {name: 'a', artist: 'b', album: 'c'},
        {name: 'd', artist: 'e', album: 'f'}
      ],

      playlistName: 'myfancyplaylistName',
      playlistTracks: [
        {name: 'g', artist: 'h', album: 'i'},
        {name: 'j', artist: 'k', album: 'l'}
      ]
    }
  }

  addTrack (track) {
    let ExistingTracks = this.state.playlistTracks
    ExistingTracks.push(track)
    this.setState({ playlistTracks: ExistingTracks })
  }

  removeTrack (track) {
    let ExistingTracks = this.state.playlistTracks
    ExistingTracks = ExistingTracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({ playlistTracks: ExistingTracks })
  }

  updatePlaylistName (name) {
    this.setState({playlistName: name})
  }

  render () {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className='App'>
          {/*  Add a SearchBar component */}
          <div className='App-playlist'>
            <SearchBarResults searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
