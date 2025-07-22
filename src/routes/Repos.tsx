import type { RepoProps } from '../types/Repo'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BackBtn from '../components/BackBtn'
import Loader from '../components/Loader'

// import classes from './Repos.module.css'

const Repos = () => {
  const { username } = useParams()

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)

  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsloading(true)

      const res = await fetch(`https://api.github.com/users/${username}/repos`)

      const data = await res.json()

      setIsloading(false)

      setRepos(data)

      console.log(data)
    }
    if (username) {
      loadRepos(username)
    }
  }, [username])

  if (!repos && isloading) return <Loader />

  return (
    <div>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Usuário não tem repositorio</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repo: RepoProps) => (
            <p>{repo.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Repos
