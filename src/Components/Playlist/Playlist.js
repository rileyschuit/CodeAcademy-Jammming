import React, { Component } from 'react'
import TrackList from "../TrackList/TrackList"
import './Playlist.css'

class Playlist extends React.Component {
  constructor (props) {
    super()

    this.handleNameChange = this.handleNameChange.bind(this)
    // this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleNameChange (event) {
    this.props.onNameChange(event.target.value)
  }

  // TODO If time allows, when you hit enter get playlist and populate

  render () {
    return (
      <div className='Playlist'>
        <input onChange={this.handleNameChange} placeholder={'New "Mix Tape" ;-)'} />
        <TrackList tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          onKeyPress={this.props.handleKeyPress}
          />
        <a className='Playlist-save' onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist
