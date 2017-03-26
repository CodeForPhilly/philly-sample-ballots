import React from 'react'

import TopBar from './TopBar'
import './Layout.css'

class Layout extends React.Component {
  render () {
    return (
      <div className='container'>
        <TopBar />
        {this.props.children}
      </div>
    )
  }
}

export default Layout