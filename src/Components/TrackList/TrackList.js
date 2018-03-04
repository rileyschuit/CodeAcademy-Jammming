import React, { Component } from 'react'
import './TrackList.css'
import Track from '../Track/Track'

export default class TrackList extends Component {
  render () {
    return (
      <div className='TrackList'>
        {
          this.props.tracks.map(track => {
            return <Track track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove} />
          })
        }
      </div>
    )
  }
}

// this is a sanity check
// export default TrackList
