type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { useState, type KeyboardEvent } from 'react'

import { BsSearch } from 'react-icons/bs'

import classes from './Search.module.css'

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState('')

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName)
    }
  }

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search
