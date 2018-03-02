import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.track.name} </h3>
          <p> {this.props.track.artist} | {this.props.track.album} </p>
        </div>
      </div>
    );
  }
}

export default Track;
