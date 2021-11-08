import React from 'react'
import App from './App'
import GithubProvider from './provider/GithubProvider'

import './assets/styles/global.css'

function Providers() {
  return (
    <GithubProvider>
      <App/>
    </GithubProvider>
  )
}

export default Providers
