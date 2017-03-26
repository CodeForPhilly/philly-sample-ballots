import React from 'react'
import axios from 'axios'

import Card from './Card'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      submissions: []
    }
  }

  async componentDidMount () {
    const bookId = '58d6997b49ee860300e92889'
    const url = `https://api.fieldbook.com/v1/${bookId}/submissions?status=Approved`
    const response = await axios.get(url)
    this.setState({ submissions: response.data })
  }

  render () {
    return (
      <div className='row columns'>
        <h1>Philly Sample Ballots</h1>
        <p>
          Tempor penatibus aenean a hendrerit hac sed faucibus conubia vestibulum in parturient a vestibulum fringilla senectus parturient sem eleifend fringilla condimentum a. Neque dignissim suscipit condimentum ullamcorper adipiscing dui ullamcorper adipiscing vestibulum dolor etiam urna mattis natoque duis quisque eros himenaeos.
        </p>
        <a href='https://fieldbook.com/forms/8d52a573-8399-4e88-b95a-6b3927c02fcf' className='button'>
          Submit a Sample Ballot
        </a>
        <div className='row small-up-2 medium-up-3 large-up-4'>
          {this.state.submissions.map(Card)}
        </div>
      </div>
    )
  }
}

export default Home