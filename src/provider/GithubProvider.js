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
    user:{
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
        user:{
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

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username),[])
  }

  return(
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider