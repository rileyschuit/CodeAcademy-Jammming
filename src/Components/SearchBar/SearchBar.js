import React, {Component} from 'react'
import './SearchBar.css'
// For shift enter option
// import '../Track/Track'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      term: ''
    }
    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  search () {
    this.props.onSearch(this.state.term)
  }

  handleTermChange (event) {
    this.setState({
      term: event.target.value
    })
  }

  // Nice find to speed up searching (no click on button)
  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.search()
    }
    // TODO Shift + Enter, add first results, if time allows
    // if (event.nativeEvent.shiftKey) {
    //   // console.log('Shift + Enter')
    // }
  }

  render () {
    return (
      <div className='SearchBar'>
        <input
          id='searchBar'
          placeholder='Enter A Song, Album, or Artist'
          onChange={this.handleTermChange}
          onKeyPress={this.handleKeyPress}
          defaultValue={this.props.searchTerm} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar
