import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useGithub from "../../hooks/githubHooks";
import RepositoriesItens from "../RepositoriesItens";

import './style.css'

function Repositories(){

  const {githubState, getRepos, getStarred} = useGithub()

  const [hasUser, setHasUser] = useState(false)

  useEffect(() => {
    if(githubState.user.login){
      getRepos(githubState.user.login)
      getStarred(githubState.user.login)
    }
    setHasUser(githubState.repositories)
    setHasUser(githubState.starred)
  }, [githubState.user.login])

  return (
    <>
      {
        hasUser ?
          <Tabs
            className='Tabs' 
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'
          >
            <TabList className='TabList'>
              <Tab className='Tab'>Repositories</Tab>
              <Tab className='Tab'>starred</Tab>
            </TabList>
            <TabPanel className='TabPanel'>
              <div className='warper-list'>
                {githubState.repositories.map((item) =>(
                  <RepositoriesItens
                    name={item.name}
                    linkToRepo={item.html_url}
                    fullName={item.full_name}
                  />
                ))}
              </div>
            </TabPanel>
            <TabPanel className='TabPanel'>
              {githubState.starred.map((item) =>(
                  <RepositoriesItens
                    name={item.name}
                    linkToRepo={item.html_url}
                    fullName={item.full_name}
                  />
                ))}
            </TabPanel>
          </Tabs>
        :<></>
      }
    </>
  )
}

export default Repositories