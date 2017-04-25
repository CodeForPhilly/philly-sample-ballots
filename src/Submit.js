import React from 'react'
import getFormData from 'get-form-data'
import axios from 'axios'
import urljoin from 'url-join'

const apiHost = process.env.REACT_APP_API_HOST

class Submit extends React.Component {
  constructor () {
    super()
    this.state = { status: null }
  }

  render () {
    return (
      <div className='row columns'>
        {this.state.status && StatusBox(this.state.status)}
        <form onSubmit={this.onSubmit.bind(this)}>

          <div className='row columns'>
            <label>
              Polling Place or Ward + Division number
              <input type='text' name='location'
                placeholder='e.g. West Philadelphia High School' />
            </label>
          </div>

          <div className='row columns'>
            <label>
              Attribution
              <input type='text' name='attribution'
                placeholder='e.g. Friends of 1st Ward' />
            </label>
          </div>

          <div className='row columns'>
            <label>
              Your comments
              <input type='text' name='comments' placeholder='' />
            </label>
          </div>

          <div className='row columns'>
            <label htmlFor='image' className='button secondary'>
              + Add Photo of Ballot
            </label>
            <input type='file' id='image' className='show-for-sr' />
          </div>

          <div className='row columns'>
            <button type='submit' className='button'>Submit</button>
          </div>

        </form>
      </div>
    )
  }

  async onSubmit (evt) {
    evt.preventDefault()
    const formData = getFormData(evt.target)
    const url = urljoin(apiHost, '/api/ballots')
    const response = await axios.post(url, formData)
    if (response.status >= 200 && response.status < 300) {
      this.setState({ status: 'submitted' })
    } else {
      this.setState({ status: 'failed' })
    }
  }
}

function StatusBox (status) {
  const className = (status === 'submitted')
    ? 'callout success'
    : 'callout alert'
  const contents = (status === 'submitted')
    ? 'Thanks for submitting your sample ballot. It will be reviewed and published shortly.'
    : 'There was an issue submitting your sample ballot.'

  return (
    <div className={className}>
      <p>{contents}</p>
    </div>
  )
}

export default Submit
