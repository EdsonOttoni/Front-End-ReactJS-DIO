import { useContext } from "react"
import {GithubContext} from '../provider/GithubProvider'

const useGithub = () => {
  const { githubState, getUser } = useContext(GithubContext)

  return { githubState, getUser }
}

export default useGithub