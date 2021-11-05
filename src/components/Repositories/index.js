import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RepositoriesItens from "../RepositoriesItens";

import './style.css'

function Repositories(){
  return (
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
        <RepositoriesItens
          name="bootcamp-DIO-carrefour"
          linkToRepo='https://github.com/EdsonOttoni/bootcamp-DIO-carrefour'
          fullName='EdsonOttoni/bootcamp-DIO-carrefour'
        />
      </TabPanel>
      <TabPanel className='TabPanel'>Panel 2</TabPanel>
    </Tabs>
  )
}

export default Repositories