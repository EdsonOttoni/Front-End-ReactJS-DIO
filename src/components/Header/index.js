import React, {useState} from "react";
import useGithub from "../../hooks/githubHooks";

import './styles.css'

function Header({children}){
  const {getUser} = useGithub()
  const [username, setUsername] = useState()
  
  const submitGetUser = () => {
    if(!username) return
    return getUser(username)
  }

  return(
    <>
      <div div className='header-container'>
        <input
          type='text'
          placeholder='Digite um nome pra buscar'
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={submitGetUser}>Buscar</button>
      </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default Header