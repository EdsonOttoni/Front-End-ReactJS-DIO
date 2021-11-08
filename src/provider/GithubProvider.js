import React, { createContext, useState, useCallback} from "react"
import api from "../services/api"

export const GithubContext = createContext({
  user: {},
  repositories: {},
  starred: {}
})

function GithubProvider({children}){
  const [githubState, setGithubState] = useState({
    loading:false,
    hasUser: false,
    user:{
      id: undefined,
      login: undefined,
      name: undefined,
      avatarUrl: undefined,
      company: undefined,
      blog: undefined,
      htmlUrl: 0,
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos:0
    },
    repositories: [],
    starred: []
  })

  const getUser = (username) => {

    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }))

    api.get(`users/${username}`).then(({data}) => {
      setGithubState((prevState) => ({
        ...prevState,
        hasUser: true,
        user:{
          id: data.id,
          login: data.login,
          name: data.name,
          blog: data.blog,
          company: data.company,
          avatarUrl: data.avatar_url,
          location: data.location,
          htmlUrl: data.html_url,
          followers: data.followers,
          following: data.following,
          publicGists: data.public_gists,
          publicRepos: data.public_repos
        }
      }))
    }).finally(() => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading
      }))
    })
  }

  const getRepos = (username) => {
    api.get(`users/${username}/repos`).then(({data}) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data
      }))
    })
  }

  const getStarred = (username) => {
    api.get(`users/${username}/starred`).then(({data}) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data
      }))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username),[]),
    getRepos: useCallback((username) => getRepos(username), []),
    getStarred: useCallback((username) => getStarred(username), [])
  }

  return(
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider