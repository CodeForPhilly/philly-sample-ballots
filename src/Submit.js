import React from 'react'

class Submit extends React.Component {
  render () {
    return (
      <div className='row columns'>
        <form>

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
}

export default Submit
