import React, { Component } from 'react'
import '../TrackList/TrackList'
import './playlist.css'

class Playlist extends React.Component {
  constructor (props) {
    super()
    this.handleNameChange = this.handleNameChange.bind(this)

  }

  handleNameChange (event) {
    this.props.onNameChange(event.target.value)
  }

  render () {
    return (
      <div className='Playlist'>
        <input onChange={this.handleNameChange} defaultValue={'New "Mix Tape" ;-)'} />
        {/* Add a TrackList component */}
        <a className='Playlist-save'
          onClick={this.props.onSave}
          defaultValue={'New Playlist'}>
          SAVE TO SPOTIFY
        </a>
      </div>
    )
  }
}

export default Playlist
