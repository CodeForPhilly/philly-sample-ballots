import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './Layout'
import Home from './Home'
import Submit from './Submit'
import SignUp from './SignUp'

const router = {
  '': <Home />,
  'submit': <Submit />,
  'signup': <SignUp />
}

window.onhashchange = renderCurrentRoute
renderCurrentRoute()

function renderCurrentRoute () {
  const hash = window.location.hash.substr(1)
  const component = router[hash] || router['']

  ReactDOM.render(
    <Layout>{component}</Layout>,
    document.getElementById('root')
  )
}