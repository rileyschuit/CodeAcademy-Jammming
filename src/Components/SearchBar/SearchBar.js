import React, { Component } from 'react'
import './SearchBar.css'

export class SearchBar extends React.Component {
  constructor (props) {
    super()

    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  search () {
    this.props.onSearch(this.state.term)
  }

  handleTermChange (event) {
    this.setState({ term: event.target.value })
  }

  render () {
    return (
      <div className='SearchBar'>
        <input onChange={this.handleTermChange} placeholder='Enter A Song, Album, or Artist' />
        <a>SEARCH</a>
      </div>
    )
  };
}
