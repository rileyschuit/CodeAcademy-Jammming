import React, { Component } from 'react'
import './SearchBar.css'

export class SearchBar extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <a>SEARCH</a>
    </div>
  };
}
