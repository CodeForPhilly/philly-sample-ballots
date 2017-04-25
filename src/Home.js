import React from 'react'
import axios from 'axios'
import urljoin from 'url-join'

import Card from './Card'

const apiHost = process.env.REACT_APP_API_HOST

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      ballots: [],
      search: ''
    }
    this.matchesSearch = this.matchesSearch.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  async componentDidMount () {
    const url = urljoin(apiHost, '/api/ballots')
    const response = await axios.get(url)
    const ballots = response.data
    this.setState({ ballots })
  }

  render () {
    const filteredBallots = this.state.ballots.filter(this.matchesSearch)

    return (
      <div className='row columns'>
        <h1>Philly Sample Ballots</h1>
        <p>
          Tempor penatibus aenean a hendrerit hac sed faucibus conubia vestibulum in parturient a vestibulum fringilla senectus parturient sem eleifend fringilla condimentum a. Neque dignissim suscipit condimentum ullamcorper adipiscing dui ullamcorper adipiscing vestibulum dolor etiam urna mattis natoque duis quisque eros himenaeos.
        </p>
        <a href='/#submit' className='button'>
          Submit a Sample Ballot
        </a>
        <input
          type='text'
          value={this.state.search}
          placeholder='Search by attribution'
          onChange={this.updateSearch} />
        <div className='row small-up-2 medium-up-3 large-up-4'>
          {filteredBallots.map(Card)}
        </div>
      </div>
    )
  }

  matchesSearch (ballot) {
    const search = this.state.search
    const lowercaseAttribution = (ballot.attribution || '').toLowerCase()
    return !search || lowercaseAttribution.includes(search)
  }

  updateSearch (evt) {
    const value = evt.target.value
    this.setState({ search: value })
  }
}

export default Home
