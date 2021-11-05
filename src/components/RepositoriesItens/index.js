import React from "react"

function RepositoriesItens({ name, linkToRepo, fullName }){
  return(
    <React.Fragment>
      <h2>{name}</h2>
      <h4>Full Name:</h4>
      <a 
        href={linkToRepo}
        target='_blank'
        rel='noreferrer'
      >
        {fullName}
      </a>
    </React.Fragment>
  )
}

export default RepositoriesItens