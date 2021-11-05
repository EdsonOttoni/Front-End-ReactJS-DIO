import React from 'react'
import App from './App'
import GithubProvider from './provider/GithubProvider'

function Providers() {
  return (
    <GithubProvider>
      <App/>
    </GithubProvider>
  )
}

export default Providers
