import React from "react";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./hooks/githubHooks";

function App() {
const {githubState} = useGithub()

  return (
    <Header>
      {
        githubState.hasUser ? <>
          {
            githubState.loading ? (
              <p>loading</p>
            ):(
              <>
                <Profile/>
                <Repositories/>
              </>
            )
          }
        </> : <HomeScreen/>
      }
    </Header>
  );
}

export default App;
