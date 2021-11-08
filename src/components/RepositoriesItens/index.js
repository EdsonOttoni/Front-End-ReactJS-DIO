import React from "react"

import './styles.css'

function RepositoriesItens({ name, linkToRepo, fullName }){
  return(
    <div className='wrapper'>
      <h2>{name}</h2>
      <h4>Full Name:</h4>
      <a 
        href={linkToRepo}
        target='_blank'
        rel='noreferrer'
      >
        {fullName}
      </a>
    </div>
  )
}

export default RepositoriesItens