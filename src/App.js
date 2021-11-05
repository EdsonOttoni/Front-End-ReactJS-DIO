import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./hooks/githubHooks";

function App() {
const {githubState} = useGithub()

  return (
    <Header>
      {githubState.loading ? (
          <p>loading</p>
        ):(
          <>
            <Profile/>
            <Repositories/>
          </>
        )
      }
    </Header>
  );
}

export default App;
