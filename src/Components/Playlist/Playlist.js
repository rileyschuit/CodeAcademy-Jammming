import React, { Component } from 'react'
import '../TrackList/TrackList'
import './Playlist.css'

class Playlist extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    return(
      <div className="Playlist">
        <input value="New Playlist"/>
        {/* Add a TrackList component */}
        <a className="Playlist-save" defaultValue={'New Playlist'}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist
