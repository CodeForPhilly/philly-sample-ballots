import React from 'react'

class Submit extends React.Component {
  render () {
    return (
      <div className='row columns'>
        <form>
          <div className='row'>
            <h1>Submit a Sample Ballot</h1>
            <div className='medium-6 columns'>
              <label>Polling Place or Ward + Division number
                <input type='text' placeholder='e.g. West Philadelphia High School'/>
              </label>
            </div>
            <div className='medium-6 columns'>
              <label>Attribution (e.g. Friends of 1st Ward)
                <input type='text' placeholder=''/>
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='large-12 columns'>
              <label>You comments
                <input type='text' placeholder=''/>
              </label>
            </div>
            <div className='medium-6 columns'>
              <label htmlFor='exampleFileUpload' className='button'>Upload Photo of Ballot</label>
              <input type='file' id='exampleFileUpload' className='show-for-sr'/>
            </div>  
          </div>  
        </form>
      </div>
    )
  }
}

export default Submit