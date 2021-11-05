import React from "react";
import useGithub from "../../hooks/githubHooks";

import './style.css'

function Profile(){

  const { githubState } = useGithub()

  return(
    <div className='container'>
      <img
        className='img-container'
        src={githubState.user.avatarUrl} 
        alt='foto do usuario'
      />
      <div className='info-user-container'>
        <h1>{githubState.user.name}</h1>
        <div>
          <h3>Username:</h3>
          <a
            href={githubState.user.htmlUrl}
            target='_blank'
            rel='noreferrer'
            >
              {githubState.user.login}
          </a>
        </div>
        <div className='status-container'>
          <div> 
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.publicGists}</span>
          </div>
          <div>
            <h4>Repositories</h4>
            <span>{githubState.user.publicRepos}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile